import { Avatar } from "@nextui-org/react"
import AddIcon from "../../assets/add.svg"
import { UbicationClientForm, UbicationRestaurantForm } from "../forms/Ubication/UbicationForm"


// eslint-disable-next-line react/prop-types
export default function StepAvatarUbi({ handleChange, imgProfile, profileType }) {
    return (
        <main className="h-[70%] w-full text-center flex flex-col gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¡Bienvenido! Vamos<br /> a crear tu perfil</h1>
                <p className="text-gray-400 text-sm font-medium">¡Deja que te conozcamos mejor!</p>
            </header>

            <main className="flex flex-col items-center ">
                <h1 className="text-gray-400 font-medium">Añade un avatar</h1>
                <article className="w-44 h-44 rounded-full relative flex justify-center items-center">
                    <label htmlFor="img" className="absolute bg-success bottom-0 left-[4.8rem] flex justify-center items-center rounded-full text-3xl h-6 w-6">
                        <img src={AddIcon} alt="" />
                        <span className="absolute h-7 w-7 rounded-full border-3 border-bgcolor"></span>
                    </label>
                    <input type="file"  className="hidden" id="img" name="img" onChange={handleChange} />
                    <Avatar classNames={{ icon: "text-white" }} className="w-40 h-40 bg-primary-50" src={imgProfile} />
                </article>
            </main>
            {
                profileType === "client"
                    ? <UbicationClientForm />
                    : <UbicationRestaurantForm />
            }
        </main>
    )
}
