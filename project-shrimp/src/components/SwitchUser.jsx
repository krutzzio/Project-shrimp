import { useContext } from "react"
import "./switch.css"
import { ThemeContext } from "../contexts/ThemeContext"

export default function SwitchUser() {

    const { userType, handleTheme } = useContext(ThemeContext)

    return (
        <div className="toggle">
            <input onClick={handleTheme} type="radio" name="toggle" value="Client" className="client" id="client" />
            <label className={` ${userType ? `text-primary` : `text-white`}`} htmlFor="client">Cliente</label>

            <input onClick={handleTheme} type="radio" name="toggle" value="Restaurant" className="restaurant" id="restaurant" />
            <label className={`${userType ? `text-white` : `text-primary`}`} htmlFor="restaurant">Restaurante</label>
            <div className="selector bg-primary">&nbsp;</div>
        </div>
    )
}
