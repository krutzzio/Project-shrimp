import StepAvatarUbi from "../StepAvatarUbi";
import StepDiet from "./StepDiet";
import StepAlergens from "./StepAlergens";
import StepCocina from "./StepCocina";
import { RegisterContext } from "../../../contexts/RegisterContext";
import { useContext, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CreateProfileClient({ step, profile }) {

    const { client, setRegisterClient } = useContext(RegisterContext)
    const [imgSelected, setImageSelected] = useState("")

    const handleImg = (event) => {
        setImageSelected(URL.createObjectURL(event.target.files[0]))
        setRegisterClient({ ...client, photo: event.target.files[0] })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setRegisterClient({ ...client, [name]: value })
    }
    return (
        <>
            {
                step === 1
                    ? <StepAvatarUbi imgProfile={imgSelected} handleImg={handleImg} handleChange={handleChange} client={client} profileType={profile} />
                    : step === 2
                        ? <StepDiet />
                        : step === 3
                            ? <StepAlergens />
                            : step === 4
                                ? <StepCocina />
                                : <></>
            }
        </>
    )
}
