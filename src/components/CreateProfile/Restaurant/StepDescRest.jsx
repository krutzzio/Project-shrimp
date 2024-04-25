/* eslint-disable react/prop-types */


export default function StepDescRest({ handleChange, rest }) {
    return (
        <main className="h-[70%] w-full text-center flex flex-col justify-between gap-8">
            <header>
                <h1 className="text-primary text-3xl font-bold leading-8">Danos más información sobre tu local</h1>
            </header>

            <section className="w-11/12 flex flex-col justify-between gap-4 m-auto items-center">
                <article className="flex flex-col justify-start w-72">
                    <label className="w-fit text-sm text-gray-400 font-semibold mb-4 text-left" htmlFor="calle">Número de teléfono</label>
                    <input className="outline-none bg-transparent border-primary border-b-2 w-72" type="number" max={10} id="telefono" name="telefono" value={rest.telefono} onChange={handleChange} />
                </article>
                <article className="flex flex-col justify-start w-72">
                    <label className="w-fit text-sm text-gray-400 font-semibold mb-4 text-left" htmlFor="calle">Descripción</label>
                    <textarea className="outline-none bg-transparent border-primary border-b-2" type="number" rows={10} id="descripcio" name="descripcio" value={rest.descripcio} onChange={handleChange} placeholder="Una pequeña descripción para dar a conocer tu local a los usuarios" />
                </article>
            </section>

            <footer>
            </footer>
        </main>
    )
}
