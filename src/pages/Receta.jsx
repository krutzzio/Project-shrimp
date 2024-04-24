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
import TiposAlergias from "../components/TiposAlergias/TiposAlergias";

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
          className="object-cover h-72"
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
            <img className="h-8" src={fav} alt="Guardar en favoritos" />
          </Link>
        </CardFooter>
      </Card>

      <div className="flex flex-col gap-8 mt-4">
        <div className="flex flex-col gap-3 mx-4">
          <div className="flex justify-between gap-2 items-start">
            <h2 className="text-3xl font-bold text-orange-500 leading-7">
              Nombre de la Receta
            </h2>
            <img src={corazon} className="h-8" />
          </div>
            <div className="flex gap-1">
            <Chip color="primary" className="text-white">Hawaiano</Chip>
            <Chip color="primary" className="text-white">Vegetariano</Chip>
            <Chip color="primary" className="text-white">Sin gluten</Chip>
          </div>
        </div>
        
        <p className="text-gray-500 leading-5 text-md mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
          in, facere necessitatibus enim architecto vero repellat quam, veniam
          omnis asperiores, deserunt excepturi cumque doloremque harum!
        </p>

        <div className="flex h-8 items-center space-x-4 text-md justify-between mx-4">
          <div className="flex gap-2">
            <img className="h-6" src={Tiempo} alt="Tiempo" />
            <p>30 min</p>
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

        <div className="flex flex-col gap-1 mx-4">
          <p className="text-gray-500">Alérgenos:</p>
          <TiposAlergias/>          
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Ingredientes:</h3>
          <CheckboxGroup color="primary">
            <Checkbox value="1" className="w-full" >200gr Salmón fresco</Checkbox>
            <Checkbox value="2" className="w-full">200gr Arroz</Checkbox>
            <Checkbox value="3" className="w-full">1 Aguacate</Checkbox>
            <Checkbox value="4" className="w-full">1 Zanahoria</Checkbox>
            <Checkbox value="5" className="w-full">1/4 Colombarda</Checkbox>
            <Checkbox value="6" className="w-full">1 Mango</Checkbox>
          </CheckboxGroup>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl mx-4">Preparación:</h3>
          <Tabs aria-label="Options" size="lg" color="primary" variant="underlined">
            <Tab key="1" title="Paso 1">
              <Card>
                <CardBody>
                  <div className="flex flex-col gap-4">
                    <img className="h-52 object-cover" src={Paso1}></img>
                    <p className="text-md leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="2" title="Paso 2">
              <Card>
                <CardBody>
                  <div className="flex flex-col gap-4">
                    <img className="h-52 object-cover" src={Paso2}></img>
                    <p className="text-md leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="3" title="Paso 3">
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

        <div className="flex flex-col gap-1 mx-4">
          <div>
            <h3 className="font-bold text-xl">Instagram:</h3>
            <p className="text-primary">#donkamaronelmejor</p>
          </div>
          <div className="flex gap-2 items-center">
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}

                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}
                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Restaurante:</h3>
          <Image
            src={Receta3}
            width={400}
            height={200}
            className="object-cover h-52"
            alt="Receta"
          />
          <h3 className="text-2xl font-bold text-primary">Don Kamaron</h3>
          <p className="leading-5 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam, saepe assumenda cum nemo repudiandae quas culpa quidem voluptate atque non! Dolor amet impedit recusandae laboriosam nemo molestias porro ex.</p>
        </div>
        

      </div>
    </div>
  );
}
