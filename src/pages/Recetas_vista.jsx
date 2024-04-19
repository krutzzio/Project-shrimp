import { Link } from 'react-router-dom';

const Recetas_vista = () => {


  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <header className="flex justify-between items-center mb-4 ">
        <Link to={`/`}>
        <img
          className="h-12 mb-4 hover:opacity-75"
          src="src\assets\logo\logoGamba_logoNaranja.svg"
          alt="Logo"
        />
        </Link>
        <Link to={`/Perfil_cliente`}>
        <img src="src\assets\Recetas\Icon_perfil.png" className="h-16 mb-4 rounded-full hover:opacity-75" alt="Perfil"/>
        </Link>
      </header>

      <button
        className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600"
        onClick={() => window.history.back()}
      >
        {"< Atrás"}
      </button>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full" src="src\assets\Recetas\Receta1.jpg" alt="Receta" />

        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-orange-500">
            Nombre de la Receta
          </h2>

          <p className="text-gray-500 mb-4 text-ml">Nombre del Restaurante</p>

          <div className="flex justify-between text-sm mb-4">
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

          <h3 className="font-bold mb-2 text-orange-500 text-xl">Ingredientes:</h3>

          <ul className="text-gray-500 text-ml">
            <li>Ingrediente 1</li>
            <li>Ingrediente 2</li>
            <li>Ingrediente 3</li>
          </ul>

          <h3 className="font-bold mb-2 mt-4 text-orange-500 text-xl">Preparación:</h3>

          <div className="flex flex-col">
            <div className="border border-gray-200 p-3 mb-4">
              <img className="w-full" src="src\assets\Recetas\paso1.avif" alt="Receta" />
              <p className="text-ml text-gray-500">
                Paso 1 de la preparación...
                <br></br>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quas maiores tempore possimus vitae, atque, molestias sequi doloribus non fugiat aut hic facere ut? Animi sunt labore fugiat velit esse.
              </p>
            </div>
            <div className="border border-gray-200 p-3 mb-4">
              <img className="w-full" src="src\assets\Recetas\paso2.jpg" alt="Receta" />
              <p className="text-ml text-gray-500">
                Paso 2 de la preparación...
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi suscipit distinctio dolore dolorem quas ea perferendis placeat optio molestiae eos quia ipsam dolorum aspernatur, culpa doloremque voluptates dignissimos rerum!
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button href="/" className="text-blue-500">
              Ver en Instagram
            </button>
            <button href="/" className="text-blue-500">
              Visitar Restaurante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recetas_vista;
