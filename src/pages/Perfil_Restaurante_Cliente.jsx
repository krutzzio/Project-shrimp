import Recetas_componente from "../components/Recetas_componente";
import NavBar from "../components/navbar/NavBarSinBusqueda";



const Perfil_Restaurante_Cliente = () => {
  return (
    <div className="max-w-2xl mx-auto p-4  ">
      <NavBar></NavBar>
      <img
        className="border-2 border-orange-500 rounded-lg shadow-lg w-full h-48 object-cover"
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
          <a href="tel:+34678567876" className="text-gray-500">Telefono</a>
        </div>
        <div className="flex items-center">
          <img
          className="w-5 mr-2 text-orange-500"
            src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
            alt="Correo"
          />
          <a href="correo:Donkamaron@donkamaron.com" className="text-gray-500">Correo</a>
        </div>
        <div className="flex items-center">
          <img
          className="w-5 mr-2 text-orange-500"
            src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
            alt="Ubicacion"
          />
          <a href="https://maps.app.goo.gl/47ohvd5SkDLAxAbi8" className="text-gray-500">Ubicacion</a>
        </div>
      </div>
      <h3 className="font-bold mb-2 text-orange-500 py-4 text-xl">Recetas</h3>
      <Recetas_componente/>
      <Recetas_componente/>
    </div>
  );
};

export default Perfil_Restaurante_Cliente;
