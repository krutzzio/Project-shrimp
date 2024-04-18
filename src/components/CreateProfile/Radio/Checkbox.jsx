import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
    slots: {
        base: "border-primary hover:bg-default",
        content: "text-default-500"
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
    } = useCheckbox({
        ...props
    })

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
        <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
                className="justify-center"
                orientation="horizontal"
                value={groupSelected}
                onChange={setGroupSelected}
            >
                <CustomCheckboxTest value="wifi">Wifi</CustomCheckboxTest>
                <CustomCheckboxTest value="tv">TV</CustomCheckboxTest>
                <CustomCheckboxTest value="kitchen">Kitchen</CustomCheckboxTest>
                <CustomCheckboxTest value="parking">Parking</CustomCheckboxTest>
                <CustomCheckboxTest value="pool">Pool</CustomCheckboxTest>
                <CustomCheckboxTest value="gym">Gym</CustomCheckboxTest>
                <CustomCheckboxTest value="wifi">Wifi</CustomCheckboxTest>
                <CustomCheckboxTest value="tv">TV</CustomCheckboxTest>
                <CustomCheckboxTest value="kitchen">Kitchen</CustomCheckboxTest>
                <CustomCheckboxTest value="parking">Parking</CustomCheckboxTest>
                <CustomCheckboxTest value="pool">Pool</CustomCheckboxTest>
                <CustomCheckboxTest value="gym">Gym</CustomCheckboxTest>
                <CustomCheckboxTest value="wifi">Wifi</CustomCheckboxTest>
                <CustomCheckboxTest value="tv">TV</CustomCheckboxTest>
                <CustomCheckboxTest value="kitchen">Kitchen</CustomCheckboxTest>
                <CustomCheckboxTest value="parking">Parking</CustomCheckboxTest>
                <CustomCheckboxTest value="pool">Pool</CustomCheckboxTest>
                <CustomCheckboxTest value="gym">Gym</CustomCheckboxTest>
            </CheckboxGroup>
        </div>
    );
}
