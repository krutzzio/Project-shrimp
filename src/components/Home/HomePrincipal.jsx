import { Link } from 'react-router-dom'
import { CardReceta } from "./Cards/CardReceta";

export default function HomePrincipal() {

    return (
        <div className="flex flex-col mt-4 gap-4">
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold">Te puede gustar</h1>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold">Te puede gustar</h1>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold">Te puede gustar</h1>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                    </div>
                </div>
            </div>
        </div>
    )
}
