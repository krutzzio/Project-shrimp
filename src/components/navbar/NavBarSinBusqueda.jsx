import SwitchHome from "../SwitchHome";
import {
  Avatar,
  Input,
} from "@nextui-org/react";
import logoGamba from "../../assets/logo/logoGamba_logoNaranja.svg";
import lupa from "../../assets/iconos/iconos_Lupa.svg";
import CP from "../../assets/iconos/iconos_Mapa.svg";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <header className="p-2">
      <section className="relative z-10 flex items-center justify-between lg:gap-4">
        {/*Desktop*/}

        {/*Logo*/}
        <Link to={"/home"} className="w-36 lg:w-52">
          <img src={logoGamba} alt="Gamba Logo" />
        </Link>

        {/*Switch largo*/}
        <section className="hidden lg:block">
          <SwitchHome />
        </section>
        {/*Codigo Postal*/}
        <section className="hidden lg:block w-24">
          <Input
            variant="underlined"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="CP..."
            startContent={<img src={CP} className="w-5" />}
          />
        </section>
        {/*Barra Buscador*/}
        <section className="hidden lg:block w-1/2">
          <Input
            variant="underlined"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="Buscar..."
            startContent={<img src={lupa} className="w-5" />}
          />
        </section>

        {/*Avatar*/}
          <Link to={"/perfil"}>
            <Avatar
              size="md"
              classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
            />
          </Link>
      </section>
    </header>
  );
}
