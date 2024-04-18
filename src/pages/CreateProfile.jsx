import { NavLink, useParams } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import Next from "../assets/next-arrow.svg"
import Prev from "../assets/prev-arrow.svg"
import { useSteps } from "../hooks/useSteps"
import CreateProfileRest from "../components/CreateProfile/Restaurant/CreateProfileRest"
import CreateProfileClient from "../components/CreateProfile/Client/CreateProfileClient"



export default function CreateProfile() {

  const { profileType } = useParams()

  const { step, setStep, maxSteps } = useSteps(profileType)

  const [imgProfile, setImageProfile] = useState()

  const handleChange = (event) => {
    setImageProfile(URL.createObjectURL(event.target.files[0]))
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
          ? <CreateProfileClient step={step} img={imgProfile} handleImg={handleChange} profile={profileType} />
          : <CreateProfileRest step={step} img={imgProfile} handleImg={handleChange} profile={profileType} />
      }

      {/* Aqui ponemos los botones para continuar con el formulario de alta. Cuando ya hemos hecho el primer paso se añade otro boton para volver atrás */}
      <footer className="w-8/12 h-[10dvh] flex justify-center ">
        {
          step === 1
            ? (<Button onClick={() => setStep(step + 1)} className="w-full text-xl bg-primary text-white font-semibold">
              Continuar
            </Button>)
            : step === maxSteps
              ? (<Button className="w-full text-xl bg-primary text-white font-semibold">
                <NavLink className="w-full" to={"/home"}>Completar alta</NavLink>
              </Button>)
              : (<section className="flex justify-between w-full">
                <Button onClick={() => setStep(step - 1)} className="w-[20%]  text-xl bg-primary text-white font-semibold">
                  <img src={Prev} alt="" />
                </Button>
                <Button onClick={() => setStep(step + 1)} className="w-[60%]  text-xl bg-primary text-white font-semibold">
                  <img className="w-[48px]" src={Next} alt="" />
                </Button>
              </section>)
        }
      </footer>
    </div >
  )
}
