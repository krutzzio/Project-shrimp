import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
    slots: {
        base: "border-primary w-fit hover:bg-default",
        content: "text-default-500 w-fit"
    },
    variants: {
        isSelected: {
            true: {
                base: "border-primary bg-primary hover:bg-primary hover:border-primary",
                content: "text-white pl-1"
            }
        },
        isFocusVisible: {
            true: {
                base: "bg-primary outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
            }
        }
    }
})

export const CustomCheckboxTest = (props) => {
    const {
        children,
        isSelected,
        isFocusVisible,
        getBaseProps,
        getLabelProps,
        getInputProps,
    } = useCheckbox({ ...props })

    const styles = checkbox({ isSelected, isFocusVisible })

    return (
        <label {...getBaseProps()}>
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <Chip
                classNames={{
                    base: styles.base(),
                    content: styles.content(),
                }}
                color="primary"
                variant="faded"
                {...getLabelProps()}
            >
                {children ? children : isSelected ? "Enabled" : "Disabled"}
            </Chip>
        </label>
    );
}




export default function CheckboxGroupTest() {
    const [groupSelected, setGroupSelected] = React.useState([]);

    return (
        <div className="w-full">
            <CheckboxGroup
                className=""
                classNames={{
                    wrapper: "grid grid-cols-2 content-center"
                }}
                orientation="horizontal"
                value={groupSelected}
                onChange={setGroupSelected}
            >
                <CustomCheckboxTest value="wifi">Gluten</CustomCheckboxTest>
                <CustomCheckboxTest value="tv">Cacahuetes</CustomCheckboxTest>
                <CustomCheckboxTest value="kitchen">Huevo</CustomCheckboxTest>
                <CustomCheckboxTest value="parking">Soja</CustomCheckboxTest>
                <CustomCheckboxTest value="pool">Pescado</CustomCheckboxTest>
                <CustomCheckboxTest value="gym">Lacteos</CustomCheckboxTest>
            </CheckboxGroup>
        </div>
    );
}
