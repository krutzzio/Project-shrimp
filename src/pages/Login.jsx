import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import logoGamba from '../assets/logo/logoGamba_logoBlanco.svg'
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'
import LogForm from '../components/forms/LogForm'

export default function Login() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative flex flex-col items-center justify-between text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <header className='pt-6 flex justify-center'>
                <img
                    className="w-44"
                    src={logoGamba}
                    alt='Gamba Logo' />
            </header>

            <main className='w-9/12 flex flex-col gap-10 items-center justify-center'>
                <section className=''>
                    <h3 className='text-center mb-1'>¿Quién eres?</h3>
                    <SwitchUser />
                </section>
                <section className='w-full'>
                    <LogForm userType={userType} />
                </section>
            </main>

            <footer className='mb-12 flex items-end justify-center z-10 relative'>
                <h1 className='text-black font-medium'>¿Nuevo en Gamba? <NavLink to={"/register"} className='text-primary font-semibold'>Regístrate</NavLink></h1>
            </footer>

            <article className={`absolute z-0 top-[-17rem] left-[-17rem] rotate-[50deg]`}>
                <img src={shape1} className='max-w-[30rem] w-[50rem]' alt="" />
            </article>

            <article className={`absolute z-0  ${userType ? `rotate-[46deg] bottom-[-30rem] left-[-10rem]` : `rotate-[-43deg] bottom-[-30rem] left-[-12rem]`} transition-all`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>
        </div >
    )
}
