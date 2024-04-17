import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="p-4 text-5xl">Hello World</p>
      <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
        <Link to="/Perfil_cliente">
          <button> Perfil client</button>
        </Link>
      </div>
      <div>
        <Link
          className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400"
          to="/Recetas_vista"
        >
          <button> Recetas vista</button>
        </Link>
      </div>
    </div>
  );
}
