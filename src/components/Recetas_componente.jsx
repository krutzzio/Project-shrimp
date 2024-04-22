
import sombrero from "../assets/Recetas/sombrero-de-cocinero.png"
import receta1 from "../assets/Recetas/Receta1.jpg"
import pastel from "../assets/Recetas/pastel.png"
import tiempo from "../assets/Recetas/sombrero-de-cocinero.png"


const Recetas_componente = () => {


  return (
    <div className="p-2">
      <div className=" flex flex-col rounded-xl shadow-lg">
        <img

          className="border-2 rounded-t-xl w-full h-48 object-cover"
          src={receta1}

          alt=""
        />
        <div className="flex justify-between text-sm px-4 pt-2">
          <div className="flex items-center">
            <img
              className="w-5 mr-2"

              src={tiempo}

              alt="Tiempo"
            />
            <p className="text-gray-500">30 mins</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2"

              src={sombrero}

              alt="Dificultad"
            />
            <p className="text-gray-500">Fácil</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2"

              src={pastel}

              alt="Utensilios"
            />
            <p className="text-gray-500">Tipo de comida</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <h2 className="font-bold text-xl">Ensalada de kamaron</h2>
          <p className="text-gray-500 text-ml ">Tipo de cocina</p>
        </div>
      </div>
    </div>
  );
};

export default Recetas_componente;
