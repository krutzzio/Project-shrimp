const Recetas_vista = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <img className="" src="../logo.svg" />
      <p className="text-3xl">LOGO</p>
      <div className="flex flex-col ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          {"<"}
        </button>
        <img className="h-auto max-w-lg mx-auto" src="../Receta1.jpg" />
      </div>
      <div className="flex flex-col items-center h-auto w-auto border-2">
        <p className="text-2xl">Nombre Receta</p>
        <p className="text-2xl">Nombre Restaurante</p>
        <br></br>
        <div className="flex flex-row items-center">
          <img className="h-auto max-w-xs" src="../Tiempo.png" alt="" />
          <img className="h-auto max-w-xs" src="../Dificultad.png" alt="" />
          <img className="h-auto max-w-xs" src="../utensilios.png" alt="" />
        </div>
        <br />
        <div className="">
          <p>Ingredientes</p>
          <select></select>
        </div>
        <div>
          <p>Preparación</p>
          <p>PASOS1/4</p>
        </div>
        <div>
          <p>Insta</p>
        </div>
        <div>
          <p>Restaurante</p>
        </div>
      </div>
    </div>
  );
};

export default Recetas_vista;
