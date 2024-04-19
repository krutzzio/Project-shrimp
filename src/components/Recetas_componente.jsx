import Receta from '../assets/Recetas/Receta1.jpg';
import Tiempo from '../assets/Recetas/Tiempo.png';
import Dificultad from '../assets/Recetas/sombrero-de-cocinero.png'
import TipoComida from '../assets/Recetas/pastel.png'

const Recetas_componente = () => {
  return (
    <div className="p-2">
      <div className=" flex flex-col bg-white rounded-xl shadow-lg border-5 border-orange-300">
        <img
          className=" rounded-lg shadow-lg w-full h-48 object-cover"
          src={Receta}
          alt=""
        />
        <div className="flex justify-between text-sm mb-4 p-2">
          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src={Tiempo}
              alt="Tiempo"
            />
            <p className="text-gray-500">30 mins</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src={Dificultad}
              alt="Dificultad"
            />
            <p className="text-gray-500">Fácil</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src={TipoComida}
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
