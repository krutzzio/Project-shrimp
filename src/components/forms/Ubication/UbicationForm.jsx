/* eslint-disable react/prop-types */

export function UbicationClientForm({ handleChange, client }) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium">Añade tu Codigo Postal</h1>
            <section className="w-8/12 flex flex-col justify-start">
                <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="cp">Codigo Postal</label>
                <input className="outline-none bg-transparent border-primary border-b-2" type="number" max={5} id="cp" name="cp" value={client.cp} onChange={handleChange} />
            </section>
        </div>
    )
}

export function UbicationRestaurantForm({ handleChange, rest }) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium">Dirección de tu local</h1>
            <section className="w-8/12 flex flex-col gap-4">
                <article className="flex flex-col justify-start">
                    <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="calle">Calle</label>
                    <input className="outline-none bg-transparent border-primary border-b-2 " type="text" id="direccion" name="direccion" value={rest.direccion} onChange={handleChange} />
                </article>

                <section className="flex justify-between">
                    <article className="w-[35%] flex flex-col justify-start">
                        <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="num">Num.</label>
                        <input className="outline-none bg-transparent border-primary border-b-2" type="number" id="numero" name="numero" value={rest.numero} onChange={handleChange} />
                    </article>
                    <article className="w-[55%] flex flex-col justify-start">
                        <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="cp">Codigo Postal</label>
                        <input className="outline-none bg-transparent border-primary border-b-2 " type="number" max={5} id="cp" name="cp" value={rest.cp} onChange={handleChange} />
                    </article>
                </section>
            </section>
        </div>
    )
}
