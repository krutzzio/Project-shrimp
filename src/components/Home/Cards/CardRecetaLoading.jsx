import { Skeleton } from '@nextui-org/react'

export default function CardRecetaLoading() {
    return (
        <div className="max-w-md min-w-60 items-center flex flex-col gap-1 mt-2">
            {/*Imagen*/}

            <Skeleton className='rounded-xl'>
                <img
                    className="rounded-xl w-60 md:min-w-60 h-36 object-cover"
                    src=""
                    alt=""
                />
            </Skeleton>
            <div className=" flex gap-1 w-full mx-2 mb-4 leading-4">
                <Skeleton className='rounded-xl h-4 w-2/6'>
                    <h2 className="text-xl font-bold w-full rounded-xl">test</h2>
                </Skeleton>
                <Skeleton className='rounded-xl h-4 w-2/6'>
                    <p className="text-gray-500 text-md w-full">text</p>
                </Skeleton>
                <Skeleton className='rounded-xl h-4 w-2/6'>
                    <p className="text-gray-500 text-md w-full">text</p>
                </Skeleton>
            </div>
            {/*Texto*/}
            <div className=" flex flex-col gap-1 w-full mx-2 mb-4 leading-4">
                <Skeleton className='rounded-xl h-4 w-4/5'>
                    <h2 className="text-xl font-bold w-full rounded-xl">test</h2>
                </Skeleton>
                <Skeleton className='rounded-xl h-4 w-3/5'>
                    <p className="text-gray-500 text-md w-full">text</p>
                </Skeleton>
            </div>
        </div>
    )
}
