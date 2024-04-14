import { Button } from "@nextui-org/react"
import "./forms.css"
import { useState } from "react"

export default function UserLog({ userType }) {
    const [logging, setLogging] = useState(false)
    return (
        <div className="w-full flex flex-col gap-8">
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input type="email" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" />
            </article>
            <article className="py-8">
                {
                    logging
                        ? <Button isLoading className="w-full text-xl bg-black text-white font-semibold">Entrar</Button>
                        : <Button onClick={() => setLogging(true)} className="w-full text-xl bg-black text-white font-semibold">Entrar</Button>
                }
            </article>
        </div>
    )
}
