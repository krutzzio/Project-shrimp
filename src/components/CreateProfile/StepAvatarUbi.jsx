import { Avatar } from "@nextui-org/react"
import AddIcon from "../../assets/add.svg"
import { UbicationClientForm, UbicationRestaurantForm } from "../forms/Ubication/UbicationForm"


// eslint-disable-next-line react/prop-types
export default function StepAvatarUbi({ imgProfile, handleImg, handleChange, client, rest, profileType }) {

    return (
        <main className="h-[70%] w-full text-center flex flex-col gap-8">
            <header className="flex flex-col gap-2">
                <h1 className="text-primary text-3xl font-bold leading-7">¡Bienvenido! Vamos<br /> a crear tu perfil</h1>
                <p className="text-gray-400 text-lg font-medium">¡Deja que te conozcamos mejor!</p>
            </header>

            <main className="flex flex-col items-center ">
                <h1 className="text-gray-400 font-medium text-lg">Añade un avatar</h1>
                <article className="w-44 h-44 rounded-full relative flex justify-center items-center">
                    <label htmlFor="photo" className="absolute bg-success bottom-0 left-[4.3rem] flex justify-center items-center rounded-full text-3xl h-10 w-10">
                        <img src={AddIcon} alt="" />
                        <span className="absolute h-10 w-10 rounded-full border-3 border-bgcolor"></span>
                    </label>
                    <input type="file" accept="image/*" className="hidden" id="photo" name="photo" onChange={handleImg} />
                    <Avatar classNames={{ icon: "text-white" }} className="w-40 h-40 bg-primary" src={imgProfile} />
                </article>
            </main>
            {
                profileType === "client"
                    ? <UbicationClientForm handleChange={handleChange} client={client} />
                    : <UbicationRestaurantForm handleChange={handleChange} rest={rest} />
            }
        </main>
    )
}
