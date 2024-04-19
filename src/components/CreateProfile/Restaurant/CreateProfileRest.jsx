import Step3Client from "../Client/Step3Client";
import Step4Client from "../Client/Step4Client";
import Step1 from "../Step1";
import Step2Rest from "./Step2Rest";

// eslint-disable-next-line react/prop-types
export default function CreateProfileRest({ step, img, handleImg, profile }) {

    return (
        <>
            {
                step === 1
                    ? <Step1 imgProfile={img} handleChange={handleImg} profileType={profile} />
                    : step === 2
                        ? <Step2Rest />
                        : step === 3
                            ? <Step3Client />
                            : step === 4
                                ? <Step4Client />
                                : <></>
            }
        </>
    )
}
