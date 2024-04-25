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
      className={`overflow-hidden relative text-white h-full flex flex-col justify-between items-center ${userType ? `restaurant-theme` : `client-theme`
        } bg-primary transition-colors`}
    >
      <header className="relative z-10 max-w-screen-2xl w-full mx-auto flex py-4 px-2 items-center justify-between">
        {/*Flecha*/}
        <Link to={"/"} className="w-6 ">
          <img src={flecha} />
        </Link>

        {/*Logo*/}
        <img className="w-32 md:w-44" src={logoGamba} alt="Gamba Logo" />

        <div className="w-6"></div>
      </header>


      <main className="relative z-10 flex flex-col w-11/12 items-center justify-around md:grid md:grid-cols-2 md:content-between max-w-screen-2xl">
        {/* Formulario Registro */}
        <div className="flex flex-col gap-10 mx-6 md:mx-0">
          {/* Título */}
          <section className="text-center">
            <h3 className=" text-primary-foreground font-bold text-4xl mb-1 md:text-5xl md:mb-4">
              Únete a Gamba
            </h3>
            {userType
              ? (
                <p className="leading-5 md:text-xl md:leading-6">
                  Comparte tus recetas con tus <br />
                  actuales y futuros clientes.
                </p>
              )
              : (
                <p className="leading-5 md:text-xl md:leading-6">
                  Cocina las recetas de tus restaurantes <br />
                  favoritos en un mismo lugar. Comparte <br />
                  tus recetas y consigue descuentos.
                </p>
              )
            }
          </section>
          {/* Formulario */}
          <RegisterForm />
        </div>

        {/* Ilustración */}
        <article className="hidden w-full justify-center md:flex">
          <img
            src={landing3}
            className="hidden md:block md:h-full md:max-h-[35rem]"
            alt="landing3"
          />
        </article>

      </main>

      <footer className="h-[10dvh] md:w-11/12 md:grid md:grid-cols-2 md:content-between">
        {/* Link Login */}
        <section className="flex items-end justify-center z-10 relative">
          <h1 className="text-black font-medium">
            ¿Ya estas registrado?{" "}
            <NavLink to={"/login"} className="text-primary font-semibold">
              Entra
            </NavLink>
          </h1>
        </section>
        {/* Para poder centrar el footer en el form */}
        <aside className="hidden md:max-w-[24rem]">
        </aside>
      </footer>

      {/* Mancha arriba izquierda */}
      <article
        className={`absolute z-0 top-[-21rem] left-[-15rem] rotate-[60deg] md:left-[-2rem] md:top-[-14rem]`}
      >
        <img src={shape1} className="max-w-[30rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha abajo izquierda */}
      <article
        className={`absolute z-0  ${userType
          ? `bottom-[-31rem] left-[-12rem] rotate-[66deg]`
          : `bottom-[-31rem] left-[-14rem] rotate-[-65deg]`
          } transition-all`}
      >
        <img src={shape2} className="max-w-[50rem] w-[50rem]" alt="" />
      </article>
    </div>
  );
}
