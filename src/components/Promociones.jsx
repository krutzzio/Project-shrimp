import { Link } from "react-router-dom"; 

const Promociones = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center">Promociones</h1>
      
      <div className="bg-white p-4 my-4 rounded-lg border border-orange-500">
        <h2 className="text-2xl font-semibold mb-2">Promoción 1</h2>
        <p>@Usuario de insta que pertenece</p>
        <p>Descripción de la promoción 1...</p>
        
        <Link to="/promocion1">
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600">
            Ver más
          </button>
        </Link>
      </div>

      <Link to="/home">
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600">
          Volver
        </button>
      </Link>
    </div>
  );
};

export default Promociones;
