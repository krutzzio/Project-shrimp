import { NavLink, useParams } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Button } from "@nextui-org/react"
import { useContext } from "react"
import { useSteps } from "../hooks/useSteps"
import CreateProfileRest from "../components/CreateProfile/Restaurant/CreateProfileRest"
import CreateProfileClient from "../components/CreateProfile/Client/CreateProfileClient"
import { RegisterContext } from "../contexts/RegisterContext"



export default function CreateProfile() {

  const { profileType } = useParams()
  const { step, setStep, maxSteps } = useSteps(profileType)
  const { client, rest } = useContext(RegisterContext)


  const register = () => {
    const registerData = new FormData()
    for (const prop in client) {
      registerData.append(prop, client[prop])
      if (prop === "photo") {
        registerData.append("photo", client.photo)
        console.log(client)
      }
    }

    const requestOptions = {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: registerData,
    };
    fetch("http://localhost:3000/api/registerUser", requestOptions)
      .then(resp => console.log(resp))
      .then(data => console.log(data))
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
          step === 1
            ? (
              <Button onClick={() => setStep(step + 1)} className="w-full text-xl bg-primary text-white font-semibold">
                Continuar
              </Button>
            )
            : (
              <section className="flex justify-between w-full">
                <Button onClick={() => setStep(step - 1)} className="w-[20%]  text-xl bg-primary text-white font-semibold">
                  <h1 className="text-base">Volver</h1>
                </Button>
                <Button onClick={() => setStep(step + 1)} className="w-[60%]  text-xl bg-primary text-white font-semibold">
                  {
                    step !== maxSteps
                      ? <h1 className="text-base">Siguiente</h1>
                      : <NavLink onClick={register} className="w-full text-base" to={"/home"}>Completar alta</NavLink>
                  }
                </Button>
              </section>
            )
        }
      </footer>
    </div >
  )
}
