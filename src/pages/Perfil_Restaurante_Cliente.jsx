import { Link } from 'react-router-dom';

const Perfil_Restaurante_Cliente = () => {
  return (
    <div className="max-w-2xl mx-auto p-4  ">
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
      <img
        className=""
        src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ac/54/52/front-and-east-side-of.jpg"
      ></img>
      <h3 className="font-bold mb-2 text-orange-500 text-xl">
        Nombre Restaurante:
      </h3>
      <p className="mb-2 text-ml text-gray-500">DON KAMARON</p>
      <h2 className="font-bold mb-2 text-orange-500 text-xl">Tipo Cocina: </h2>
      <p className="mb-2 text-gray-500 text-ml">Americana</p>
      <h2 className="font-bold mb-2 text-orange-500 text-xl">Descripción:</h2>
      <p className="text-gray-500 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nulla
        placeat nemo voluptas porro nam, iste unde mollitia cumque aspernatur
        incidunt dolorum officiis eligendi. Maxime quod deserunt dolor id
        tempora.
      </p>
      <div className="flex justify-between text-sm mb-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <img 
          className="w-5 mr-2 text-orange-500"
          src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="Telefono" />
          <p className="text-gray-500">Telefono</p>
        </div>
        <div className="flex items-center">
          <img
          className="w-5 mr-2 text-orange-500"
            src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
            alt="Correo"
          />
          <p className="text-gray-500">Correo</p>
        </div>
        <div className="flex items-center">
          <img
          className="w-5 mr-2 text-orange-500"
            src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
            alt="Ubicacion"
          />
          <p className="text-gray-500">Ubicación</p>
        </div>
      </div>
      <h3 className="font-bold mb-2 text-orange-500 py-4 text-xl">Recetas</h3>
  
    </div>
  );
};

export default Perfil_Restaurante_Cliente;
