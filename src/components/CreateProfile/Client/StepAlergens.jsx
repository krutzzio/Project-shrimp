import { useContext, useEffect, useState } from "react";
import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";
import { RegisterContext } from "../../../contexts/RegisterContext";
import { tiposAlergias } from '../../../utils/tiposAlergias';


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
            <main className="m-auto flex flex-wrap items-center md:max-w-2xl">
                <CheckboxGroupTest
                    value={alergens}
                    setGroup={setAlergens}
                    className="gap-1">
                    {
                    tiposAlergias.map(alergia => {
                        return (
                            <CustomCheckboxTest value={alergia} variant='bordered' size="" color='primary' className=''>
                                <div className='flex items-center gap-1'>
                                    <img className='h-6' src={`../iconosAlergias/${alergia}.svg`} />
                                    <span className="text-md">
                                        {alergia}
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
