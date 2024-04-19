import { createContext, useState } from "react";

const infoClient = {
    name: "",
    correo: "",
    password: "",
    avatar: "",
    cp: "",
    dieta: "",
    alergias: [],
    tipoCocina: [],
}


const infoRest = {

}

export const RegisterContext = createContext(infoClient, infoRest)

// eslint-disable-next-line react/prop-types
export function RegisterProvider({ children }) {

    const [infoRegisterClient, setInfoRegisterClient] = useState(infoClient)
    const [infoRegisterRest, setInfoRegisterRest] = useState(infoRest)

    return (
        <RegisterContext.Provider value={{ infoRegisterClient, setInfoRegisterClient, infoRegisterRest, setInfoRegisterRest }}>
            {children}
        </RegisterContext.Provider>
    )
}