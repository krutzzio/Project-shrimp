import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../../../contexts/RegisterContext";
import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";
import { tiposComidas } from '../../../utils/tiposComidas';

// eslint-disable-next-line react/prop-types
export default function StepCocina({ profile }) {

    const { client, setRegisterClient, rest, setRegisterRest } = useContext(RegisterContext)
    const [cocina, setCocina] = useState(profile === "client" ? client.tipos_cocina : rest.tipos_cocina);

    useEffect(() => {
        profile === "client"
            ? setRegisterClient({ ...client, tipos_cocina: cocina })
            : setRegisterRest({ ...rest, tipos_cocina: cocina })
    }, [cocina])


    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Qué cocina te gusta?</h1>
            </header>
            <main className="m-auto flex flex-col  items-center md:max-w-2xl">
                <CheckboxGroupTest
                    value={cocina}
                    setGroup={setCocina}
                    className="gap-1">
                    {
                    tiposComidas.map(comidas => {
                        return (
                            <CustomCheckboxTest value={comidas} variant='bordered' color='primary' className=''>
                                <div className='flex items-center gap-1'>
                                    <span className="text-md">
                                        {comidas}
                                    </span>
                                </div>
                            </CustomCheckboxTest>
                        )
                    })
                    }
                </CheckboxGroupTest>
            </main>
            <footer>
            </footer>
        </main>
    )
}
