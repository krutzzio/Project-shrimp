
import { useContext } from 'react'
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import logoGamba from '../assets/logo/logoGamba_logoBlanco.svg'
import { ThemeContext } from '../contexts/ThemeContext'
import RegisterRestaurantForm from '../components/forms/Register/RegisterRestaurant'
import { NavLink } from 'react-router-dom'
import RegisterClientForm from '../components/forms/Register/RegisterClient'

export default function Register() {

    const { userType } = useContext(ThemeContext)

    return (
        <div className={`h-full flex flex-col justify-between items-center overflow-hidden relative text-white ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <header className='pt-10 flex justify-center'>
                <img
                    className="w-44"
                    src={logoGamba}
                    alt='Gamba Logo' />
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
                <section className='w-full relative z-10'>
                    {
                        userType
                            ? <RegisterRestaurantForm />
                            : <RegisterClientForm />
                    }
                </section>
            </main>
            <footer className='mb-6 w-full flex items-end justify-center  overflow-hidden'>
                <h1 className='text-black z-10 relative font-medium'>¿Ya estas registrado? <NavLink to={"/login"} className='text-primary font-semibold'>Entra</NavLink></h1>
            </footer>
            <article className={`absolute z-0 top-[-19rem] left-[-15rem] rotate-[50deg]`}>
                <img src={shape1} className='max-w-[30rem] w-[50rem]' alt="" />
            </article>
            <article className={`absolute z-0  ${userType ? `bottom-[-33rem] left-[-10rem] rotate-[66deg]` : `bottom-[-33.5rem] left-[-10rem] rotate-[-53deg]`} transition-all`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>
        </div >
    )
}