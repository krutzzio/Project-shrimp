import { Button } from "@nextui-org/react"
import "./forms.css"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginProfile } from "../../utils/fetchs/login"
import { UserInfoContext } from "../../contexts/UserInfoContext"

// eslint-disable-next-line react/prop-types
export default function LogForm({ userType }) {

    const [logging, setLogging] = useState(false)
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState({})
    const { setUser } = useContext(UserInfoContext)
    const handleChange = (event) => {
        const { name, value } = event.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const login = async () => {
        setLogging(true)
        const fetchStatus = await loginProfile({ loginInfo, userType })
        setUser(fetchStatus)
        localStorage.setItem('userInfo', JSON.stringify(fetchStatus));
        fetchStatus.id ? navigate(userType ? `/restaurante-perfil` : `/home`) : console.log("ERROR LOGIN")
    }

    return (
        <div className="w-[22rem] flex flex-col items-center m-auto gap-6">
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="correo">Correo</label>
                <input onChange={handleChange} className="input-form" type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="password">Contraseña</label>
                <input onChange={handleChange} className="input-form" type="password" id="password" name="password" />
            </article>
            <article className="w-10/12 py-8">
                <Button isLoading={logging ? true : false} onClick={login} className="relative z-10 w-full h-12 text-lg bg-[#272D2F] text-[#FAFAFA] font-semibold shadow-lg">
                    Entrar
                </Button>
            </article>
        </div >
    )
}
