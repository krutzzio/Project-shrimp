import { CardReceta } from "../components/Home/Cards/CardReceta";
import NavBar from "../components/navbar/NavBarSinBusqueda";
import { Card, Divider, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import Telefono from "../assets/Recetas/telefono.png";
import Correo from "../assets/Recetas/correo.png";
import Ubicacion from "../assets/Recetas/ubicacion.png";
import rest from "../assets/perfilRestaurante/perfilRestaurante1.jpg";
import fav from "../assets/iconos/iconos_Favorito.svg";
import Receta3 from "../assets/Recetas/Receta1.jpg";


export function PerfilRestauranteVistaCliente() {
  return (
    <div className="">
      <NavBar />

      <div className="relative">
        <div className="absolute z-20 p-2 bottom-0 right-0">
          <Chip color="primary" className="text-white">Barcelona</Chip>
        </div>
        <div className="absolute z-20 p-2 top-0 left-0">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-xl hover:bg-orange-600">
            <p>{"<"}</p>
          </button>
        </div>
        <Image
          alt="Foto de la receta"
          width={400}
          height={200}
          radius="none"
          className="object-cover h-72"
          src={rest}
        />
      </div>

      <div className="flex flex-col gap-8 my-4">
        <div className="flex flex-col gap-3 mx-4">
          <div className="flex justify-between gap-2 items-start">
            <h2 className="text-3xl font-bold text-orange-500 leading-7">
              Nombre del restaurante
            </h2>
            <img src={fav} className="h-8" />
          </div>
          <div className="flex gap-1">
            <Chip color="primary" className="text-white">Hawaiano</Chip>
            <Chip color="primary" className="text-white">Vegetariano</Chip>
          </div>
        </div>

        <p className="text-gray-500 leading-5 text-md mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
          in, facere necessitatibus enim architecto vero repellat quam, veniam
          omnis asperiores, deserunt excepturi cumque doloremque harum!
        </p>

        <div className="flex h-8 items-center space-x-4 text-md justify-between mx-4">
          <div className="flex gap-2">
            <img className="h-6" src={Telefono} alt="Tiempo" />
            <p>30 min</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img className="h-6" src={Correo} alt="Dificultad" />
            <p>Fácil</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img className="h-5" src={Ubicacion} alt="Tipo de comida" />
            <p>Segundo</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Recetas:</h3>
          <div className="m-auto md:m-0 md:flex md:gap-4">
          <CardReceta/>
          <CardReceta/>
          <CardReceta/>
          <CardReceta/>
          <CardReceta/>
          <CardReceta/>
          </div>
        </div>

        {/*Instagram*/}
        <div className="flex flex-col gap-1 mx-4">
          <div>
            <h3 className="font-bold text-xl">Instagram:</h3>
            <p className="text-primary">#donkamaronelmejor</p>
          </div>
          <div className="flex gap-2 items-center">
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}

                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}
                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
