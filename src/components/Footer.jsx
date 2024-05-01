import { useRef } from "react";
import logo from "../assets/logo/logoGamba_logoBlanco.svg"
import { Input, Textarea } from "@nextui-org/react";
import emailjs from '@emailjs/browser';

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_233htbq', 'template_ajljd8r', form.current, '1dvkLiuuRKmg8BjDw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <footer className="bg-primary text-white mt-10 pt-6 md:pb-2">
            {/*Logo + Formulario*/}
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 justify-between md:flex-row">
                <img src={logo} className="h-10 md:h-20" />
                <div className="px-2 md:w-1/2 flex flex-col gap-4">
                    <div className=''>
                        <p className='text-center md:text-left'>¡Contacta con nosotros! En Gamba somos como una familia y siempre nos ayudamos, así que si tienes cualquier duda pegúntanos y estaremos encantados de ayudarte.</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>
                        <Input type="text" variant="flat" label="Nombre" name="user_name" />
                        <Input type="email" variant="flat" label="Correo" name="user_email"/>
                        <Textarea label="Mensaje" variant="flat" name="message"/>
                        
                        <input type="submit" value="Send" className="bg-[#272D2F] hover:bg-black rounded-lg  shadow-lg font-semibold h-12 md:w-48 text-[#FAFAFA] text-lg" />
                    </form>
                </div>
            </div>
            {/*Copyright + Enlaces*/}
            <div className='max-w-screen-2xl mx-auto gap-2 md:gap-0 flex flex-col md:flex-row justify-between py-4 px-2 md:p-0 md:mt-6'>
                <div className="hidden md:block flex items-center text-sm">
                    <p className='m-0 p-0'>© 2024 Gamba. Todos los derechos reservados.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
                    <a className="inline-block" href="" target="_blank" rel="noopener noreferrer">Politica de privacidad</a>
                    <a className="inline-block" href="" target="_blank" rel="noopener noreferrer">Términos de servicio</a>
                    <a className="inline-block" href="" target="_blank" rel="noopener noreferrer">Política de cookies</a>
                </div>
                <div className="flex items-center text-sm md:hidden justify-center">
                    <p className='m-0 p-0'>© 2024 Gamba. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}