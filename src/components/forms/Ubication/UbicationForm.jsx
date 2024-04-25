/* eslint-disable react/prop-types */

export function UbicationClientForm({ handleChange, client }) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium text-lg">Añade tu Codigo Postal</h1>
            <section className="w-11/12 flex flex-col justify-start">
                {/*<label className="w-fit text-sm text-gray-400 font-semibold mb-4" htmlFor="cp">Codigo Postal</label>*/}
                <input className="outline-none bg-transparent border-primary border-b-2 w-72 m-auto" type="number" max={5} id="cp" name="cp" value={client.cp} onChange={handleChange} />
            </section>
        </div>
    )
}

export function UbicationRestaurantForm({ handleChange, rest }) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium text-lg">Dirección de tu local</h1>
            <section className="w-11/12 flex flex-col gap-4">
                <article className="flex flex-col justify-start w-72 m-auto">
                    <label className="text-sm text-gray-400 font-semibold mb-4 text-left" htmlFor="calle">Calle</label>
                    <input className="outline-none bg-transparent border-primary border-b-2 w-72" type="text" id="direccion" name="direccion" value={rest.direccion} onChange={handleChange} />
                </article>

                <section className="flex justify-between gap-1 m-auto">
                    <article className="w-1/3 flex flex-col">
                        <label className="text-sm text-gray-400 font-semibold mb-4 text-left" htmlFor="num">Num.</label>
                        <input className="outline-none bg-transparent border-primary border-b-2 w-20" type="number" id="numero" name="numero" value={rest.numero} onChange={handleChange} />
                    </article>
                    <article className="w-2/3 flex flex-col">
                        <label className="text-sm text-gray-400 font-semibold mb-4 text-left" htmlFor="cp">Codigo Postal</label>
                        <input className="outline-none bg-transparent border-primary border-b-2 w-46" type="number" max={5} id="cp" name="cp" value={rest.cp} onChange={handleChange} />
                    </article>
                </section>
            </section>
        </div>
    )
}
