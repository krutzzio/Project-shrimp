import { createContext, useState } from "react";

const infoClient = {
    nombre: "",
    correo: "",
    password: "",
    photo: null,
    cp: "",
    dieta: "",
    alergias: [],
    tipos_cocina: [],
}

const infoRest = {
    nombre: "",
    correo: "",
    password: "",
    photo: "",
    numero: "",
    direccion: "",
    cp: "",
    telefono: "",
    descripcio: "",
    tipos_cocina: [],
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