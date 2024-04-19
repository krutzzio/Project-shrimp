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
    client: ""
}


const infoRest = {
    name: "",
    correo: "",
    password: "",
    avatar: "",
    cp: "",
    dieta: "",
    alergias: [],
    tipoCocina: [],
    restaurant: ""
}

export const RegisterContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function RegisterProvider({ children }) {

    const [infoRegisterClient, setInfoRegisterClient] = useState(infoClient)
    const [infoRegisterRest, setInfoRegisterRest] = useState(infoRest)


    return (
        <RegisterContext.Provider value={{ client: infoRegisterClient, rest: infoRegisterRest, setInfoRegisterClient, setInfoRegisterRest }}>
            {children}
        </RegisterContext.Provider>
    )
}