import { useEffect, useState } from "react";

export function useSteps(user) {
    const [step, setStep] = useState(1)
    const [maxSteps, setMaxSteps] = useState(1)

    useEffect(() => {
        setMaxSteps(user === "client" ? 4 : 3)
        console.log(user)
    }, [user])
    return { step, setStep, maxSteps }

}