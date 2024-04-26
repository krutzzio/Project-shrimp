import { CardReceta } from "./Cards/CardReceta";

export default function HomePrincipal() {

    return (
        <div className="flex flex-col mt-6 md:mt-8 gap-4">
            <div className='flex flex-col'>
            <div className="flex items-end justify-between">
                <h1 className="text-2xl font-bold ml-2">Te puede gustar</h1>
                <p className='mr-2 text-primary font-bold'>Ver más</p>
            </div>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4 ml-2">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                          
                          
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
            <div className="flex items-end justify-between">
                <h1 className="text-2xl font-bold ml-2">Cerca de tu zona</h1>
                <p className='mr-2 text-primary font-bold'>Ver más</p>
            </div>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4 ml-2">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                           
                    </div>
                </div>
            </div>
            <div className='flex flex-col font-bold'>
            <div className="flex items-end justify-between">
                <h1 className="text-2xl font-bold ml-2">Las más populares</h1>
                <p className='mr-2 text-primary'>Ver más</p>
            </div>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4 ml-2">
                            <CardReceta />
                            <CardReceta />
                            <CardReceta />
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
