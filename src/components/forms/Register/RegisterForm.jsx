import { Button } from "@nextui-org/react"
import "../forms.css"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export default function RegisterForm() {

    const { userType } = useContext(ThemeContext)

    return (
        <div className="w-full flex flex-col gap-6">
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="name">Nombre del restaurante</label>
                <input type="text" id="name" name="name" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="confirmedPassword">Confirma la contraseña</label>
                <input type="password" id="confirmedPassword" name="confirmedPassword" />
            </article>
            <article className="py-8">
                <Button className="w-full text-xl bg-black text-white font-semibold">
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
