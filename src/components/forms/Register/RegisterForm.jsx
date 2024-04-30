import { Button } from "@nextui-org/react"
import "../forms.css"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { RegisterContext, } from "../../../contexts/RegisterContext"



export default function RegisterForm() {
  const navigate = useNavigate();
  const { userType } = useContext(ThemeContext)
  const { client, rest, setRegisterClient, setRegisterRest } = useContext(RegisterContext)
  const [infoUser, setInfoUser] = useState(userType ? { ...rest } : { ...client })
  const [passwordConfirmar, setPasswordComfirmar] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setInfoUser(userType
      ? { ...rest }
      : { ...client })
    console.log(infoUser)
  }, [userType])

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'confirmedPassword') {
      setPasswordComfirmar(value);
    }
    else {
      setInfoUser({ ...infoUser, [name]: value });
    }
  }

  const handleContinue = () => {
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(infoUser.correo)) {
      setError("Por favor, introduce un correo válido.");
      return;
    } else if (infoUser.password === passwordConfirmar && infoUser.password !== undefined) {
      if (userType) {
        setRegisterRest(infoUser)
        navigate(`/create/restaurant`)
      } else {
        setRegisterClient(infoUser)
        navigate(`/create/client`)
      }
      navigate()
    } else {
      setError("Las contraseñas no coinciden")
      return
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

      </article>
      <article className="flex flex-col justify-start w-11/12">
        <label className="w-fit text-sm font-semibold mb-4" htmlFor="confirmedPassword">Confirma la contraseña</label>
        <input className="input-form" type="password" id="confirmedPassword" name="confirmedPassword" onChange={handleChange} />
      </article>
      <article className="w-10/12 pt-4 pb-2">
        <div className="text-center mb-2">
          {error && <p className="text-black font-bold">{error}</p>}
        </div>
        <Button onClick={handleContinue} className="relative z-10 w-full h-12 text-lg bg-[#272D2F] text-[#FAFAFA] font-semibold shadow-lg">
          Crear Cuenta
        </Button>
      </article>
    </div >

  )
}
