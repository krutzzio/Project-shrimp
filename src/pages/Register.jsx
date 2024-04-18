import { useContext } from "react";
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import RegisterForm from "../components/forms/Register/RegisterForm";
import { Link, NavLink } from "react-router-dom";
import landing3 from "../assets/illustrations/landing3.svg";
import flecha from "../assets/iconos/iconos_FlechaAtras-01.svg";

export default function Register() {
  const { userType } = useContext(ThemeContext);

  return (
    <div
      className={`overflow-hidden relative text-white h-full flex flex-col justify-between items-center ${
        userType ? `restaurant-theme` : `client-theme`
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

      <main className="relative z-10 flex">
        <section className="flex flex-col items-center justify-center md:flex-row md:gap-8 md:max-w-lg lg:max-w-xl xl:max-w-4xl">

          {/* Formulario Registro */}
          <div className="flex flex-col gap-10 mx-6 md:mx-0">

            {/* Título */}
            <section className="text-center">
              <h3 className=" text-primary-foreground font-bold text-4xl mb-1">
                Únete a Gamba
              </h3>
              {userType ? (
                <p className="leading-5">
                  Comparte tus recetas con tus <br />
                  actuales y futuros clientes.
                </p>
              ) : (
                <p className="leading-5">
                  Cocina las recetas de tus restaurantes favoritos en un mismo
                  lugar. Comparte tus recetas y consigue descuentos.
                </p>
              )}
            </section>

            {/* Formulario */}
            <section className="">
              <RegisterForm />
            </section>

            {/* Link Login */}
            <section className="flex items-end justify-center z-10 relative">
              <h1 className="text-black font-medium">
                ¿Ya estas registrado?{" "}
                <NavLink to={"/login"} className="text-primary font-semibold">
                  Entra
                </NavLink>
              </h1>
            </section>
          </div>

          {/* Ilustración */}
          <img
            src={landing3}
            className="hidden md:block md:h-auto lg:w-3/5 "
            alt="landing3"
          />
        </section>
      </main>

      <footer className="h-[10dvh]"></footer>

      {/* Mancha arriba izquierda */}
      <article
        className={`absolute z-0 top-[-21rem] left-[-15rem] rotate-[60deg]`}
      >
        <img src={shape1} className="max-w-[30rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha abajo izquierda */}
      <article
        className={`absolute z-0  ${
          userType
            ? `bottom-[-29rem] left-[-10rem] rotate-[66deg]`
            : `bottom-[-29rem] left-[-10rem] rotate-[-53deg]`
        } transition-all`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>
    </div>
  );
}
