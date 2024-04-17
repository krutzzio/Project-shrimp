import { useParams } from "react-router-dom"
import LogoGamba from "../assets/logo/logoGamba_logoNaranja.svg"

export default function CreateProfile() {

  const { profileType } = useParams()

  return (
    <div className="bg-background h-full flex flex-col items-center justify-between">
      <header className="relative z-10 py-4">
        <img className="w-32 lg:w-44" src={LogoGamba} alt="Logo gamba" />
      </header>

    </div>
  )
}
