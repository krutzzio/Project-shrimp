import {
  Avatar,
} from "@nextui-org/react";
import logoGamba from "../../assets/logo/logoGamba_logoNaranja.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export default function NavBarSinBusqueda() {
  const { user } = useContext(UserInfoContext)

  return (
    <header className="p-2">
      <section className="relative z-10 flex items-center justify-between lg:gap-2 max-w-screen-2xl m-auto">
        {/*Desktop*/}

        {/*Logo*/}
        <Link to={"/home"} className="w-36 lg:w-52">
          <img src={logoGamba} alt="Gamba Logo" />
        </Link>
        {/*Avatar*/}
        <Link to={"/perfil"}>
          <Avatar
            size="md"
            classNames={{ base: "bg-primary", icon: "text-[#F2F2F2]" }}
            src={user.foto_perfil}
          />
        </Link>
      </section>
    </header>
  );
}
