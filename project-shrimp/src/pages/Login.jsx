import logo from '../assets/logo.svg'
import wave from '../assets/wave-haikei.svg'
import { Image } from "@nextui-org/react"

export default function Login() {
    return (
        <div className='overflow-hidden relative h-full bg-[#a7c674]'>
            <main className='h-[90dvh] z-10 flex flex-col  '>
                <header className='flex items-center m-auto'>
                    <Image
                        width={75}
                        src={logo}
                        alt='Gamba Logo' />
                    <h1 className='text-white text-6xl font-semibold'>Gamba</h1>
                </header>
            </main>
            <footer className='h-[10dvh] w-fit z-10 relative m-auto'>
                <h1>Quiere registro?</h1>
            </footer>

            <article className='absolute z-0 -bottom-[21rem] rotate-[35deg] hover:rotate-[-35deg] hover:-bottom-[20rem] transition-all'>
                <img src={wave} className='w-[50rem] scale-[2.5] ' alt="" />
            </article>

        </div >
    )
}
