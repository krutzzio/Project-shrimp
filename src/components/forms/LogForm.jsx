import { Button } from "@nextui-org/react"
import "./forms.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function LogForm() {

    const [logging, setLogging] = useState(false)

    return (
        <div className="w-[20rem] flex flex-col items-center m-auto gap-6">
            <article className="flex flex-col justify-start w-9/12">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input className="input-form" type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start w-9/12">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input className="input-form" type="password" id="password" name="password" />
            </article>
            <article className="w-9/12 py-8 ">
                {
                    !logging
                        ? < Button onClick={() => setLogging(true)} className="relative z-10 w-full h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
                            <Link className="w-full" to={"/home"}>Entrar</Link>
                        </Button>
                        : <Button isLoading className="relative z-10 w-full h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
                            <Link className="w-full" to={"/home"}>Entrar</Link>
                        </Button>
                }
            </article>
        </div >
    )
}
