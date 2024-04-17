

const Perfil_cliente = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen w-screen ">
        <div className="">
          <div className="flex flex-col items-center justify-center h-auto w-auto border-2 border-black rounded-md h-auto w-auto p-9 shadow-xl bg-white">
            <img
              className="h-auto max-w-lg rounded-sm"
              src="../Perfil.jpg"
            ></img>
            <p className="text-4xl">Alberto Marín</p>
          </div>
          <div className="flex flex-col py-5">
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <a href="/Recetas_guardadas">
                <button className="text-xl">Recetas Guardadas</button>
              </a>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <a href="/Recetas_hechas">
                <button className="text-xl">Recetas Hechas</button>
              </a>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <a href="/Restaurantes_sucritos">
                <button className="text-xl">Restaurantes Suscritos</button>
              </a>
            </div>
            <div className="flex flex-col border-2 border-black rounded-md h-auto w-auto p-4 mb-5 shadow-xl bg-white hover:bg-orange-400">
              <a href="/Promociones">
                <button className="text-xl">Promociones</button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-auto w-auto border-2 border-black rounded-md h-auto w-auto py-2 bg-red-700">
            <a href="/">
              <button className="text-xl">Desloguear</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Perfil_cliente;
