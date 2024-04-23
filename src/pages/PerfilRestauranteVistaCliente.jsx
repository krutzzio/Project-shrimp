import { CardReceta } from "../components/Home/Cards/CardReceta";
import NavBar from "../components/navbar/NavBar";
import { Divider } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import Tiempo from "../assets/Recetas/Tiempo.png";
import Dificultad from "../assets/Recetas/sombrero-de-cocinero.png";
import TipoComida from "../assets/Recetas/pastel.png";


export function PerfilRestauranteVistaCliente() {
  return (
    <div className="max-w-2xl mx-auto p-4  ">
      <NavBar></NavBar>
      <div className=" relative ">
        <img
          className="w-full h-48 object-cover grid place-items-center"
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ac/54/52/front-and-east-side-of.jpg"
        />
        <div className="absolute p-2 bottom-0 right-0">

          <button className=" bg-orange-500 text-white rounded-lg p-2 hover:bg-orange-600">
            <p>Barcelona</p>
          </button>
        </div>
        <div className="absolute p-2 top-0 left-0">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-xl hover:bg-orange-600">
            <p>{"<"}</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <h3 className="font-bold mb-2 text-orange-500 text-xl">
          Nombre Restaurante
        </h3>
        <img src="" />
      </div>
      <div className="flex gap-4 ">
        <Chip color="warning">Hawaiano</Chip>
        <Chip color="warning">Healthy</Chip>
      </div>

      <p className="text-gray-500 py-4 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nulla
        placeat nemo voluptas porro nam, iste unde mollitia cumque aspernatur
        incidunt dolorum officiis eligendi. Maxime quod deserunt dolor id
        tempora.
      </p>

      <div className="flex h-5 items-center space-x-4 text-small justify-between">
        <div>
          <img className="w-5" src={Tiempo} alt="Tiempo" />
        </div>
        <div>
          <p>30ms</p>
        </div>
        <Divider orientation="vertical" />
        <div>
          <img className="w-5" src={Dificultad} alt="Dificultad" />
        </div>
        <div>
          <p>Fácil</p>
        </div>
        <Divider orientation="vertical" />
        <div>
          <img className="w-5" src={TipoComida} alt="Tipo de comida" />
        </div>
        <div>
          <p>Tipo de comida</p>
        </div>
      </div>
      <h3 className="font-bold mb-2  py-4 text-xl">Recetas</h3>
      <CardReceta />
      <CardReceta />
    </div>
  );
}
