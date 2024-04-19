import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import SwitchUser from "../components/SwitchUser";
import { ThemeContext } from "../contexts/ThemeContext";
import LogForm from "../components/forms/LogForm";
import landing2 from "../assets/illustrations/landing2.svg";
import flecha from "../assets/iconos/iconos_FlechaAtras-01.svg";

export default function Login() {
  const { userType } = useContext(ThemeContext);

  return (
    <div
      className={`overflow-hidden relative text-white h-full flex flex-col justify-between items-center ${userType ? `restaurant-theme` : `client-theme`
        } bg-primary transition-colors`}
    >
      <header className="w-full">
        <div className="max-w-screen-2xl mx-auto p-4 relative z-10 flex items-center justify-between lg:px-8">

          {/*Flecha*/}
          <Link to={"/"} className="w-6 flex-1/3">
            <img src={flecha} />
          </Link>

          {/*Logo*/}
          <div className="flex-1/3">
            <img className="w-32 lg:w-44" src={logoGamba} alt="Gamba Logo" />
          </div>

          <div className="flex-1/3"></div>

        </div>
      </header>

      <main className="relative z-10 w-11/12 flex flex-col items-center justify-around md:grid md:grid-cols-2 md:content-between ">

        {/* Formulario Log in */}
        <div className="flex flex-col gap-20">

          {/* Switch */}
          <section className="flex flex-col justify-center items-center">
            <h3 className="text-center mb-1">¿Quién eres?</h3>
            <SwitchUser />
          </section>

          {/* Formulario */}
          <section className="">
            <LogForm userType={userType} />
          </section>


        </div>

        {/* Ilustración */}
        <article className="hidden w-full  justify-center md:flex">
          <img
            src={landing2}
            className="hidden md:block md:h-full md:max-h-[24rem] "
            alt="landing2"
          />
        </article>

      </main>

      <footer className="h-[10dvh] md:w-11/12 md:grid md:grid-cols-2 md:content-between">
        {/* Link registro */}
        <section className="flex items-end justify-center z-10 relative">
          <h1 className="text-black font-medium">
            ¿Nuevo en Gamba?{" "}
            <NavLink
              to={"/register"}
              className="text-primary font-semibold"
            >
              Regístrate
            </NavLink>
          </h1>
        </section>

        {/* Para poder centrar el footer en el form */}
        <aside className="hidden md:max-w-[24rem]">
        </aside>
      </footer>

      {/* Mancha arriba izquierda */}
      <article
        className={`absolute z-0 top-[-17rem] left-[-16rem] rotate-[50deg] md:left-[-10rem] lg:top-[-18rem] lg:left-[-12rem] xl:top-[-14rem]`}
      >
        <img src={shape1} className="max-w-[30rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha arriba derecha */}
      <article
        className={`absolute z-0 rotate-[46deg] bottom-[26rem] left-[12rem] md:bottom-[-16rem] lg:left-[30rem] lg:bottom-[22rem] xl:left-[36rem] xl:bottom-[32rem]`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha abajo izquierda */}
      <article
        className={`absolute z-0  ${userType
          ? `rotate-[46deg] bottom-[-30rem] left-[-12rem] md:bottom-[-16rem] lg:left-[-6rem] lg:bottom-[-26rem] xl:bottom-[-24rem]`
          : `rotate-[-43deg] bottom-[-30rem] left-[-12rem] md:bottom-[-16rem] lg:left-[-6rem] lg:bottom-[-26rem] xl:bottom-[-24rem]`
          } transition-all`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>
    </div>
  );
}
