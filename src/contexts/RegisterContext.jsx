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

    const [registerClient, setRegisterClient] = useState(infoClient)
    const [registerRest, setRegisterRest] = useState(infoRest)


    return (
        <RegisterContext.Provider value={{ client: registerClient, rest: registerRest, setRegisterClient, setRegisterRest }}>
            {children}
        </RegisterContext.Provider>
    )
}