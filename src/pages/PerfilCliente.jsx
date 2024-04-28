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
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";
import logout from "../assets/iconos/iconos_Logout.svg";

export function PerfilCliente() {
  const { user } = useContext(UserInfoContext);

  return (
    <div className="flex flex-col h-screen ">
      <NavBar />

      <main className="">
        <div className="flex flex-col gap-2 mt-4 max-w-screen-2xl m-auto">
          <div className="flex items-start justify-between px-2">
            <div className="w-8"></div>

            <Avatar
              classNames={{ base: "bg-primary", icon: "text-[#F2F2F2]" }}
              className="w-32 h-32 rounded-full border-white"
              alt="Perfil"
              src={user.foto_perfil}
            />
            <Link to={"/"}>
              <img src={logout} className="w-8" />
            </Link>
          </div>
          <div className="m-auto">
            <h2 className="text-2xl font-bold">{user.nombre}</h2>
          </div>
          <div className="flex gap-2 m-auto">
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
                    <Button color="primary" className="text-white w-36 m-auto">
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
                    <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0"></div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Restaurantes" title="Restaurantes">
              <Card>
                <CardBody>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg">Tus recetas</h2>
                    <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0"></div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
