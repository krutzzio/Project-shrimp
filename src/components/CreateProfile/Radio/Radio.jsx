import { RadioGroup, Radio, cn } from "@nextui-org/react";

export const CustomRadio = (props) => {
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
    return (
        <RadioGroup>
            <CustomRadio value="Vegana">
                Vegana
            </CustomRadio>
            <CustomRadio value="Vegetariana">
                Vegetariana
            </CustomRadio>
            <CustomRadio value="None">
                Ninguna en concreto
            </CustomRadio>
        </RadioGroup>
    );
}
