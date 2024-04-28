import {
  Avatar,
} from "@nextui-org/react";
import logoGamba from "../../assets/logo/logoGamba_logoNaranja.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export default function NavBar() {
  const { user } = useContext(UserInfoContext)

  return (
    <header className="p-2">
      <section className="relative z-10 flex items-center justify-between lg:gap-2 max-w-screen-2xl m-auto">
        {/*Desktop*/}

        {/*Logo*/}
        <Link to={"/home"} className="w-36 lg:w-52">
          <img src={logoGamba} alt="Gamba Logo" />
        </Link>

        {/*Switch largo
        <section className="hidden lg:block">
          <SwitchHome />
        </section>
        */}

        {/*Codigo Postal
        <section className="hidden lg:block w-24">
          <Input
            variant="faded"
            radius="full"
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
        */}

        {/*Barra Buscador
        <section className="hidden lg:block w-1/2">
          <Input
            variant="faded"
            radius="full"
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
        */}
      
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
