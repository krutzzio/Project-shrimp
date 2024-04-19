import StepAvatarUbi from "../StepAvatarUbi";
import StepDescRest from "./StepDescRest";
import StepCocina from "../Client/StepCocina";

// eslint-disable-next-line react/prop-types
export default function CreateProfileRest({ step, img, handleImg, profile }) {

    return (
        <>
            {
                step === 1
                    ? <StepAvatarUbi imgProfile={img} handleChange={handleImg} profileType={profile} />
                    : step === 2
                        ? <StepDescRest />
                        : step === 3
                            ? <StepCocina />
                            : <></>
            }
        </>
    )
}
