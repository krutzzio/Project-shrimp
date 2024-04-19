import StepAvatarUbi from "../StepAvatarUbi";
import StepDiet from "./StepDiet";
import StepAlergens from "./StepAlergens";
import StepCocina from "./StepCocina";

// eslint-disable-next-line react/prop-types
export default function CreateProfileClient({ step, img, handleImg, profile }) {
    return (
        <>
            {
                step === 1
                    ? <StepAvatarUbi imgProfile={img} handleChange={handleImg} profileType={profile} />
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
