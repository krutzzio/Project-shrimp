
import sombrero from "../assets/Recetas/sombrero-de-cocinero.png"
import receta1 from "../assets/Recetas/Receta1.jpg"
import pastel from "../assets/Recetas/pastel.png"
import tiempo from "../assets/Recetas/sombrero-de-cocinero.png"


const Recetas_componente = () => {


  return (
    <div className="p-2">
      <div className=" flex flex-col bg-white rounded-xl shadow-lg border-5 border-orange-300">
        <img

          className="border-2 border-orange-500 rounded-lg shadow-lg w-full h-48 object-cover"
          src={receta1}

          alt=""
        />
        <div className="flex justify-between text-sm mb-4 p-2">
          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"

              src={tiempo}

              alt="Tiempo"
            />
            <p className="text-gray-500">30 mins</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"

              src={sombrero}

              alt="Dificultad"
            />
            <p className="text-gray-500">Fácil</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"

              src={pastel}

              alt="Utensilios"
            />
            <p className="text-gray-500">Tipo de comida</p>
          </div>
        </div>
        <div className="p-2">
          <h2 className="font-bold mb-2 text-xl">Ensalada de kamaron</h2>
          <p className="text-gray-500 text-ml ">Tipo de cocina</p>
        </div>
      </div>
    </div>
  );
};

export default Recetas_componente;
