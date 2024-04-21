import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../../../contexts/RegisterContext";
import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";

export default function StepCocina() {

    const { client, setRegisterClient } = useContext(RegisterContext)
    const [cocina, setCocina] = useState(client.tipos_cocina);

    useEffect(() => {
        setRegisterClient({ ...client, tipos_cocina: cocina })
    }, [cocina])


    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Qué cocina te gusta?</h1>
            </header>
            <main className="w-10/12 m-auto flex flex-col  items-center ">
                <CheckboxGroupTest
                    value={cocina}
                    setGroup={setCocina}>
                    <CustomCheckboxTest value="Americana">Americana</CustomCheckboxTest>
                    <CustomCheckboxTest value="Britanica">Britanica</CustomCheckboxTest>
                    <CustomCheckboxTest value="China">China</CustomCheckboxTest>
                    <CustomCheckboxTest value="Croata">Croata</CustomCheckboxTest>
                    <CustomCheckboxTest value="Alemana">Alemana</CustomCheckboxTest>
                    <CustomCheckboxTest value="Egicia">Egicia</CustomCheckboxTest>
                    <CustomCheckboxTest value="Filipina">Filipina</CustomCheckboxTest>
                    <CustomCheckboxTest value="Francesa">Francesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="Griega">Griega</CustomCheckboxTest>
                    <CustomCheckboxTest value="India">India</CustomCheckboxTest>
                    <CustomCheckboxTest value="Italiana">Italiana</CustomCheckboxTest>
                    <CustomCheckboxTest value="Jamaicana">Jamaicana</CustomCheckboxTest>
                    <CustomCheckboxTest value="Japonesa">Japonesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="Mexicana">Mexicana</CustomCheckboxTest>
                    <CustomCheckboxTest value="Marroqui">Marroqui</CustomCheckboxTest>
                    <CustomCheckboxTest value="Portuguesa">Portuguesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="Rusa">Rusa</CustomCheckboxTest>
                    <CustomCheckboxTest value="Española">Española</CustomCheckboxTest>
                    <CustomCheckboxTest value="Thailandesa">Thailandesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="Indonesia">Indonesia</CustomCheckboxTest>
                    <CustomCheckboxTest value="Otros">Otros</CustomCheckboxTest>
                </CheckboxGroupTest>
            </main>

            <footer>

            </footer>
        </main>
    )
}
