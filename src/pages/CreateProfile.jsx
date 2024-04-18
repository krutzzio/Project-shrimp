import { NavLink, useParams } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import Step1 from "../components/CreateProfile/Step1"
import Step2Client from "../components/CreateProfile/Client/Step2Client"
import Step3Client from "../components/CreateProfile/Client/Step3Client"
import Step4Client from "../components/CreateProfile/Client/Step4Client"
import Next from "../assets/next-arrow.svg"
import Prev from "../assets/prev-arrow.svg"



export default function CreateProfile() {

  const { profileType } = useParams()
  const maxSteps = profileType === "client" ? 4 : 3

  const [steps, setSteps] = useState(1)
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
        steps === 1
          ? <Step1 imgProfile={imgProfile} handleChange={handleChange} profileType={profileType} />
          : steps === 2
            ? <Step2Client />
            : steps === 3
              ? <Step3Client />
              : steps === 4
                ? <Step4Client />
                : <></>
      }

      {/* Aqui ponemos los botones para continuar con el formulario de alta. Cuando ya hemos hecho el primer paso se añade otro boton para volver atrás */}
      <footer className="w-8/12 h-[10dvh] flex justify-center ">
        {
          steps === 1
            ? (<Button onClick={() => setSteps(steps + 1)} className="w-full text-xl bg-primary text-white font-semibold">
              Continuar
            </Button>)
            : steps === maxSteps
              ? (<Button className="w-full text-xl bg-primary text-white font-semibold">
                <NavLink className="w-full" to={"/home"}>Completar alta</NavLink>
              </Button>)
              : (<section className="flex justify-between w-full">
                <Button onClick={() => setSteps(steps - 1)} className="w-[20%]  text-xl bg-primary text-white font-semibold">
                  <img src={Prev} alt="" />
                </Button>
                <Button onClick={() => setSteps(steps + 1)} className="w-[60%]  text-xl bg-primary text-white font-semibold">
                  <img className="w-[48px]" src={Next} alt="" />
                </Button>
              </section>)
        }
      </footer>
    </div >
  )
}
