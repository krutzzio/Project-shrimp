import { Button } from "@nextui-org/react"
import "../forms.css"
import { NavLink, redirect } from "react-router-dom"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { RegisterContext, } from "../../../contexts/RegisterContext"

export default function RegisterForm() {

    const { userType } = useContext(ThemeContext)
    const { client, rest, setRegisterClient, setRegisterRest } = useContext(RegisterContext)
    const [infoUser, setInfoUser] = useState(userType ? { ...rest } : { ...client })
    const [password, setPassword] = useState()
    const [passwordConfirmar, setPasswordComfirmar] = useState()
    const [error, setError] = useState()
    const handleChange = (event) => {
        const { name, value } = event.target

        if (name === 'password') {
            setPassword(value);
            console.log(password)
        } else if (name === 'confirmedPassword') {
            setPasswordComfirmar(value);
            console.log(passwordConfirmar)
        } else {
            setInfoUser({ ...infoUser, [name]: value });
        }
    }


    const handleContinue = () => {
        if (password === passwordConfirmar && password !== undefined) {
            if (userType) {
                console.log("hola")
                setRegisterRest(infoUser);
            } else {
                setRegisterClient(infoUser);
            }
            window.location.href = `/create/${userType ? 'restaurant' : 'client'}`// se que es un mierda el windows location mañana lo cambio pero tengo suenño surry :)
        } else {
            setError("Las contraseñas no coinciden");
        }
    };

    return (
        <div className="w-[22rem] flex flex-col items-center m-auto gap-4">
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="nombre">Nombre {userType ? <span>del restaurante</span> : <></>}</label>
                <input className="input-form" type="text" id="name" name="nombre" onChange={handleChange} />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="correo">Correo</label>
                <input className="input-form" type="email" id="correo" name="correo" onChange={handleChange} />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="password">Contraseña</label>
                <input className="input-form" type="password" id="password" name="password" onChange={handleChange} />
                {error && <p className="text-black">{error}</p>}
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-sm font-semibold mb-4" htmlFor="confirmedPassword">Confirma la contraseña</label>
                <input className="input-form" type="password" id="confirmedPassword" name="confirmedPassword" onChange={handleChange} />
            </article>
            <article className="w-10/12 py-8">
                <Button className="relative z-10 w-full h-12 text-lg bg-[#272D2F] text-[#FAFAFA] font-semibold shadow-lg">
                    <NavLink  onClick={handleContinue} 
         className="w-full">Crear Cuenta</NavLink>
                </Button>
            </article>
        </div >

    )
}
