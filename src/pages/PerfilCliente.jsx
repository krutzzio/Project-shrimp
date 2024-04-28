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
import AddIcon from "../assets/add.svg";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";

export function PerfilCliente() {
  const { user } = useContext(UserInfoContext)

  return (
    <div className="flex flex-col h-screen ">
      <NavBar />

      <main className="">
        <div className="flex flex-col items-center gap-2 mt-4 ">
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
              src={user.foto_perfil}
            />
          </article>

          <h2 className="text-2xl font-bold">{user.nombre}</h2>

          <div className="flex gap-2">
            <Chip color="primary" className="text-white">
              13 recetas
            </Chip>
            <Chip color="primary" className="text-white">
              Vegetariana
            </Chip>
          </div>
        </div>

        <div className="flex w-full flex-col mt-4 max-w-screen-2xl m-auto">
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
                        placeholder={user.nombre}
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
                        placeholder={user.cp}
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
                        placeholder={user.correo}
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
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg">Tus recetas</h2>
                    <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
                      
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Restaurantes" title="Restaurantes">
              <Card>
                <CardBody>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg">Tus recetas</h2>
                    <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
                      
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        <div className="flex items-center justify-center px-4 py-6 mt-4 bg-primary rounded shadow hover:bg-orange-600">
          <Link to="/">
            <button className="text-lg font-bold text-white">Desloguear</button>
          </Link>
        </div>
      </main>


    </div>
  );
}
