import { Card, Image, Button, Link } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Card className="max-w-[400px] p-4 items-center ">
        <Image
          alt="nextui logo"
          height={100}
          radius="sm"
          src="https://static.vecteezy.com/system/resources/previews/025/722/189/original/prawn-icon-logo-isolated-on-white-background-vector.jpg"
          width={100}
        />
        <h1 className="font-bold text-2xl mb-2">Project Shrimp</h1>
        <h4 className="">Raquel | Joel | Hannibal | Gerard</h4>
      </Card>
      <Link className="p-0"><NavLink to={"/register"}>Register</NavLink></Link>
      <Button>Hola</Button>
    </div>

  );
}
