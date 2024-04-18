import logoGamba from "../assets/logo/logoGamba_logoNaranja.svg";
import { Avatar, Button, Input, Switch } from "@nextui-org/react";
import SwitchHome from "../components/SwitchHome";
import lupa from "../assets/iconos/iconos_Lupa.svg";
import CP from "../assets/iconos/iconos_Mapa.svg";
import receta from "../assets/iconos/iconos_Recetas.svg";
import rest from "../assets/iconos/iconos_Restaurante.svg";
import mex from "../assets/iconosComida/Taco.svg";
import chino from "../assets/iconosComida/Chino.svg";
import burguer from "../assets/iconosComida/Hamburguesa.svg";
import indio from "../assets/iconosComida/Indio.svg";
import japo from "../assets/iconosComida/Japonesa.svg";
import marroc from "../assets/iconosComida/Marroquí.svg";
import pincho from "../assets/iconosComida/Pincho.svg";
import italia from "../assets/iconosComida/Pizza.svg";
import poke from "../assets/iconosComida/Poke.svg";


export default function HomeRecetas() {
  return (
    <div>
      <header className="relative z-10 flex p-4 items-center justify-between lg:px-8">
        <img className="w-32 lg:w-44" src={logoGamba} alt="Gamba Logo" />
        <section className="hidden lg:block">
          <SwitchHome />
        </section>
        <section className="lg:hidden">
          <Switch
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
        </section>
        <section className="hidden lg:block w-1/6">
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
            placeholder="Código Postal..."
            startContent={<img src={CP} className="w-6" />}
          />
        </section>
        <section className="lg:hidden">
            <Button isIconOnly variant="faded" aria-label="Like">
            <img src={CP} className="w-6" />
            </Button>
        </section>
        <section className="hidden lg:block w-1/3">
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
            startContent={<img src={lupa} className="w-6" />}
          />
        </section>
        <section className="lg:hidden">
            <Button isIconOnly variant="faded" aria-label="Like">
            <img src={lupa} className="w-6" />
            </Button>
        </section>

        <Avatar classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }} />
      </header>
      <section className="items-center justify-evenly">
      <article className="flex flex-col items-center">
                <img src={mex} className="w-20"/>
                <p>Mexicano</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={chino} className="w-20"/>
                <p>Chino</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={burguer} className="w-20"/>
                <p>Americano</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={indio} className="w-20"/>
                <p>Indio</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={japo} className="w-20"/>
                <p>Japo</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={marroc} className="w-20"/>
                <p>Marroquí</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={pincho} className="w-20"/>
                <p>Española</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={italia} className="w-20"/>
                <p>Italiana</p>
            </article>
            <article className="flex flex-col items-center">
                <img src={poke} className="w-20"/>
                <p>Hawaiana</p>
            </article>
      </section>
            
      <main className="relative z-10 flex justify-around"></main>
      {/*
      <article
        className={`absolute z-0 top-[-17rem] rotate-[100deg] right-[-14rem] md:top-[-14rem] md:right-[-12rem]`}
      >
        <img 
        src={shape1} 
        className="max-w-[30rem] w-[50rem]" 
        alt="" />
      </article>

      
      <article className={`absolute z-0 rotate-[-20deg] bottom-[-36rem] right-[-26rem] md:right-[-22rem] md:bottom-[-26rem] lg:bottom-[-32rem] xl:bottom-[-26rem]`}>
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
      
      <article className={`absolute hidden z-0 rotate-[200deg] bottom-[-30rem] left-[-18rem] md:block xl:bottom-[-26rem]`}>
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
        */}
    </div>
  );
}
