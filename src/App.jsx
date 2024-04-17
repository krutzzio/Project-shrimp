import { Card, Image } from "@nextui-org/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

export default function App() {

  const { userType } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div className={`h-full ${userType ? `restaurant-theme` : `client-theme`} flex flex-col justify-center items-center`}>
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
        <NavLink to={"/landing"}>Landing</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>

      </div>
    </ThemeProvider>
  );
}
