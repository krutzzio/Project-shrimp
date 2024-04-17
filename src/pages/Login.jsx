import { useContext } from 'react'
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'
import LogForm from '../components/forms/LogForm'

export default function Login() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <main className='h-[90dvh] relative z-10 flex flex-col justify-start items-center'>
                <header className='flex pt-16 pb-10 items-center'>
                    <img
                        className="w-40"
                        src={logoGamba}
                        alt='Gamba Logo' />
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
            <footer className='h-[10dvh] pb-4 flex items-end justify-center z-10 relative'>
                <h1 className='text-black font-medium'>¿Nuevo en Gamba? <span className='text-primary font-semibold'>Regístrate</span></h1>
            </footer>
            <article className={`absolute z-0 -top-[12rem] rotate-[40deg] right-[10rem]`}>
                <img src={shape1} className='max-w-[30rem] w-[50rem]' alt="" />
            </article>

            <article className={`absolute z-0  ${userType ? `rotate-[46deg] -bottom-[34.5rem] -left-[12rem]` : `rotate-[-43deg] -bottom-[33.8rem] -left-[12rem]`} transition-all`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>


        </div >
    )
}
