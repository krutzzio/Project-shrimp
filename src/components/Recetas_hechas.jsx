import { Link } from "react-router-dom"

const Recetas_hechas = () => {
  return (
    <div>
      <p className="text-4xl">Recetas Hechas</p>
      <div className="flex flex-col items-center justify-center h-auto w-auto border-2 border-black rounded-md h-auto w-auto py-2 bg-red-700">
            <Link to="/">
              <button className="text-xl">Desloguear</button>
            </Link>
          </div>
    </div>
  )
}

export default Recetas_hechas
