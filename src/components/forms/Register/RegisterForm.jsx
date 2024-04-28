import { Button } from "@nextui-org/react"
import "../forms.css"
import { NavLink} from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { RegisterContext, } from "../../../contexts/RegisterContext"



export default function RegisterForm() {

    const { userType } = useContext(ThemeContext)
    const { client, rest, setRegisterClient, setRegisterRest } = useContext(RegisterContext)
    const [infoUser, setInfoUser] = useState(userType ? { ...rest } : { ...client })
    const [password, setPassword] = useState()
    const [passwordConfirmar, setPasswordComfirmar] = useState()
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [redirectTo, setRedirectTo] = useState(null);

   

    useEffect(() => {
        // Si redirectTo es true, activa el NavLink automáticamente
        if (redirectTo) {
          document.getElementById("navLink").click();
        }
      }, [redirectTo]);

    const handleChange = (event) => {
        const { name, value } = event.target

        if (name === 'password') {
            setPassword(value);
            console.log(password)
        } else if (name === 'confirmedPassword') {
            setPasswordComfirmar(value);
            console.log(passwordConfirmar)
        } 
         else {
            setInfoUser({ ...infoUser, [name]: value });
        }
    }


    const handleContinue = () => {
        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(infoUser.correo)) {
            setError("Por favor, introduce un correo electrónico válido.");
            return;
        }
    
        else if (password === passwordConfirmar && password !== undefined) {
          if (userType) {
            setRegisterRest(infoUser);
          } else {
            setRegisterClient(infoUser);
          }
          
          console.log(userType)
          setRedirectTo(true);
        } else {
          setError("Las contraseñas no coinciden");
          return;
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
                    <NavLink id="navLink"  to={redirectTo ? `/create/${userType ? 'restaurant' : 'client'}` : '#'} onClick={handleContinue} 
        className="w-full">Crear Cuenta</NavLink>
                </Button>
            </article>
        </div >

    )
}
