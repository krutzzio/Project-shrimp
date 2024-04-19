import CheckboxGroupTest, { CustomCheckboxTest } from "../Radio/Checkbox";

export default function StepCocina() {

    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">¿Qué cocina te gusta?</h1>
            </header>
            <main className="w-10/12 m-auto flex flex-col  items-center ">
                <CheckboxGroupTest>
                    <CustomCheckboxTest value="española">Española</CustomCheckboxTest>
                    <CustomCheckboxTest value="india">India</CustomCheckboxTest>
                    <CustomCheckboxTest value="francesa">Francesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="italiana">Italiana</CustomCheckboxTest>
                    <CustomCheckboxTest value="portuguesa">Portuguesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="americana">Americana</CustomCheckboxTest>
                    <CustomCheckboxTest value="mexicana">Mexicana</CustomCheckboxTest>
                    <CustomCheckboxTest value="japonesa">Japonesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="china">China</CustomCheckboxTest>
                    <CustomCheckboxTest value="tailandesa">Tailandesa</CustomCheckboxTest>
                    <CustomCheckboxTest value="coreana">Coreana</CustomCheckboxTest>
                    <CustomCheckboxTest value="mediterránea">Mediterránea</CustomCheckboxTest>
                    <CustomCheckboxTest value="árabe">Árabe</CustomCheckboxTest>
                    <CustomCheckboxTest value="brasileña">Brasileña</CustomCheckboxTest>
                    <CustomCheckboxTest value="alemana">Alemana</CustomCheckboxTest>
                    <CustomCheckboxTest value="argentina">Argentina</CustomCheckboxTest>
                </CheckboxGroupTest>
            </main>

            <footer>

            </footer>
        </main>
    )
}
