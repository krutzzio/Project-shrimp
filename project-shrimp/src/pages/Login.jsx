import { useContext } from 'react'
import logo from '../assets/logo.svg'
import wave from '../assets/wave-haikei.svg'
import { Image } from "@nextui-org/react"
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'
import LogForm from '../components/forms/LogForm'

export default function Login() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <main className='h-[90dvh] relative z-10 flex flex-col justify-start items-center'>
                <header className='flex py-8 items-center'>
                    <Image
                        width={75}
                        src={logo}
                        alt='Gamba Logo' />
                    <h1 className=' text-6xl font-semibold'>Gamba</h1>
                </header>
                <main className='w-8/12 flex flex-col gap-10 items-center justify-start'>
                    <section className=''>
                        <h3 className='text-center mb-1'>¿Quién eres?</h3>
                        <SwitchUser />
                    </section>
                    <section className='w-full'>
                        <LogForm userType={userType} />
                    </section>
                </main>
            </main>
            <footer className='h-[10dvh] flex items-center justify-center z-10 relative'>
                <h1 className='text-primary font-semibold'>Registrarme</h1>
            </footer>

            <article className={`absolute z-0  ${userType ? `rotate-[46deg] -bottom-[34.5rem] -left-[12rem]` : `rotate-[-43deg] -bottom-[33.8rem] -left-[12rem]`} transition-all`}>
                <img src={wave} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>


        </div >
    )
}
