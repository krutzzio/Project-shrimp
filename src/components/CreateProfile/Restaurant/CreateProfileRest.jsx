import Step2Client from "../Client/Step2Client";
import Step3Client from "../Client/Step3Client";
import Step4Client from "../Client/Step4Client";
import Step1 from "../Step1";

// eslint-disable-next-line react/prop-types
export default function CreateProfileRest({ step, img, handleImg, profile }) {

    return (
        <>
            {
                step === 1
                    ? <Step1 imgProfile={img} handleChange={handleImg} profileType={profile} />
                    : step === 2
                        ? <Step2Client />
                        : step === 3
                            ? <Step3Client />
                            : step === 4
                                ? <Step4Client />
                                : <></>
            }
        </>
    )
}
