import RadioChoose from "../Radio/Radio"

export default function Step2Client() {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">Sigues alguna dieta?</h1>
            </header>
            <main className="flex flex-col items-center ">
                <RadioChoose />
            </main>
            <footer>

            </footer>
        </main>
    )
}