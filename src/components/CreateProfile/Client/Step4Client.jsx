import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";

export default function Step4Client() {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Qué cocina te gusta?</h1>
            </header>
            <main className="w-9/12 m-auto flex flex-col items-center ">
                <CheckboxGroupTest>
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
