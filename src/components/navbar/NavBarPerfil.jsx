/* eslint-disable react/prop-types */

import logoGambaCliente from "../../assets/logo/logoGamba_logoNaranja.svg";
import logoGambaRest from "../../assets/logo/logoGamba_logoAzul.svg";
import { Link } from "react-router-dom";
import logout from "../../assets/iconos/iconos_Logout.svg";


export default function NavBarPerfil({ userType }) {

  return (
    <header className="p-2">
      <section className="relative z-10 flex items-center justify-between lg:gap-2 max-w-screen-2xl m-auto">
        {/*Logo*/}
        <Link to={"/home"} className="w-36 lg:w-52">
          <img src={userType ? logoGambaRest : logoGambaCliente} alt="Gamba Logo" />
        </Link>
        {/*Log out*/}
        <Link to={"/"}>
          <img src={logout} className="w-8" />
        </Link>
      </section>
    </header>
  );
}
