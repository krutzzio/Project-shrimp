import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBarSinBusqueda";
import perfil from "../assets/perfilRestaurante/perfilRestaurante1.jpg";

import {
    Button,
  Card,
  CardBody,
  Chip,
  Image,
  Input,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import Recetas_componente from "../components/Recetas_componente";

export default function PerfilRestaurante() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-2">
        <Image
          width={400}
          height={200}
          radius="none"
          alt="NextUI hero Image"
          src={perfil}
        />
        <h2 className="text-2xl font-bold text-secondary">Don Corleone</h2>
        <div className="flex gap-2">
          <Chip color="secondary" className="text-white">
            3 recetas
          </Chip>
          <Chip color="secondary" className="text-white">
            Italiano
          </Chip>
        </div>
      </div>

      <div className="flex w-full flex-col mt-4">
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="secondary"
          size="lg"
        >
          <Tab key="Información" title="Información">
            <Card>
                <CardBody>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Información básica</h2>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="nombre">
                      Nombre del restaurante
                    </label>
                    <Input placeholder="Don Corleone"
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
                    <Input placeholder="Calle Pilar, 93, 08940, Cornellà de Llobregat"
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
                    <Input placeholder="info@doncorleone.es"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="teléfono"
                      name="teléfono"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Teléfono
                    </label>
                    <Input placeholder="93 337 03 06"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="teléfono"
                      name="teléfono"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Descripción
                    </label>
                    <Textarea placeholder="Restaurante italiano con una extensa carta de platos de nuestra tierra. Destacamos por nuestras pizzas al horno de piedra."
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="descripción"
                      name="descripción"
                    />
                  </article>
                  <Button color="secondary" className="text-white w-36">
                    Aplicar cambios
                  </Button>
                </div>
                </CardBody>
            </Card>
          </Tab>
          <Tab key="Recetas" title="Recetas">
            <Card>
                <CardBody>
                    <div className="flex flex-col items-center">
                        <Button color="secondary" className="text-white w-36 my-4">
                        Generar código
                        </Button>
                    </div>
                    <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-lg">Tus recetas</h2>
                        <Recetas_componente/>
                        <Recetas_componente/>
                        <Recetas_componente/>
                    </div>
                    
                </CardBody>
            </Card>
          </Tab>
          <Tab key="Promociones" title="Promociones">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Crea tu promoción</h2>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="usuario">
                      Usuario Instagram
                    </label>
                    <Input
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="usuario"
                      name="usuario"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="codigo">
                      Código
                    </label>
                    <Input
                      variant="underlined"
                      className="input-form"
                      type="number"
                      id="codigo"
                      name="codigo"
                    />
                  </article>
                  <Button color="secondary" className="text-white w-36">
                    Generar código
                  </Button>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <h2 className="font-bold text-lg">Promociones que has dado</h2>
                    
                    <Table removeWrapper aria-label="Example static collection table">
                      <TableHeader>
                        <TableColumn>CÓDIGO</TableColumn>
                        <TableColumn>USUARIO</TableColumn>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>444444</TableCell>
                          <TableCell>@laquelra</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>444444</TableCell>
                          <TableCell>@laquelra</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>444444</TableCell>
                          <TableCell>@laquelra</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>444444</TableCell>
                          <TableCell>@laquelra</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                </div>
                
              </CardBody>
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
