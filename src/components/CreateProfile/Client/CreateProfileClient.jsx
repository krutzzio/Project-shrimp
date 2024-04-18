import Step1 from "../Step1";
import Step2Client from "./Step2Client";
import Step3Client from "./Step3Client";
import Step4Client from "./Step4Client";

// eslint-disable-next-line react/prop-types
export default function CreateProfileClient({ step, img, handleImg, profile }) {
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
