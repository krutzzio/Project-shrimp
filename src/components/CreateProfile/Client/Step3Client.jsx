import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";

export default function Step3Client() {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Tienes alguna alergia <br />o intolerancia?</h1>
            </header>
            <main className="w-9/12 m-auto flex flex-col items-center ">
                <CheckboxGroupTest>
                    <CustomCheckboxTest value="wifi">Gluten</CustomCheckboxTest>
                    <CustomCheckboxTest value="tv">Cacahuetes</CustomCheckboxTest>
                    <CustomCheckboxTest value="kitchen">Huevo</CustomCheckboxTest>
                    <CustomCheckboxTest value="parking">Soja</CustomCheckboxTest>
                    <CustomCheckboxTest value="pool">Pescado</CustomCheckboxTest>
                    <CustomCheckboxTest value="gym">Lacteos</CustomCheckboxTest>
                </CheckboxGroupTest>
            </main>
            <footer>

            </footer>
        </main>
    )
}
