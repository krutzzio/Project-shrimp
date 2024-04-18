import { useContext } from "react";
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import landing1 from "../assets/illustrations/landing1.svg";
import { Button } from "@nextui-org/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { userType } = useContext(ThemeContext);

  return (
    <div
      className={`overflow-hidden relative text-white h-full flex flex-col justify-between ${userType ? `restaurant-theme` : `client-theme`
        } bg-primary transition-colors`}
    >
      <header className="relative z-10 flex p-4 items-center justify-between lg:px-8">
        <img className="w-32 lg:w-44" src={logoGamba} alt="Gamba Logo" />
        <Button color="primary" className="shadow-xl content-end font-bold">

          <Link className="text-[#FAFAFA]" to={"/login"}>Log in</Link>

        </Button>
      </header>

      <main className="relative z-10 flex justify-around">
        <section className="flex flex-col items-center md:flex-row md:gap-4 md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
          <img
            src={landing1}
            className="w-full h-96 md:h-auto md:w-1/2 md:hidden"
            alt="landing1"
          />
          <div className="flex flex-col justify-between leading-normal">
            <h1 className="text-center text-4xl font-extrabold leading-none tracking-tight my-4 md:text-left md:mx-0 xl:text-5xl">
              Encuentra tus <br /> mejores recetas
            </h1>
            <p className="hidden md:block mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam saepe quo aliquam deserunt reprehenderit adipisci
              voluptates aspernatur cumque libero, fugit nisi doloremque qui hic
              numquam maxime totam in, tempore placeat.
            </p>
            <Button className="w-[20rem] h-12 text-xl bg-[#272D2F] text-white font-semibold shadow-lg">
              <Link className="w-full" to={"/register"}>Regístrate</Link>
            </Button>
          </div>
          <img
            src={landing1}
            className="hidden md:block md:h-auto md:w-1/2"
            alt="landing1"
          />
        </section>
      </main>

      <footer className="h-[10dvh]"></footer>

      {/* Mancha arriba derecha */}
      <article
        className={`absolute z-0 top-[-17rem] rotate-[100deg] right-[-14rem] md:top-[-14rem] md:right-[-12rem]`}
      >
        <img 
        src={shape1} 
        className="max-w-[30rem] w-[50rem]" 
        alt="" />
      </article>

      {/* Mancha abajo derecha */}
      <article className={`absolute z-0 rotate-[-20deg] bottom-[-36rem] right-[-26rem] md:right-[-22rem] md:bottom-[-26rem] lg:bottom-[-32rem] xl:bottom-[-26rem]`}>
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
      {/* Mancha abajo izquierda */}
      <article className={`absolute hidden z-0 rotate-[200deg] bottom-[-30rem] left-[-18rem] md:block xl:bottom-[-26rem]`}>
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
    </div>
  );
}
