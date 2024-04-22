import NavBar from "../components/navbar/NavBar";
import Tiempo from "../assets/Recetas/Tiempo.png";
import Dificultad from "../assets/Recetas/sombrero-de-cocinero.png";
import TipoComida from "../assets/Recetas/pastel.png";
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
  Button,
  User,
} from "@nextui-org/react";
import Receta3 from "../assets/Recetas/Receta1.jpg";

const Recetas = () => {
  return (
    <div className=" ">
      <NavBar></NavBar>
      <div>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover rounded-xl"
            src={Receta3}
          />
          <CardFooter className="justify-between before:bg-white/10 bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_15px)] shadow-small ml-1 z-10">
            <User
              name="Don Kamaron"
              description="@donkamaron"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            ></User>
            <Button
              className="text-tiny text-white bg-orange-200"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Guardar
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-orange-500">
            Nombre de la Receta
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
            in, facere necessitatibus enim architecto vero repellat quam, veniam
            omnis asperiores, deserunt excepturi cumque doloremque harum! Enim
            ex maiores doloremque!
          </p>
          <br />

          <div className="flex h-5 items-center space-x-4 text-small justify-between">
            <div>
              <img className="w-5" src={Tiempo} alt="Tiempo" />
            </div>
            <div>
              <p>30ms</p>
            </div>
            <Divider orientation="vertical" />
            <div>
              <img className="w-5" src={Dificultad} alt="Dificultad" />
            </div>
            <div>
              <p>Fácil</p>
            </div>
            <Divider orientation="vertical" />
            <div>
              <img className="w-5" src={TipoComida} alt="Tipo de comida" />
            </div>
            <div>
              <p>Tipo de comida</p>
            </div>
          </div>
          <br />

          <div className="flex flex-col">
            <div>
              <p className="text-gray-500">Alérgenos:</p>
              <div className="flex gap-4 ">
                <Chip color="warning" variant="bordered">
                  Sésamo
                </Chip>
                <Chip color="warning" variant="bordered">
                  Pescado
                </Chip>
                <Chip color="warning" variant="bordered">
                  Soja
                </Chip>
              </div>
              <br></br>
            </div>
          </div>

          <div className="">
            <h3 className="font-bold mb-2 text-xl">Ingredientes:</h3>
            <div className="flex flex-col gap-3">
              <CheckboxGroup label="Select cities" color="warning">
                <Checkbox>200gr Salmón fresco</Checkbox>
                <Checkbox>200gr Arroz</Checkbox>
                <Checkbox>1 Aguacate</Checkbox>
                <Checkbox>1 Zanahoria</Checkbox>
                <Checkbox>1/4 Colombarda</Checkbox>
                <Checkbox>1 Mango</Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <h3 className="font-bold mb-2 mt-4 text-xl">Preparación:</h3>

          <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="1/3" title="1/3">
                <Card>
                  <CardBody>
                    <img src={Paso1}></img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2/3" title="2/3">
                <Card>
                  <CardBody>
                    <img src={Paso2}></img>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3/3" title="3/3">
                <Card>
                  <CardBody>
                    <img src={Paso1}></img>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
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

          <br/>
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
    </div>
  );
};

export default Recetas;
