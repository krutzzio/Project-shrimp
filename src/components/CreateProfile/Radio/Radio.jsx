import { RadioGroup, Radio, cn } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../../../contexts/RegisterContext";

const CustomRadio = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, ...otherProps } = props;

    return (
        <Radio
            {...otherProps}
            classNames={{
                base: cn(
                    "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                    "flex-row-reverse min-w-[15rem] text-primary cursor-pointer rounded-lg gap-4 p-4 border-2 border-primary",
                    "data-[selected=true]:border-primary data-[selected=true]:bg-orange-200"
                ),
            }}
        >
            {children}
        </Radio>
    );
};

export default function RadioChoose() {
    const { client, setRegisterClient } = useContext(RegisterContext)
    const [dieta, setDieta] = useState(client.dieta);

    useEffect(() => {
        setRegisterClient({ ...client, dieta: dieta })
    }, [dieta])

    return (
        <RadioGroup
            value={dieta}
            onValueChange={setDieta}>
            <CustomRadio value="vegano">
                Vegana
            </CustomRadio>
            <CustomRadio value="vegetal">
                Vegetariana
            </CustomRadio>
            <CustomRadio value="otro">
                Ninguna en concreto
            </CustomRadio>
        </RadioGroup>
    );
}
