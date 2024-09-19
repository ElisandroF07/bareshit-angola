import logo from "@/app/assets/images/bareshit-logo.png"
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuData = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Sobre nós",
        href: "/"
    },
    {
        label: "Serviços",
        href: "/"
    },
    {
        label: "Contactos",
        href: "/"
    },
]

export default function NavbarComponent() {
    return (
        <><nav className="w-full h-[70px] pt-[20px] hidden md:flex items-center justify-between px-[20px] md:px-[50px] lg:px-[100px]" >
            <Image src={logo} alt="bereshit-angola-logo" className="w-[80px] h-[80px]" />
            <ul className="flex items-center justify-center gap-[10px]">
                {
                    menuData.map((item, _index) => (
                        <li key={_index} className="py-2 px-4 hover:text-white transition-colors duration-300 rubik-regular text-zinc-400">
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <nav className="w-full h-[70px] pt-[20px] flex md:hidden items-center justify-between px-[20px] md:px-[50px] lg:px-[100px]" >
            <Image src={logo} alt="bereshit-angola-logo bg-[#ffffff22] backdrop-blur-[40px]" className="w-[50px] h-[50px] mt-2" />
            <button>
                <Menu color="#fff" size={30}/>
            </button>
        </nav>
        </>
    )
}