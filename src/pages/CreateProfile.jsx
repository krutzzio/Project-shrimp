import { useParams, useNavigate } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Button } from "@nextui-org/react"
import { useContext } from "react"
import { useSteps } from "../hooks/useSteps"
import CreateProfileRest from "../components/CreateProfile/Restaurant/CreateProfileRest"
import CreateProfileClient from "../components/CreateProfile/Client/CreateProfileClient"
import { RegisterContext } from "../contexts/RegisterContext"
import { registroCliente, registroRest } from "../utils/fetchs/registros"


export default function CreateProfile() {

  const navigate = useNavigate()
  const { profileType } = useParams()
  const { step, setStep, maxSteps } = useSteps(profileType)
  const { client, rest } = useContext(RegisterContext)

  const register = async () => {

    if (step < maxSteps) {
      setStep(step + 1)
      return
    }
    setStep(step + 1)



    if (profileType === "client") {
      console.log(client)
      const fetchRegistro = await registroCliente({ client })
      fetchRegistro ? navigate("/home") : console.log("ERROR REGISTRO CLIENTE")
    } else {
      const fetchRegistro = await registroRest({ rest })
      fetchRegistro ? navigate("/perfil") : console.log("ERROR REGISTRO REST")
    }

  }

  return (
    <div className={`h-full flex flex-col items-center justify-between relative overflow-hidden ${profileType}-theme`}>
      <header className='py-4 px-2 flex justify-center'>
        {
          profileType === "client"
            ? <img
              className="w-32 md:w-44"
              src={LogoGambaCl}
              alt='Gamba Logo' />
            : <img
              className="w-32 md:w-44"
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
      <footer className="w-8/12 h-[10dvh] flex justify-center">
        {
          /* step === maxSteps
            ? (<Button isLoading={step > maxSteps ? this : false} onClick={register} className="w-full text-base">
              Completar alta
            </Button>
            ) */
          <section className="flex gap-2">
            <Button onClick={() => setStep(step - 1)} className={`${step === 1 && `hidden`} w-40 md:w-44 h-12 text-lg bg-primary text-[#FAFAFA] font-semibold`}>
              <h1>Volver</h1>
            </Button>
            <Button onClick={register} isLoading={step > maxSteps ? true : false} className={`${step === 1 ? `w-72` : `w-40`} md:w-44 h-12 text-lg bg-primary text-[#FAFAFA] font-semibold`}>
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
