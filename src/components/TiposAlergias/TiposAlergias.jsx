/* eslint-disable react/prop-types */
import { Chip } from '@nextui-org/react';

export default function TiposAlergias({ alergiasChips }) {
    return (
        <section className="flex flex-wrap gap-1 items-center">
            {
                alergiasChips.map(alergia => {
                    return (
                        <Chip key={alergia.id} value={alergia.nombre_grupo} variant='bordered' color='primary' className=''>
                            <div className='flex items-center gap-1'>
                                <img className='h-5' src={`../iconosAlergias/${alergia.nombre_grupo}.svg`} />
                                <span className="text-md">
                                    {alergia.nombre_grupo}
                                </span>
                            </div>
                        </Chip>
                    )
                })
            }
        </section>
    )
}