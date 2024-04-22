import { useParams, useNavigate } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Button } from "@nextui-org/react"
import { useContext } from "react"
import { useSteps } from "../hooks/useSteps"
import CreateProfileRest from "../components/CreateProfile/Restaurant/CreateProfileRest"
import CreateProfileClient from "../components/CreateProfile/Client/CreateProfileClient"
import { RegisterContext } from "../contexts/RegisterContext"



export default function CreateProfile() {

  const navigate = useNavigate()
  const { profileType } = useParams()
  const { step, setStep, maxSteps } = useSteps(profileType)
  const { client, rest } = useContext(RegisterContext)


  const register = () => {

    if (step < maxSteps) {
      setStep(step + 1)
      return
    }

    setStep(step + 1)

    const registerData = new FormData()
    for (const prop in client) {
      if (prop === "photo") {
        registerData.append("photo", client.photo)
      } else {
        registerData.append(prop, client[prop])
      }
    }

    const requestOptions = {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: registerData,
    };
    fetch("http://localhost:3000/api/registerUser", requestOptions)
      .then(resp => {
        if (resp.ok) navigate("/login")
      })
  }

  return (
    <div className={`h-full flex flex-col items-center justify-between relative overflow-hidden ${profileType}-theme`}>
      <header className='pt-6 flex justify-center'>
        {
          profileType === "client"
            ? <img
              className="w-44"
              src={LogoGambaCl}
              alt='Gamba Logo' />
            : <img
              className="w-44"
              src={LogoGambaRs}
              alt='Gamba Logo' />
        }
      </header>

      {/* Formularios para cada paso de la alta del perfil */}
      {
        profileType === "client"
          ? <CreateProfileClient step={step} client={client} profile={profileType} />
          : <CreateProfileRest step={step} rest={rest} profile={profileType} />
      }

      {/* Aqui ponemos los botones para continuar con el formulario de alta. Cuando ya hemos hecho el primer paso se añade otro boton para volver atrás */}
      <footer className="w-8/12 h-[10dvh] flex justify-center ">
        {
          /* step === maxSteps
            ? (<Button isLoading={step > maxSteps ? this : false} onClick={register} className="w-full text-base">
              Completar alta
            </Button>
            ) */
          <section className="flex justify-between w-full">
            <Button onClick={() => setStep(step - 1)} className={`${step === 1 && `hidden`} w-[20%] text-base bg-primary text-white font-semibold`}>
              <h1>Volver</h1>
            </Button>
            <Button onClick={register} isLoading={step > maxSteps ? true : false} className={`${step === 1 ? `w-full` : `w-[65%]`}  text-base bg-primary text-white font-semibold`}>
              {
                step >= maxSteps
                  ? <h1>Completar Alta</h1>
                  : <h1>Siguiente</h1>
              }
            </Button>
          </section>
        }
      </footer>
    </div >
  )
}
