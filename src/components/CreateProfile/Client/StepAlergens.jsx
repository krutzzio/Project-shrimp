import { useContext, useEffect, useState } from "react";
import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";
import { RegisterContext } from "../../../contexts/RegisterContext";

export default function StepAlergens() {

    const { client, setRegisterClient } = useContext(RegisterContext)
    const [alergens, setAlergens] = useState(client.alergias);

    useEffect(() => {
        setRegisterClient({ ...client, alergias: alergens })
    }, [alergens])

    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Tienes alguna alergia <br />o intolerancia?</h1>
            </header>
            <main className="w-9/12 m-auto flex flex-col items-center ">
                <CheckboxGroupTest
                    value={alergens}
                    setGroup={setAlergens}>
                    <CustomCheckboxTest value="Gluten">Gluten</CustomCheckboxTest>
                    <CustomCheckboxTest value="Crustaceos">Crustáceos</CustomCheckboxTest>
                    <CustomCheckboxTest value="Huevos">Huevos</CustomCheckboxTest>
                    <CustomCheckboxTest value="Pescado">Pescado</CustomCheckboxTest>
                    <CustomCheckboxTest value="Cacahuetes">Cacahuetes</CustomCheckboxTest>
                    <CustomCheckboxTest value="Soja">Soja</CustomCheckboxTest>
                    <CustomCheckboxTest value="Lacteos">Lácteos</CustomCheckboxTest>
                    <CustomCheckboxTest value="Mostaza">Mostaza</CustomCheckboxTest>
                    <CustomCheckboxTest value="Apio">Apio</CustomCheckboxTest>
                    <CustomCheckboxTest value="Sulfitos">Sulfitos</CustomCheckboxTest>
                    <CustomCheckboxTest value="Sesamo">Sésamo</CustomCheckboxTest>
                    <CustomCheckboxTest value="Moluscos">Moluscos</CustomCheckboxTest>
                    <CustomCheckboxTest value="Altramuces">Altramuces</CustomCheckboxTest>
                    <CustomCheckboxTest value="Frutos secos">Frutos secos</CustomCheckboxTest>
                </CheckboxGroupTest>
            </main>

            <footer>
            </footer>
        </main>
    )
}
