/* eslint-disable react/prop-types */
import { Chip } from "@nextui-org/react";
import Tiempo from "../../../assets/Recetas/Tiempo.png";
import Dificultad from "../../../assets/Recetas/sombrero-de-cocinero.png";
import TipoComida from "../../../assets/Recetas/cuchilleria.png";
import corazon from "../../../assets/iconos/iconos_Corazon.svg";
import { Link } from "react-router-dom";


export function CardReceta({ recetaInfo }) {
  const { receta, nombreRestaurante, tipoCocinaReceta, recetaInUser } = recetaInfo
  return (
    <Link to={"/receta"} className="max-w-md min-w-50 items-center flex flex-col">
      {/*Imagen*/}
      <div className="flex flex-col gap-1 relative my-4 rounded-2xl">
        <div className="flex relative">
          <Chip color="primary" className="absolute z-20 top-[0.5rem] left-[0.5rem] text-white">{tipoCocinaReceta}</Chip>
          <img className="absolute z-20 w-6 top-[0.51rem] right-[0.5rem]" src={corazon} />
          <img
            className="rounded-xl w-full md:min-w-60 h-36 object-cover"
            src={receta.foto_receta}
            alt=""
          />
        </div>

        {/*Iconos*/}
        <div className="flex h-8 items-center text-md justify-between px-2 min-w-72">
          <div className="flex gap-2">
            <img className="h-4" src={Tiempo} alt="Tiempo" />
            <p className="text-sm">{receta.tiempo}</p>
          </div>
          <div className="flex gap-2">
            <img className="h-4" src={Dificultad} alt="Dificultad" />
            <p className="text-sm">{receta.dificultad}</p>
          </div>
          <div className="flex gap-2">
            <img className="h-4" src={TipoComida} alt="Tipo de comida" />
            <p className="text-sm">{receta.tipo}</p>
          </div>
        </div>

        {/*Texto*/}
        <div className="flex flex-col mx-2 mb-4 leading-4">
          <h2 className="text-xl font-bold">{receta.nombre_receta}</h2>
          <p className="text-gray-500 text-md">{nombreRestaurante}</p>
        </div>
      </div>
    </Link>
  );
}