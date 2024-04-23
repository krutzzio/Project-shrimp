import StepAvatarUbi from "../StepAvatarUbi";
import StepDescRest from "./StepDescRest";
import StepCocina from "../Client/StepCocina";
import { RegisterContext } from "../../../contexts/RegisterContext";
import { useContext, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CreateProfileRest({ step, profile }) {

    const { rest, setRegisterRest } = useContext(RegisterContext)
    const [imgSelected, setImageSelected] = useState("")

    const handleImg = (event) => {
        setImageSelected(URL.createObjectURL(event.target.files[0]))
        setRegisterRest({ ...rest, photo: event.target.files[0] })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setRegisterRest({ ...rest, [name]: value })
    }


    return (
        <>
            {
                step === 1
                    ? <StepAvatarUbi imgProfile={imgSelected} handleImg={handleImg} handleChange={handleChange} rest={rest} profileType={profile} />
                    : step === 2
                        ? <StepDescRest handleChange={handleChange} rest={rest} />
                        : step === 3
                            ? <StepCocina profile={profile} />
                            : <></>
            }
        </>
    )
}
