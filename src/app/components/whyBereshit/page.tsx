import { Copy, Cpu, User } from "lucide-react"


export default function WhyBereshit() {

    const whyBsData = [
        {
            title: "Inovação",
            content: "Adotamos abordagens criativas e tecnologias avançadas para oferecer soluções eficientes e personalizadas.",
            icon: <Cpu color="#fff" className="w-[24px] lg:w-[30px]" />,
            bgIcon: "#5B72EE"
        },
        {
            title: "Transparência",
            content: "Mantemos uma comunicação clara e honesta com nossos clientes, parceiros e colaboradores.",
            icon: <Copy color="#fff" className="w-[24px] lg:w-[30px]" />,
            bgIcon: "#F48C06"
        },
        {
            title: "Proximidade",
            content: "Valorizamos o relacionamento próximo com nossos clientes, entendendo as suas necessidades. ",
            icon: <User color="#fff" className="w-[24px] lg:w-[30px]" />,
            bgIcon: "#29B9E7"
        },
    ]

    return (
        <section className="flex flex-col bg-white items-center justify-center pt-[100px] pb-[100px] w-full">
            <h1 className="rubik-bold text-[#2F327D] text-[1.2rem] lg:text-[2rem]">Por que escolher a <span className="text-[#F48C06]">Bereshit?</span></h1>
            <p className="rubik-regular text-center text-zinc-500 sm:max-w-[600px] mt-5 text-[0.8rem] lg:text-[1rem] mx-4">
            A Bereshit Angola é uma empresa líder em soluções integradas, oferecendo serviços de alta qualidade em logística, segurança e suporte empresarial. Nossa abordagem inovadora e compromisso com a excelência nos destacam no mercado angolano.
            </p>
            <div className="flex flex-wrap mx-4 items-center justify-center gap-[70px] mt-[100px]">
                {
                    whyBsData.map((item, _index) => (
                        <div key={_index} className="lg:w-[300px] w-[60%] h-[200px] lg:h-[280px] rounded-[20px] relative p-4 flex flex-col items-center justify-center" style={{ boxShadow: "0px 10px 60px 0px rgba(38, 45, 118, 0.08)" }}>
                            <div style={{ backgroundColor: item.bgIcon }} className="absolute top-[-30px] left-[43%] lg:left-[115px] rounded-full flex items-center justify-center  lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]">
                                {item.icon}
                            </div>
                            <h1 className="text-[#2F327D] text-[1rem] lg:text-[1.5rem] w-full text-center rubik-bold">{item.title}</h1>
                            <p className="rubik-light text-[0.8rem] lg:text-[1rem] text-zinc-500 sm:max-w-[600px] mt-5 text-center">
                                {item.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}