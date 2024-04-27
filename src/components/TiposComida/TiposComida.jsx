import { Link } from 'react-router-dom'
import { tiposComidas } from '../../utils/tiposComidas';


export default function TiposComida() {

    return (
        <section className='px-2 flex gap-4 md:gap-8 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
            {
                tiposComidas.map(comida => {
                    return (
                        <Link key={comida} className='w-16 flex flex-col items-center justify-center'>
                            <img className='min-w-16' src={`./iconosComida/${comida}.svg`} />
                            <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                                {comida}
                            </span>
                        </Link>
                    )
                })
            }
        </section>
    )
}
