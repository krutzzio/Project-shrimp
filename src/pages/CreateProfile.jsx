import { useParams } from "react-router-dom"
import LogoGambaCl from "../assets/logo/logoGamba_logoNaranja.svg"
import LogoGambaRs from "../assets/logo/logoGamba_logoAzul.svg"
import { Avatar, Button } from "@nextui-org/react"
import { useState } from "react"
import AddIcon from "../assets/add.svg"
import { UbicationClientForm, UbicationRestaurantForm } from "../components/forms/Ubication/UbicationForm"


export default function CreateProfile() {

  const { profileType } = useParams()

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

      <main className="h-[75%] w-full text-center flex flex-col gap-8">
        <header>
          <h1 className="text-primary text-3xl font-bold leading-8">¡Bienvenido! Vamos<br /> a crear tu perfil</h1>
          <p className="text-gray-400 text-sm font-medium">¡Deja que te conozcamos mejor!</p>
        </header>

        <main className="flex flex-col items-center ">
          <h1 className="text-gray-400 font-medium">Añade un avatar</h1>
          <article className="w-44 h-44 rounded-full relative flex justify-center items-center">
            <label htmlFor="img" className="absolute bg-success bottom-0 left-[4.8rem] flex justify-center items-center rounded-full text-3xl h-6 w-6">
              <img src={AddIcon} alt="" />
              <span className="absolute  h-7 w-7 rounded-full border-3 border-white"></span>
            </label>
            <input type="file" className="hidden" id="img" name="img" onChange={handleChange} />
            <Avatar classNames={{ icon: "text-white" }} className="w-40 h-40 bg-primary fill-primary" src={imgProfile} />
          </article>
        </main>
        {
          profileType === "client"
            ? <UbicationClientForm />
            : <UbicationRestaurantForm />
        }

        <Button className="w-8/12 m-auto text-xl bg-primary text-white font-semibold">
          Continuar
        </Button>
      </main>
      <footer className="">
      </footer>
    </div >
  )
}
