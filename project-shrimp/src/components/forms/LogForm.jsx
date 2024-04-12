import { Button } from "@nextui-org/react"
import "./forms.css"
import { useState } from "react"

export default function UserLog({ userType }) {
    const [logging, setLogging] = useState(false)
    return (
        <div className="w-full flex flex-col gap-4">
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="correo">Correo</label>
                <input type="text" id="correo" name="correo" />
            </article>
            <article className="flex flex-col justify-start">
                <label className="w-fit text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input type="text" id="password" name="password" />
            </article>
            {
                logging
                    ? <Button isLoading className="bg-white text-primary font-semibold">Entrar</Button>
                    : <Button onClick={() => setLogging(true)} className="bg-white text-primary font-semibold">Entrar</Button>
            }

        </div>
    )
}
