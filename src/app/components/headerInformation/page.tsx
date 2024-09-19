import { Facebook, Instagram, Linkedin, LocateIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function HeaderInformation() {
    return (
        <div className="w-full flex items-center lg:items-start justify-center pl-[0px] lg:pl-[20%] pb-[100px] pt-[10px] lg:pt-[100px] flex-col flex-grow">
            {/* <p className="rubik-regular">A MELHOR COMPANHIA PARA SI</p> */}
            <h1 className="hidden lg:flex rubik-bold text-[2.5rem] lg:text-[3.5rem] text-white w-full text-center lg:text-left lg:w-[70%]">Soluções Integradas <br /> para o Seu Negócio</h1>
            <h1 className="lg:hidden rubik-bold text-[2.5rem] lg:text-[3.5rem] text-white w-full text-center lg:text-left lg:w-[70%]">Soluções Integradas para o Seu Negócio</h1>
            <p className="hidden lg:flex rubik-regular text-wjite w-[70%] lg:w-[40%] text-center lg:text-left">
            Oferecemos serviços de alta qualidade em logística, segurança e suporte empresarial. Nossa abordagem inovadora e compromisso com a excelência nos destacam no mercado angolano.
            </p>
            <p className="lg:hidden text-white rubik-regular text-wjite w-[70%] lg:w-[40%] text-center lg:text-left">
            Oferecemos serviços de alta qualidade em logística, segurança e suporte empresarial.
            </p>
            
            <button className="bg-white rubik-bold text-[1.2rem] text-slate-800 py-2 px-4 rounded-md shadow mt-6 lg:mt-3">Fale connosco</button>
            <div className=" mt-8 lg:mt-6 opacity-60 flex flex-col items-start gap-2 justify-start">
                <p className="rubik-regular text-white flex items-center justify-center lg:justify-start gap-2 w-full lg:w-max"> <LocateIcon size={18}/> Av. Pedro de Castro, Rua 11, Casa 313</p>
                <p className="rubik-regular text-white flex items-center justify-center lg:justify-start gap-2 w-full lg:w-max"> <Phone size={18}/> (+244) 222 203 811</p>
                <p className="rubik-regular text-white flex items-center justify-center lg:justify-start gap-2 w-full lg:w-max"> <Mail size={18}/> comercial@bereshit-angola.com</p>
                <div className="flex items-center mt-2 justify-center lg:justify-start gap-4 w-full lg:w-max">
                    <Link href={'/'}>
                        <Instagram color="#ffffff" size={24}/>
                    </Link>
                    <Link href={'/'}>
                        <Facebook color="#ffffff" size={24}/>
                    </Link>
                    <Link href={'/'}>
                        <Linkedin color="#ffffff" size={24}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}