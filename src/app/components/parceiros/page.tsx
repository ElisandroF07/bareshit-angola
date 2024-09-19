import cls from "@/app/assets/images/cls.png"
import iftx from "@/app/assets/images/iftx.png"
import tecmo from "@/app/assets/images/tecmo.png"
import wikai from "@/app/assets/images/wikai.png"
import Image from 'next/image'

export default function ParceirosComponent() {
    return (
        <section className="border-t-1 border-b-1 border-solid py-[50px] lg:py-0 lg:h-[250px] bg-white">
            <div className="w-full flex items-center justify-center flex-col h-full">
                <h1 className="rubik-bold text-[#2F327D] text-[1.2rem] lg:text-[2rem]">Nossos parceiros</h1>
                <ul className="flex flex-row flex-wrap items-center justify-center gap-[80px] lg:gap-[100px] mt-[60px]">
                    <li>
                        <Image src={cls} alt="parceiro" className="w-[200px]" />
                    </li>
                    <li>
                        <Image src={iftx} alt="parceiro" className="w-[80px]" />
                    </li>
                    <li>
                        <Image src={tecmo} alt="parceiro" className="w-[100px]" />
                    </li>
                    <li>
                        <Image src={wikai} alt="parceiro" className="w-[100px]" />
                    </li>
                </ul>
            </div>
        </section>
    )
}