import { createContext, useState } from "react";

export const ThemeContext = createContext({ userType: false })

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {

    const [userType, setUserType] = useState(false)

    const handleTheme = () => {
        setUserType(!userType)
    }

    return (
        <ThemeContext.Provider value={{ userType, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}