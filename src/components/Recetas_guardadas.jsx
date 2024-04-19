import { Link } from "react-router-dom"

const Recetas_guardadas = () => {
  return (
    <div>
      <p className="text-4xl">Recetas_guardadas</p>
      <div className="flex flex-col items-center justify-center border-2 border-black rounded-md h-auto w-auto py-2 bg-red-700">
            <Link to="/">
              <button className="text-xl">Desloguear</button>
            </Link>
          </div>
    </div>
  )
}

export default Recetas_guardadas
