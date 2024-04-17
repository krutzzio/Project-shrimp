import { useParams } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Avatar } from "@nextui-org/react"
import { useState } from "react"


export default function CreateProfile() {

  const { profileType } = useParams()

  const [imgProfile, setImageProfile] = useState()

  const handleChange = (event) => {
    setImageProfile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div className={`bg-background h-full flex flex-col items-center justify-between relative overflow-hidden ${profileType}-theme`}>
      <header className='pt-10 flex justify-center'>
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

      <main className="h-[80%] text-center">
        <header>
          <h1 className="text-primary text-3xl font-bold leading-8">¡Bienvenido! Vamos<br /> a crear tu perfil</h1>
          <p className="text-gray-400 text-sm font-medium">¡Deja que te conozcamos mejor!</p>
        </header>
        <main>
          <h1>Añade un avatar</h1>
          <input type="file" onChange={handleChange} />
          <img className="w-16 h-16 border-black" src={imgProfile} alt="" />
        </main>
      </main>

      <footer className="">
        footer elimina esta linia es un test
      </footer>
    </div >
  )
}
