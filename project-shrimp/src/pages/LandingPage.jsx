import { useContext } from 'react'
import logo from '../assets/logo.svg'
import shape1 from '../assets/shapes/shape1.svg'
import shape2 from '../assets/shapes/shape2.svg'
import landing1 from "../assets/illustrations/landing1.svg"
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react"
import SwitchUser from '../components/SwitchUser'
import { ThemeContext } from '../contexts/ThemeContext'
import LogForm from '../components/forms/LogForm'
import { Link } from 'react-router-dom'

export default function LandingPage() {

    const { userType } = useContext(ThemeContext)


    return (
        <div className={`overflow-hidden relative text-white h-full ${userType ? `restaurant-theme` : `client-theme`} bg-primary transition-colors`}>
            <main className='h-[90dvh] relative z-10 flex flex-col justify-start items-right'>
                <header className='flex p-10 items-center justify-between '>
                    <article className='flex items-center'>
                        <Image className='mb-2'
                            width={35}
                            src={logo}
                            alt='Gamba Logo' />
                        <h1 className='h-fit tracking-wide text-6xl font-jomhuria'>Gamba</h1>
                    </article>

                    <Button color="primary" className='shadow-xl content-end font-bold'><Link to={"/login"}>
                        Log in
                    </Link></Button>
                </header>
                <main className='items-center justify-start '>
                    <img src={landing1} className='max-w-6xl' alt="landing1" />
                    <div className='m-auto w-fit'>
                        <h1 className='text-center b-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>Encuentra tus<br /> mejores recetas</h1>
                        <Button className="my-6 px-28 py-7 text-xl bg-black text-white font-semibold shadow-xl"><Link to={"/register"}>
                            Regístrate
                        </Link></Button>
                    </div>

                </main>
            </main>
            <article className={`absolute z-0 -top-[14rem] rotate-[100deg] right-[-10rem]`}>
                <img src={shape1} className='max-w-[30rem] w-[50rem]' alt="" />
            </article>

            <article className={`absolute z-0 rotate-[-20deg] -bottom-[28rem]`}>
                <img src={shape2} className='max-w-[50rem] w-[50rem]' alt="" />
            </article>


        </div >
    )
}