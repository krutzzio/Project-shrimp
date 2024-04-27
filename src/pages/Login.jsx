import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import SwitchUser from "../components/SwitchUser";
import { ThemeContext } from "../contexts/ThemeContext";
import LogForm from "../components/forms/LogForm";
import landing2 from "../assets/illustrations/landing2.svg";
import landing4 from "../assets/illustrations/landing4.svg"
import flecha from "../assets/iconos/iconos_FlechaAtras-01.svg";

export default function Login() {

  const { userType } = useContext(ThemeContext)

  return (
    <div
      className={`overflow-hidden relative text-white h-full flex flex-col justify-between items-center ${userType ? `restaurant-theme` : `client-theme`
        } bg-primary transition-colors`}
    >
      <header className="relative z-10 max-w-screen-2xl w-full mx-auto flex py-4 px-2 items-center justify-between">
        {/*Flecha*/}
        <Link to={"/"} className="w-6">
          <img src={flecha} />
        </Link>
        {/*Logo*/}
        <img className="w-32 md:w-44" src={logoGamba} alt="Gamba Logo" />
        <div className="w-6"></div>
      </header>

      <main className="relative z-10 flex flex-col w-11/12 items-center justify-around md:grid md:grid-cols-2 md:content-between max-w-screen-2xl">
        {/* Formulario Log in */}
        <div className="flex flex-col gap-20">
          {/* Switch */}
          <section className="flex flex-col justify-center items-center">
            <h3 className="text-center mb-1">¿Quién eres?</h3>
            <SwitchUser />
          </section>
          {/* Formulario */}
          <LogForm userType={userType} />
        </div>

        {/* Ilustración */}
        
        <article className="hidden w-full justify-center md:flex">
        {
          userType
        ? <img
            src={landing4}
            className="hidden md:block md:h-full md:max-h-[35rem]"
            alt="landing4"/>
        : <img
            src={landing2}
            className="hidden md:block md:h-full md:max-h-[35rem]"
            alt="landing2"/>
        }
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
        className={`absolute z-0 ${userType
        ? `top-[-20rem] left-[-20rem] rotate-[50deg] md:left-[-10rem] md:top-[-14rem]`
        : `top-[-20rem] left-[-20rem] rotate-[-50deg] md:left-[-10rem] md:top-[-14rem]`
        } transition-all`}
      >
        <img src={shape1} className="max-w-[35rem] w-[35rem]" alt="" />
      </article>

      {/* Mancha arriba derecha */}
      <article
        className={`absolute z-0 ${userType
        ? `rotate-[46deg] top-[-30rem] right-[-35rem] md:right-[-25rem] md:top-[-20rem] `
        : `rotate-[-46deg] top-[-30rem] right-[-35rem] md:right-[-25rem] md:top-[-20rem]`
        } transition-all`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha abajo izquierda */}
      <article
        className={`absolute z-0  ${userType
          ? `rotate-[46deg] bottom-[-30rem] left-[-12rem] md:bottom-[-16rem] md:left-[5rem]`
          : `rotate-[-43deg] bottom-[-30rem] left-[-12rem] md:bottom-[-16rem]  md:left-[5rem]`
          } transition-all`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>
    </div>
  );
}
