import { Button } from "@nextui-org/react"
import "../forms.css"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export default function RegisterForm() {

    const { userType } = useContext(ThemeContext)

    return (
        <div className="w-[20rem] flex flex-col items-center m-auto gap-6">
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="name">Nombre {userType ? <span>del restaurante</span> : <></>}</label>
                <input className="input-form" type="text" id="name" name="name" />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input className="input-form" type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input className="input-form" type="password" id="password" name="password" />
            </article>
            <article className="flex flex-col justify-start w-11/12">
                <label className="w-fit text-xs font-semibold" htmlFor="confirmedPassword">Confirma la contraseña</label>
                <input className="input-form" type="password" id="confirmedPassword" name="confirmedPassword" />
            </article>
            <article className="w-9/12 py-8">
                <Button className="z-10 w-full h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
                    {
                        userType
                            ? < NavLink to={"/create/restaurant"} className="w-full" >Crear cuenta</NavLink>
                            : <NavLink to={"/create/client"} className="w-full" >Crear cuenta</NavLink>
                    }
                </Button>
            </article>
        </div >
    )
}
