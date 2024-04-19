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
        <label {...getBaseProps()} className="m-0 w-fit">
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



// eslint-disable-next-line react/prop-types
export default function CheckboxGroupTest({ children, group, setGroup }) {

    return (
        <div className="w-full">
            <CheckboxGroup
                className=""
                classNames={{
                    wrapper:"flex flex-wrap justify-center"
                }}
                orientation="horizontal"
                value={group}
                onChange={setGroup}
            >
                {children}
            </CheckboxGroup>
        </div>
    );
}
