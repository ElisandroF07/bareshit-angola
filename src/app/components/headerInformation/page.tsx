import { LocateIcon, Mail, Phone } from "lucide-react";

export default function HeaderInformation() {
    return (
        <div className="flex items-start justify-center pl-[20%] pb-[100px] flex-col flex-grow">
            <p className="rubik-regular">A MELHOR COPANHIA PARA SÍ</p>
            <h1 className="rubik-bold text-[3.5rem] text-white w-[60%]">Agilize seu transporte com nossos serviços de carga</h1>
            <p className="rubik-regular w-[30%]">
                Simplifique seu processo de envio e torne-o mais eficiente com nossos serviços de carga. Do início ao fim, cuidaremos de tudo para garantir que sua carga chegue com segurança.
            </p>
            <div className="flex items-center justify-center mt-4">
                <input type="text" className="w-[350px] h-[60px] outline-none bg-[#00000055] rounded-tl-[8px] rounded-bl-[8px] px-4" style={{ backdropFilter: "blur(1px)" }} placeholder="Insira o seu e-mail" />
                <button type="button" className="bg-white px-10 h-[60px] rounded-tr-[8px] rounded-br-[8px] text-zinc-600">
                    Entrar em contacto
                </button>
            </div>
            <div className="mt-6 opacity-60 flex flex-col items-start gap-2 justify-start">
                <p className="rubik-regular flex items-center justify-start gap-2"> <LocateIcon size={18}/> Av. Pedro de Castro, Rua 11, Casa 313</p>
                <p className="rubik-regular flex items-center justify-start gap-2"> <Phone size={18}/> (+244) 222 203 811</p>
                <p className="rubik-regular flex items-center justify-start gap-2"> <Mail size={18}/> comercial@bereshit-angola.com</p>
            </div>
        </div>
    )
}