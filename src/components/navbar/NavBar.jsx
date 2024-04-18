import SwitchHome from "../SwitchHome";
import {
    Avatar,
    Input,
    Switch,
  } from "@nextui-org/react";
import logoGamba from "../../assets/logo/logoGamba_logoNaranja.svg";
import iconoGamba from "../../assets/logo/iconoGamba_iconoNaranja.svg";
import lupa from "../../assets/iconos/iconos_Lupa.svg";
import CP from "../../assets/iconos/iconos_Mapa.svg";
import rest from "../../assets/iconos/iconos_Restaurante.svg";
import receta from "../../assets/iconos/iconos_Recetas.svg";

export default function NavBar() {

    return (
        <header className="relative z-10 flex p-4 items-center justify-between lg:px-8">
        {/*Desktop*/}

        {/*Logo*/}
        <img
          className="hidden w-32 lg:block lg:w-44"
          src={logoGamba}
          alt="Gamba Logo"
        />
        {/*Switch largo*/}
        <section className="hidden mx-2 lg:block">
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
        <section className="hidden mx-2 lg:block w-1/2">
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

        {/*Mobile*/}

        {/*Logo + switch pequeño*/}
        <div className="flex gap-2 items-center">
          <img
            className="hidden w-32 md:block lg:hidden lg:w-44"
            src={logoGamba}
            alt="Gamba Logo"
          />
          <img
            className="w-9 md:hidden lg:w-44"
            src={iconoGamba}
            alt="Gamba Icono"
          />
          <Switch
            className="lg:hidden"
            defaultSelected
            size="lg"
            color="primary"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <img src={rest} className="w-5" />
              ) : (
                <img src={receta} className="w-4" />
              )
            }
          />
        </div>
        {/*iconos + avatar*/}
        <div className="flex gap-2 items-center">
          <button className="lg:hidden w-8">
            <img src={CP} />
          </button>
          <button type="button" className="lg:hidden w-8">
            <img src={lupa} />
          </button>
          <Avatar
            size="sm"
            classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
          />
        </div>
      </header>
    )
}