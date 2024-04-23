import receta1 from "../../../assets/Recetas/Receta1.jpg";
import { Divider } from "@nextui-org/react";
import Tiempo from "../../../assets/Recetas/Tiempo.png";
import Dificultad from "../../../assets/Recetas/sombrero-de-cocinero.png";
import TipoComida from "../../../assets/Recetas/cuchilleria.png";

export function CardReceta() {

  return (
    <div className="">
      <div className=" flex flex-col  ">
        <div className="py-2">
          <img
            className="border-2 border-orange-500 rounded-3xl shadow-lg w-full h-48 object-cover "
            src={receta1}
            alt=""
          />
        </div>
        <div className="flex h-5 items-center space-x-4 text-small justify-between ">
          <div>
            <img className="w-5" src={Tiempo} alt="Telefono" />
          </div>
          <div>
            <p>Tiempo</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <img className="w-5" src={Dificultad} alt="Correo" />
          </div>
          <div>
            <p>Dificultad</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <img className="w-5" src={TipoComida} alt="Ubicacion" />
          </div>
          <div>
            <p>TipoComida</p>

          </div>
        </div>
        <div className="flex flex-col p-4">
          <h2 className="font-bold text-xl">Ensalada de kamaron</h2>
          <p className="text-gray-500 text-ml ">Tipo de cocina</p>
        </div>
      </div>
    </div>
  );
}