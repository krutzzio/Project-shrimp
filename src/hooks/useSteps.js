import { useState } from "react";

export function useSteps({ user }) {
    const [step, setStep] = useState(1)
    const maxSteps = user === "client" ? 4 : 3

    return { step, setStep, maxSteps }
}