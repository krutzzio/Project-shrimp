const Recetas_componente = () => {
  return (
    <div>
      <div className=" items-center jusitfy-center mb-4 p-5 border-2 border-orange-500 rounded-lg shadow-lg">
        <img
          className="border-2 border-orange-500 rounded-lg shadow-lg"
          src="src\assets\Recetas\Receta1.jpg"
          alt=""
        />
        <div className="flex justify-between text-sm mb-4 p-2">
          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src="src\assets\Recetas\Tiempo.png"
              alt="Tiempo"
            />
            <p className="text-gray-500">30 mins</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src="src\assets\Recetas\sombrero-de-cocinero.png"
              alt="Dificultad"
            />
            <p className="text-gray-500">Fácil</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-5 mr-2 text-orange-500"
              src="src\assets\Recetas\pastel.png"
              alt="Utensilios"
            />
            <p className="text-gray-500">Tipo de comida</p>
          </div>
        </div>
        <h2 className="font-bold mb-2 text-xl">Ensalada de kamaron</h2>
        <p className="text-gray-500 text-ml">Tipo de cocina</p>
      </div>
    </div>
  );
};

export default Recetas_componente;
