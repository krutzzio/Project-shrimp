import "./switch.css"

export default function SwitchUser({ userType, setUserType }) {
    return (
        <div className="toggle">
            <input onClick={() => setUserType(false)} type="radio" name="toggle" value="Client" className="client" id="client" />
            <label className={` ${userType ? `text-[#a7c674]` : `text-white`}`} htmlFor="client">Cliente</label>

            <input onClick={() => setUserType(true)} type="radio" name="toggle" value="Restaurant" className="restaurant" id="restaurant" />
            <label className={`${userType ? `text-white` : `text-[#a7c674]`}`} htmlFor="restaurant">Restaurante</label>
            <div className="selector">&nbsp;</div>
        </div>
    )
}
