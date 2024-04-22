import { Button } from "@nextui-org/react"
import "./forms.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function LogForm({ userType }) {

    const [logging, setLogging] = useState(false)
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const login = () => {
        setLogging(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(loginInfo)
        };

        fetch(`http://localhost:3000/api/${userType ? `/loginRest` : `/loginUser`}`, requestOptions)
            .then(resp => {
                console.log(resp)
                if (resp.ok) navigate("/home")
            })
            .then(data => console.log(data))
    }

    return (
        <div className="w-[20rem] flex flex-col items-center m-auto gap-6">
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input onChange={handleChange} className="input-form" type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input onChange={handleChange} className="input-form" type="password" id="password" name="password" />
            </article>
            <article className="w-9/12 py-8 ">
                <Button isLoading={logging ? true : false} onClick={login} className="relative z-10 w-full h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
                    Entrar
                </Button>
            </article>
        </div >
    )
}
