import { Button } from "@nextui-org/react"
import "../forms.css"
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { RegisterContext, } from "../../../contexts/RegisterContext"

export default function RegisterForm() {

    const { userType } = useContext(ThemeContext)
    const { client, rest, setRegisterClient, setRegisterRest } = useContext(RegisterContext)
    const [infoUser, setInfoUser] = useState(userType ? { ...rest } : { ...client })

    const handleChange = (event) => {
        const { name, value } = event.target
        setInfoUser({ ...infoUser, [name]: value })
    }

    const handleContinue = () => {
        if (userType) {
            setRegisterRest(infoUser)
        } else {
            setRegisterClient(infoUser)
        }
        console.log("SETTED INFO")
    }


    return (
        <div className="w-[20rem] flex flex-col items-center m-auto gap-6">
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="name">Nombre {userType ? <span>del restaurante</span> : <></>}</label>
                <input className="input-form" type="text" id="name" name="name" onChange={handleChange} />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input className="input-form" type="email" id="correo" name="correo" onChange={handleChange} />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input className="input-form" type="password" id="password" name="password" onChange={handleChange} />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="confirmedPassword">Confirma la contraseña</label>
                <input className="input-form" type="password" id="confirmedPassword" name="confirmedPassword" />
            </article>
            <article className="w-9/12 py-8">
                <Button className="z-10 w-full h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
                    <NavLink to={`/create/${userType ? `restaurant` : `client`}`} onClick={handleContinue} className="w-full">Crear Cuenta</NavLink>
                </Button>
            </article>
        </div >

    )
}