import { Checkbox, cn } from "@nextui-org/react";
import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";

export default function StepCocina() {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Qué cocina te gusta?</h1>
            </header>
            <main className="w-9/12 m-auto flex flex-col items-center ">
                <CheckboxGroupTest>
                    <Checkbox
                        classNames={{
                            base: cn(
                                "w-fit px-2 py-1 m-0",
                                "items-center justify-start",
                                "cursor-pointer rounded-full gap-2 border-primary border-2 text-default-500",
                                "data-[selected=true]:bg-primary data-[selected=true]:text-white",
                            ),
                            label: cn(
                                "data-[selected=true]:text-white"
                            ),
                            wrapper: cn(
                                "hidden data-[selected=true]:text-white"
                            ),
                        }}
                    >Tailandesa</Checkbox>
                    <CustomCheckboxTest value="wifi">Española</CustomCheckboxTest>
                    <CustomCheckboxTest value="tv">India</CustomCheckboxTest>
                    <CustomCheckboxTest value="kitchen">Francesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="parking">Italiana</CustomCheckboxTest>
                    <CustomCheckboxTest value="pool">Portuguesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="gym">Americana</CustomCheckboxTest>
                </CheckboxGroupTest>
            </main>

            <footer>

            </footer>
        </main>
    )
}
