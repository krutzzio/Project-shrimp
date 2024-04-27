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
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import shape3 from "../assets/shapes/shape3.svg";


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
            <Button onClick={() => setStep(step - 1)} className={`${step === 1 && `hidden`} relative z-10 w-40 md:w-44 h-12 text-lg bg-primary text-[#FAFAFA] font-semibold`}>
              <h1>Volver</h1>
            </Button>
            <Button onClick={register} isLoading={step > maxSteps ? true : false} className={`${step === 1 ? `w-72` : `w-40`} relative z-10 md:w-44 h-12 text-lg bg-primary text-[#FAFAFA] font-semibold`}>
              {
                step >= maxSteps
                  ? <h1>Completar Alta</h1>
                  : <h1>Siguiente</h1>
              }
            </Button>
          </section>
        }
      </footer>
      
      {/* Mancha amarilla izquierda */}
      <article
        className={`absolute z-0 bottom-[-46rem] left-[-20rem] rotate-[200deg] md:left-[-30rem] md:bottom-[0rem]`
          }
      >
        <img src={shape2} className="max-w-[60rem] w-[60rem]" alt="" />
      </article>

      {/* Mancha amarilla derecha */}
      <article
        className={`absolute z-0 top-[-35rem] right-[-45rem] rotate-[300deg] md:right-[-30rem] md:top-[-10rem]`
        }
      >
        <img src={shape1} className="max-w-[60rem] w-[60rem]" alt="" />
      </article>

      {/* Mancha naranja derecha */}
      <article
        className={`absolute z-0 bottom-[-8rem] right-[-30rem] rotate-[300deg] md:right-[0rem] md:bottom-[8rem]`
        }
      >
        <img src={shape3} className="max-w-[30rem] w-[30rem]" alt="" />
      </article>

      {/* Mancha naranja abajo */}
      <article
        className={`absolute z-0 bottom-[-2rem] left-[-38rem] rotate-[100deg] md:left-[-5rem] md:bottom-[-25rem]`
        }
      >
        <img src={shape3} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>
    </div >
  )
}
