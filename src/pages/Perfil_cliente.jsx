import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import { Avatar, Card, CardBody, Tab, Tabs } from '@nextui-org/react';

const PerfilCliente = () => {
  return (

    <div className="flex flex-col h-screen">
      <NavBar/>
      <div className="flex flex-col items-center px-6 py-8">

        <Avatar
          classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
          className="w-32 h-32 rounded-full border-4 border-white mb-6"
          alt="Perfil"
        />

        <h2 className="text-2xl font-bold text-primary">Alberto Marín</h2>

      </div>

      {/* 

      <div className="flex flex-1 flex-col px-4">

        <Link to="/perfil/recetas-guardadas">
          <button className="w-full p-4 my-2 text-lg font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
            Recetas Guardadas
          </button>
        </Link>

        <Link to="/perfil/recetas-hechas">
          <button className="w-full p-4 my-2 text-lg font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
            Recetas Hechas
          </button>
        </Link>

        <Link to={"/receta"}>
          <button className="w-full p-4 my-2 text-lg font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
            Restaurantes Suscritos
          </button>
        </Link>

        <Link to="/perfil/promos">
          <button className="w-full p-4 my-2 text-lg font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
            Promociones
          </button>
        </Link>
        <Link to="/perfil/restaurante-cliente">
          <button className="w-full p-4 my-2 text-lg font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
            Restaurante
          </button>
        </Link>

      </div>

      */}


      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" radius='none' variant='underlined'>
        <Tab key="Favoritas" title="Favoritas">
          <Card>
            <CardBody>
              Aquí irán los restaurantes favoritos.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Hechas" title="Hechas">
          <Card>
            <CardBody>
            Aquí irán las recetas que ya han hecho.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Restaurantes" title="Restaurantes">
          <Card>
            <CardBody>
            Aquí irán los restaurantes guardados.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Promociones" title="Promociones">
          <Card>
            <CardBody>
            Aquí irán las promociones.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  

      <div className="flex items-center justify-center px-4 py-6 mt-4 bg-orange-500 rounded shadow hover:bg-orange-600">
        <Link to="/">
          <button className="text-lg font-bold text-white">
            Desloguear
          </button>
        </Link>
      </div>

    </div>
  );
}

export default PerfilCliente;
