
export function UbicationClientForm() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium">Añade tu Codigo Postal</h1>
            <section className="w-8/12 flex flex-col justify-start">
                <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="cp">Codigo Postal</label>
                <input className="border-primary border-b-2 " type="number" id="cp" name="cp" />
            </section>
        </div>
    )
}

export function UbicationRestaurantForm() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-400 font-medium">Dirección de tu local</h1>
            <section className="w-8/12 flex flex-col gap-4">
                <article className="flex flex-col justify-start">
                    <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="calle">Calle</label>
                    <input className="border-primary border-b-2 " type="text" id="calle" name="calle" />
                </article>

                <section className="flex justify-between">
                    <article className="w-[35%] flex flex-col justify-start">
                        <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="num">Num.</label>
                        <input className=" border-primary border-b-2" type="number" id="num" name="num" />
                    </article>

                    <article className="w-[55%] flex flex-col justify-start">
                        <label className="w-fit text-xs text-gray-400 font-medium" htmlFor="cp">Codigo Postal</label>
                        <input className="border-primary border-b-2 " type="number" id="cp" name="cp" />
                    </article>
                </section>
            </section>
        </div>
    )
}
