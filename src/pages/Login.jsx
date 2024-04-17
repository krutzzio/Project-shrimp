import { useContext } from 'react'
<<<<<<< HEAD
import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
=======

import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
>>>>>>> 0ae18c41fb7c9306e64f4940a2ed2b8e159cac00
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'
import LogForm from '../components/forms/LogForm'

export default function Login() {

    const { userType } = useContext(ThemeContext)


    return (
<<<<<<< HEAD
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
=======

        <div className={`overflow-hidden flex flex-col items-center justify-between relative text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <header className='flex pt-8 items-center'>
                <Image
                    width={40}
                    src={logo}
                    alt='Gamba Logo' />
                <h1 className='h-fit tracking-wide text-4xl font-semibold'>Gamba</h1>
            </header>

            <main className='w-9/12 h-3/6 flex flex-col gap-10 items-center justify-start'>
                <section className='flex flex-col items-center gap-2'>
                    <h3 className=''>¿Quién eres?</h3>
                    <SwitchUser />
                </section>
                <section className='w-full'>
                    <LogForm userType={userType} />
                </section>
>>>>>>> 0ae18c41fb7c9306e64f4940a2ed2b8e159cac00
            </main>
            <footer className='mb-12 flex items-end justify-center z-10 relative'>
                <h1 className='text-black font-medium'>¿Nuevo en Gamba? <NavLink to={"/register"} className='text-primary font-semibold'>Regístrate</NavLink></h1>
            </footer>

            <article className={`absolute z-0 top-[-14rem] left-[-17rem] rotate-[20deg]`}>
                <img src={shape1} className='max-w-[30rem] w-[50rem]' alt="" />
            </article>

            <article className={`absolute z-0  ${userType ? `rotate-[46deg] bottom-[-30rem] left-[-10rem]` : `rotate-[-43deg] bottom-[-30rem] left-[-12rem]`} transition-all`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>
        </div >
    )
}
