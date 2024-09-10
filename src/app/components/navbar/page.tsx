import logo from "@/app/assets/images/bareshit-logo.png"
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
        <nav className="w-full h-[70px] pt-[20px] flex items-center justify-between px-[100px]">
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
    )
}