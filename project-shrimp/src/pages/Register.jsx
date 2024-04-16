import { useContext } from 'react'
import logo from '../assets/logo.svg'
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import { Image } from "@nextui-org/react"
import { ThemeContext } from '../contexts/ThemeContext'
import RegisterForm from '../components/forms/RegisterForm'

export default function Register() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <main className='h-[90dvh] relative z-10 flex flex-col justify-start items-center'>
                <header className='flex pt-8 pb-10 items-center'>
                    <Image
                        width={40}
                        src={logo}
                        alt='Gamba Logo' />
                    <h1 className='h-fit tracking-wide text-4xl font-semibold'>Gamba</h1>
                </header>
                <main className='w-9/12 flex flex-col gap-10 items-center justify-start'>
                    <section className='text-center'>
                        <h3 className=' text-primary-foreground font-bold text-4xl mb-1'>Únete a Gamba</h3>
                        <p>Cocina las recetas de tus restaurantes
                            favoritos en un mismo lugar. Comparte
                            tus recetas y consigue descuentos.</p>
                    </section>
                    <section className='w-full'>
                        <RegisterForm userType={userType} />
                    </section>
                </main>
            </main>
            <footer className='h-[10dvh] pb-4 flex items-end justify-center z-10 relative'>
                <h1 className='text-black font-medium'>¿Ya estas registrado? <span className='text-primary font-semibold'>Entra</span></h1>
            </footer>
            <article className={`absolute z-0 -top-[16rem] -left-[20rem] rotate-[12deg] `}>
                <img src={shape1} className='max-w-[30rem] w-[30rem]' alt="" />
            </article>

            <article className={`absolute z-0  ${userType ? `rotate-[46deg] -bottom-[34.5rem] -left-[12rem]` : `rotate-[-43deg] -bottom-[33.8rem] -left-[12rem]`} transition-all`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>


        </div >
    )
}
