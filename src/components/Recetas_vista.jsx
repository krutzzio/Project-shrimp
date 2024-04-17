const Recetas_vista = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <img
          className="h-12 mb-4"
          src="src\assets\logo\logoGamba_logoNaranja.svg"
          alt="Logo"
        />
      </header>

      <button
        className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600"
        onClick={() => window.history.back()}
      >
        {"< Atrás"}
      </button>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full" src="../Receta1.jpg" alt="Receta" />

        <div className="p-4">
          <h2 className="text-lg font-bold mb-2 text-orange-500">
            Nombre de la Receta
          </h2>

          <p className="text-gray-500 mb-4">Nombre del Restaurante</p>

          <div className="flex justify-between text-sm mb-4">
            <div className="flex items-center">
              <img
                className="w-5 mr-2 text-orange-500"
                src="../Tiempo.png"
                alt="Tiempo"
              />
              <p className="text-gray-500">30 mins</p>
            </div>

            <div className="flex items-center">
              <img
                className="w-5 mr-2 text-orange-500"
                src="../sombrero-de-cocinero.png"
                alt="Dificultad"
              />
              <p className="text-gray-500">Fácil</p>
            </div>

            <div className="flex items-center">
              <img
                className="w-5 mr-2 text-orange-500"
                src="../utensilios.png"
                alt="Utensilios"
              />
              <p className="text-gray-500">utensilios</p>
            </div>
          </div>

          <h3 className="font-bold mb-2 text-orange-500">Ingredientes:</h3>

          <ul className="text-gray-500">
            <li>Ingrediente 1</li>
            <li>Ingrediente 2</li>
            <li>Ingrediente 3</li>
          </ul>

          <h3 className="font-bold mb-2 mt-4 text-orange-500">Preparación:</h3>

          <div className="flex flex-col">
            <div className="border border-gray-200 p-3 mb-4">
              <img className="w-full" src="../paso1.avif" alt="Receta" />
              <p className="text-sm text-gray-500">
                Paso 1 de la preparación...
              </p>
            </div>
            <div className="border border-gray-200 p-3 mb-4">
              <img className="w-full" src="../paso1.avif" alt="Receta" />
              <p className="text-sm text-gray-500">
                Paso 2 de la preparación...
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:underline">
              Ver en Instagram
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Visitar Restaurante
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recetas_vista;
