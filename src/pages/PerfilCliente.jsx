import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBarSinBusqueda";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Tab,
  Tabs,
  Input,
  Chip,
} from "@nextui-org/react";
import { CardReceta } from "../components/Home/Cards/CardReceta";
import { CardRestaurante } from "../components/Home/Cards/CardRestaurante";
import AddIcon from "../assets/add.svg";

export function PerfilCliente() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex flex-col items-center gap-2 mt-4">
        <article className="w-44 h-44 rounded-full relative flex justify-center items-center">
          <label
            htmlFor="photo"
            className="absolute bg-success bottom-[1rem] left-[4.8rem] flex justify-center items-center rounded-full text-3xl h-6 w-6"
          >
            <img src={AddIcon} alt="" />
            <span className="absolute h-7 w-7 rounded-full border-3 border-bgcolor"></span>
          </label>
          <Avatar
            classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
            className="w-32 h-32 rounded-full border-white"
            alt="Perfil"
          />
        </article>

        <h2 className="text-2xl font-bold">Alberto Marín</h2>

        <div className="flex gap-2">
          <Chip color="primary" className="text-white">
            13 recetas
          </Chip>
          <Chip color="primary" className="text-white">
            Vegetariana
          </Chip>
        </div>
      </div>

      {/* 

      <div className="flex flex-1 flex-col px-4">

        <Link to="/Recetas">
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

      <div className="flex w-full flex-col mt-4">
        <Tabs aria-label="Options" radius="none" variant="underlined">
          <Tab key="Datos" title="Datos">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Datos básicos</h2>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="nombre">
                      Nombre
                    </label>
                    <Input
                      placeholder="Mireia Matas"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="nombre"
                      name="nombre"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="dirección">
                      Dirección
                    </label>
                    <Input
                      placeholder="Calle Pilar, 93, 08940, Cornellà de Llobregat"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="dirección"
                      name="dirección"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Correo
                    </label>
                    <Input
                      placeholder="info@doncorleone.es"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="teléfono"
                      name="teléfono"
                    />
                  </article>
                  <Button color="primary" className="text-white w-36">
                    Aplicar cambios
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Recetas" title="Recetas">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Tus recetas</h2>
                  <CardReceta />
                  <CardReceta />
                  <CardReceta />
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Restaurantes" title="Restaurantes">
            <Card>
              <CardBody>
              <div className="flex flex-col gap-4 md:flex-row">
                <CardRestaurante/>
                <CardRestaurante/>
                <CardRestaurante/>
              </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Promociones" title="Promociones">
            <Card>
              <CardBody>Aquí irán las promociones.</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div className="flex items-center justify-center px-4 py-6 mt-4 bg-orange-500 rounded shadow hover:bg-orange-600">
        <Link to="/">
          <button className="text-lg font-bold text-white">Desloguear</button>
        </Link>
      </div>
    </div>
  );
}
