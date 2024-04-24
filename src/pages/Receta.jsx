import NavBar from "../components/navbar/NavBarSinBusqueda";
import Tiempo from "../assets/Recetas/Tiempo.png";
import Dificultad from "../assets/Recetas/sombrero-de-cocinero.png";
import TipoComida from "../assets/Recetas/cuchilleria.png";
import Paso1 from "../assets/Recetas/paso1.avif";
import Paso2 from "../assets/Recetas/paso2.jpg";
import {
  Divider,
  Chip,
  CheckboxGroup,
  Checkbox,
  Tab,
  Tabs,
  Card,
  CardBody,
  Image,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import Receta3 from "../assets/Recetas/Receta1.jpg";
import fav from "../assets/iconos/iconos_Favorito.svg";
import corazon from "../assets/iconos/iconos_Corazon.svg";
import { Link } from "react-router-dom";

export function Receta() {
  return (

    <div className=" ">
      <NavBar />
      <Card
      isFooterBlurred
      radius="none"
      className="border-none"
    >
        <Image
          alt="Foto de la receta"
          width={400}
          height={200}
          radius="none"
          className="object-cover"
          src={Receta3}
        />
          <CardFooter
            className="justify-between before:bg-white/10 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
          >
            <div className="flex absolute z-11 gap-2 items-center">
              <Avatar
              size="md"
              classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
              />
              <div className="flex flex-col leading-3">
                <p className="text-md text-white">Creado por:</p>
                <p className="text-xl font-bold text-white">Don Kamaron</p>
              </div>
            </div>
            <Link>
              <img className="w-6" src={fav} alt="Guardar en favoritos" />
            </Link>
          </CardFooter>
      </Card>

      <div className="flex flex-col gap-6 px-4">
        <div className="flex justify-between mt-4 gap-2 items-start">
          <h2 className="text-3xl font-bold text-orange-500 leading-7">
            Nombre de la Receta
          </h2>
          <img src={corazon} className="w-6"/>
        </div>
          <div className="flex gap-1">
            <Chip color="primary" className="text-white">Hawaiano</Chip>
            <Chip color="primary" className="text-white">Vegetariano</Chip>
            <Chip color="primary" className="text-white">Sin gluten</Chip>
          </div>
          <p className="text-gray-500 leading-5 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
            in, facere necessitatibus enim architecto vero repellat quam, veniam
            omnis asperiores, deserunt excepturi cumque doloremque harum!
          </p>

          <div className="flex h-8 items-center space-x-4 text-md justify-between">
            <div className="flex gap-2">
              <img className="h-6" src={Tiempo} alt="Tiempo" />
              <p>30ms</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex gap-2">
              <img className="h-6" src={Dificultad} alt="Dificultad" />
              <p>Fácil</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex gap-2">
              <img className="h-5" src={TipoComida} alt="Tipo de comida" />
              <p>Segundo</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
              <p className="text-gray-500">Alérgenos:</p>
              <div className="flex gap-1">
                <Chip color="primary" variant="bordered">
                  Sésamo
                </Chip>
                <Chip color="primary" variant="bordered">
                  Pescado
                </Chip>
                <Chip color="primary" variant="bordered">
                  Soja
                </Chip>
              </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Ingredientes:</h3>
              <CheckboxGroup color="primary">
                <Checkbox  value="1" className="w-full" >200gr Salmón fresco</Checkbox>
                <Checkbox value="2" className="w-full">200gr Arroz</Checkbox>
                <Checkbox value="3" className="w-full">1 Aguacate</Checkbox>
                <Checkbox value="4"  className="w-full">1 Zanahoria</Checkbox>
                <Checkbox value="5" className="w-full">1/4 Colombarda</Checkbox>
                <Checkbox value="6" className="w-full">1 Mango</Checkbox>
              </CheckboxGroup>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Preparación:</h3>
            <Tabs aria-label="Options"  size="lg" variant="solid">
              <Tab key="1/3" title="1/3">
                <Card>
                  <CardBody>
                    <div className="flex flex-col gap-4">
                      <img className="h-52 object-cover" src={Paso1}></img>
                      <p className="text-md leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2/3" title="2/3">
                <Card>
                  <CardBody>
                  <div className="flex flex-col gap-4">
                      <img className="h-52 object-cover" src={Paso2}></img>
                      <p className="text-md leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3/3" title="3/3">
                <Card>
                  <CardBody>
                  <div className="flex flex-col gap-4">
                      <img className="h-52 object-cover" src={Paso1}></img>
                      <p className="text-md leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>

          <div>
            <p>Instagram</p>
            <p className="text-orange-500">#DONKAMARONELMEJOR</p>
          </div>
          <div className="flex justify-between items-center">

            <div>
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  src={Receta3}
                  width={240}
                  isBlurred
                  className="object-cover rounded-x"
                  alt="Receta"
                />
              </Card>
            </div>
            <div>
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  src={Receta3}
                  width={240}
                  isBlurred
                  className="object-cover rounded-x"
                  alt="Receta"
                />
              </Card>
            </div>
          </div>

          <br />
          <div>
            <p>Restaurantes</p>
            <Image
              src={Receta3}
              width={400}
              isBlurred
              className="object-cover rounded-xl border-2 border-orange-500"
              alt="Receta"
            />
            <p>Don Kamaron</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam, saepe assumenda cum nemo repudiandae quas culpa quidem voluptate atque non! Dolor amet impedit recusandae laboriosam nemo molestias porro ex.</p>
          </div>
        
      </div>
    </div>
  );
}
