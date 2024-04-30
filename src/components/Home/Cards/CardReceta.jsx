/* eslint-disable react/prop-types */
import { Chip } from "@nextui-org/react";
import Tiempo from "../../../assets/iconos/iconos_Tiempo.svg";
import Dificultad from "../../../assets/iconos/iconos_Nivel.svg";
import TipoComida from "../../../assets/iconos/iconos_Plato.svg";
import guardarVacio from "../../../assets/iconos/iconos_Corazon.svg";
import guardarRelleno from "../../../assets/iconos/iconos_CorazonRelleno.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { seguirReceta } from "../../../utils/fetchs/seguirReceta";
import { UserInfoContext } from "../../../contexts/UserInfoContext";


export function CardReceta({ recetaInfo }) {
  const { user } = useContext(UserInfoContext)
  const { receta, nombreRestaurante, tipoCocinaReceta, recetaInUser } = recetaInfo
  const [recetaGuardada, setRecetaGuardada] = useState(recetaInUser)

  const handleSeguirReceta = async (event) => {
    event.preventDefault();
    const recetaUser = await seguirReceta({ recetaId: receta.id })
    setRecetaGuardada(recetaUser)
  }

  return (
    <Link to={`/receta/${receta.id}`}>
      {/*Imagen*/}
      <div className="flex flex-col gap-1 relative my-4 rounded-2xl bg-white">
        <div className="relative">
          <Chip color="primary" size="sm" className=" absolute px-2 z-20 top-[0.5rem] left-[0.5rem] text-white">{tipoCocinaReceta}</Chip>
          {
            user.direccion === undefined
              ? <img onClick={handleSeguirReceta} className="absolute z-20 w-6 top-[0.51rem] right-[0.5rem]" src={recetaGuardada ? guardarRelleno : guardarVacio} />
              : <></>
          }
          <img
            className="rounded-xl w-full md:min-w-60 h-36 object-cover"
            src={receta.foto_receta}
            alt=""
          />
        </div>

        {/*Iconos*/}
        <div className="flex h-8 items-center text-md justify-between px-2 min-w-72">
          <div className="flex gap-1">
            <img className="h-4" src={Tiempo} alt="Tiempo" />
            <p className="text-sm font-medium">{receta.tiempo}</p>
          </div>
          <div className="flex gap-1">
            <img className="h-4" src={Dificultad} alt="Dificultad" />
            <p className="text-sm font-medium">{receta.dificultad}</p>
          </div>
          <div className="flex gap-1">
            <img className="h-4" src={TipoComida} alt="Tipo de comida" />
            <p className="text-sm font-medium">{receta.tipo}</p>
          </div>
        </div>

        {/*Texto*/}
        <div className="flex flex-col mx-2 mb-4 leading-4">
          <h2 className="text-lg font-bold">{receta.nombre_receta}</h2>
          <p className="text-gray-500 text-sm font-medium">{nombreRestaurante}</p>
        </div>
      </div>
    </Link>
  );
}