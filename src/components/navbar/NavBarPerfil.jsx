/* eslint-disable react/prop-types */

import logoGambaCliente from "../../assets/logo/logoGamba_logoNaranja.svg";
import logoGambaRest from "../../assets/logo/logoGamba_logoAzul.svg";
import { Link } from "react-router-dom";
import logoutClient from "../../assets/iconos/iconos_LogoutClient.svg";
import logoutRest from "../../assets/iconos/iconos_LogoutRest.svg";
import { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

export default function NavBarPerfil({ userType }) {
  const navigate = useNavigate()
  const { logout } = useContext(UserInfoContext)

  const handleLogout = () => {
    navigate("/")
    logout()
  }

  return (
    <header className="p-2">
      <section className="relative z-10 flex items-center justify-between lg:gap-2 max-w-screen-2xl m-auto">
        {/*Logo*/}
        <Link to={userType ? "" : "/home"} className="w-36 lg:w-52">
          <img src={userType ? logoGambaRest : logoGambaCliente} alt="Gamba Logo" />
        </Link>
        {/*Log out*/}
        <img onClick={handleLogout} src={userType ? logoutRest : logoutClient} className="w-8" />
      </section>
    </header>
  );
}
