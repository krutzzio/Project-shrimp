import { Link } from 'react-router-dom'
import { tiposAlergias } from '../../utils/tiposAlergias';
import { Chip } from '@nextui-org/react';
import CheckboxGroupTest, { CustomCheckboxTest } from '../CreateProfile/Radio/Checkbox';


export default function TiposAlergias() {

    return (
        <section className="m-auto flex flex-wrap gap-1 items-center">
                {
                    tiposAlergias.map(alergia => {
                        return (
                            <Chip value={alergia} variant='bordered' color='primary' className=''>
                                <div className='flex items-center gap-1'>
                                    <img className='h-5' src={`./iconosAlergias/${alergia}.svg`} />
                                    <span className="text-md">
                                        {alergia}
                                    </span>
                                </div>
                            </Chip>
                        )
                    })
                }
        </section>
    )
}