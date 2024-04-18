import { Link } from 'react-router-dom';

const Perfil_cliente = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen w-screen ">
        <nav>
          <div className="flex flex-col items-center justify-center h-auto w-auto border-2 border-black rounded-md h-auto w-auto p-9 shadow-xl bg-white">
            <img
              className="h-40 w-40 rounded-full shadow-lg"
              src="src\assets\Recetas\Icon_perfil.png"
            />
            <p className="text-4xl">Alberto Marín</p>
          </div>
          <div className="flex flex-col py-5">
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <Link to= "/Recetas_guardadas">
                <button className="text-xl">Recetas Guardadas</button>
              </Link>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <Link to="/Recetas_hechas">
                <button className="text-xl">Recetas Hechas</button>
              </Link>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <Link to="/Restaurantes_sucritos">
                <button className="text-xl">Restaurantes Suscritos</button>
              </Link>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <Link to="/Promociones">
                <button className="text-xl">Promociones</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-auto w-auto border-2 border-black rounded-md h-auto w-auto py-2 bg-red-700">
            <Link to="/">
              <button className="text-xl">Desloguear</button>
            </Link>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Perfil_cliente;
