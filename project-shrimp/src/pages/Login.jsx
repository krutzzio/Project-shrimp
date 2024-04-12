import { useState } from 'react'
import logo from '../assets/logo.svg'
import wave from '../assets/wave-haikei.svg'
import { Image } from "@nextui-org/react"
import SwitchUser from '../components/SwitchUser'

export default function Login() {

    const [userType, setUserType] = useState(false)


    return (
        <div className={`overflow-hidden relative h-full ${userType ? `bg-[#9d74c6]` : `bg-[#a7c674]`} transition-colors`}>
            <main className='py-8 h-[90dvh] z-10 flex flex-col justify-start items-center'>
                <header className='flex items-center'>
                    <Image
                        width={75}
                        src={logo}
                        alt='Gamba Logo' />
                    <h1 className='text-white text-6xl font-semibold'>Gamba</h1>
                </header>
                <main className=''>
                    <SwitchUser userType={userType} setUserType={setUserType} />
                </main>
            </main>
            <footer className='h-[10dvh] flex items-center justify-center z-10 relative'>
                <h1>Registrarme</h1>
            </footer>

            {/*  <article className={`absolute z-0 -bottom-[42%] rotate-[35deg] hover:rotate-[-35deg] hover:-bottom-[21rem] transition-all`}>
                <img src={wave} className='w-[50rem] scale-[2.5] ' alt="" />
            </article>  */}

            <article className={`absolute z-0 bottom-0 left-0 transform translate-y-[22rem] -translate-x- ${userType ? `rotate-[35deg]` : `rotate-[-35deg]`} transition-all`}>
                <img src={wave} className='w-[50rem] scale-[2.5]' alt="" />
            </article>


        </div >
    )
}
