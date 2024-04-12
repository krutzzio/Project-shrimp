import { useContext } from 'react'
import logo from '../assets/logo.svg'
import wave from '../assets/wave-haikei.svg'
import { Image } from "@nextui-org/react"
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Login() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <main className='py-8 h-[90dvh] z-10 flex flex-col justify-start items-center'>
                <header className='flex items-center'>
                    <Image
                        width={75}
                        src={logo}
                        alt='Gamba Logo' />
                    <h1 className='text-white text-6xl font-semibold'>Gamba</h1>
                </header>
                <main className=''>
                    <SwitchUser />
                </main>
            </main>
            <footer className='h-[10dvh] flex items-center justify-center z-10 relative'>
                <h1 className='text-primary font-semibold'>Registrarme</h1>
            </footer>

            <article className={`absolute z-0 -bottom-[33.5rem] -left-[12rem] ${userType ? `rotate-[35deg]` : `rotate-[-35deg]`} transition-all`}>
                <img src={wave} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>


        </div >
    )
}
