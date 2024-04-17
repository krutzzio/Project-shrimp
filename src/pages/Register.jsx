
import { useContext } from 'react'
import logo from '../assets/logo.svg'
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import { Image } from "@nextui-org/react"
import { ThemeContext } from '../contexts/ThemeContext'
import RegisterRestaurantForm from '../components/forms/Register/RegisterRestaurant'
import { NavLink } from 'react-router-dom'
import RegisterClientForm from '../components/forms/Register/RegisterClient'

export default function Register() {

    const { userType } = useContext(ThemeContext)

    return (
        <div className={`h-full flex flex-col justify-between items-center overflow-auto relative text-white ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <header className='flex pt-8 pb-10 items-center'>
                <Image
                    width={40}
                    src={logo}
                    alt='Gamba Logo' />
                <h1 className='h-fit tracking-wide text-4xl font-semibold'>Gamba</h1>
            </header>
            <main className='w-10/12 flex flex-col gap-10 items-center justify-start'>
                <section className='text-center'>
                    <h3 className=' text-primary-foreground font-bold text-4xl mb-1'>Únete a Gamba</h3>
                    {
                        userType
                            ? <p className='leading-5'>Comparte tus recetas con tus <br />
                                actuales y futuros clientes.</p>
                            : <p className='leading-5'>Cocina las recetas de tus restaurantes
                                favoritos en un mismo lugar. Comparte
                                tus recetas y consigue descuentos.</p>
                    }
                </section>
                <section className='w-full'>
                    {
                        userType
                            ? <RegisterRestaurantForm />
                            : <RegisterClientForm />
                    }
                </section>
            </main>

            <footer className='h-[20dvh] w-full pt-20 flex items-center justify-center z-10 relative overflow-hidden'>
                <h1 className='text-black relative z-10 font-medium'>¿Ya estas registrado? <NavLink to={"/login"} className='text-primary font-semibold'>Entra</NavLink></h1>
                <article className={`absolute z-0 bottom-[-35rem] left-[-10rem] ${userType ? `rotate-[46deg]` : `rotate-[-43deg]`} transition-all`}>
                    <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
                </article>
            </footer>
            <article className={`absolute z-0 top-[-14rem] left-[-17rem] rotate-[20deg]`}>
                <img src={shape1} className='max-w-[30rem] w-[30rem]' alt="" />
            </article>




        </div >
    )
}
