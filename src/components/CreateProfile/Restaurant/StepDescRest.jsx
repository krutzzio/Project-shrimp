

// eslint-disable-next-line react/prop-types
export default function StepDescRest() {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">Danos más información sobre tu local</h1>
            </header>

            <section className="w-8/12 flex flex-col justify-between m-auto h-4/6">
                <article className="flex flex-col justify-start">
                    <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="calle">Número de teléfono</label>
                    <input className="outline-none bg-transparent border-primary border-b-2" type="number" max={10} id="tel" name="tel" />
                </article>
                <article className="flex flex-col justify-start">
                    <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="calle">Descripción</label>
                    <textarea className="outline-none bg-transparent border-primary border-b-2" type="number" rows={10} id="tel" name="tel" placeholder="Una pequeña descripción para dar a conocer tu local a los usuarios" />
                </article>
            </section>

            <footer>
            </footer>
        </main>
    )
}
