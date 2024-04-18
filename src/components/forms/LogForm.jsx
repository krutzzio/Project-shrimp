import { Button } from "@nextui-org/react"
import "./forms.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function LogForm() {

    const [logging, setLogging] = useState(false)
    return (
        <div className="w-full flex flex-col gap-8">
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input className="input-form" type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input className="input-form" type="password" id="password" name="password" />
            </article>
            <article className="py-8">
                {
                    logging
                        ? <Button isLoading className="relative z-10 w-full text-xl bg-black text-white font-semibold">
                        <Link className="w-full" to={"/home"}>Entrar</Link>
                        </Button>
                        : <Button onClick={() => setLogging(true)} className="relative z-10 w-full text-xl bg-black text-white font-semibold">
                        <Link className="w-full" to={"/home"}>Entrar</Link>
                        </Button>
                }
            </article>
        </div>
    )
}
