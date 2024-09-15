import { User } from "lucide-react"


export default function WhyBereshit() {

    const whyBsData = [
        {
            title: "Inovação",
            content: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts ",
            icon: <User color="#fff" size={30} />,
            bgIcon: "#5B72EE"
        },
        {
            title: "Inovação",
            content: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts ",
            icon: <User color="#fff" size={30} />,
            bgIcon: "#F48C06"
        },
        {
            title: "Inovação",
            content: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts ",
            icon: <User color="#fff" size={30} />,
            bgIcon: "#29B9E7"
        },
    ]

    return (
        <section className="flex flex-col bg-white items-center justify-center pt-[100px] pb-[100px] w-full">
            <h1 className="rubik-bold text-[#2F327D] text-[2rem]">Por que escolher a <span className="text-[#F48C06]">Bereshit?</span></h1>
            <p className="rubik-regular text-center text-zinc-500 sm:max-w-[600px] mt-5">
                Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
            <div className="flex items-center justify-center gap-[70px] mt-[100px]">
                {
                    whyBsData.map((item, _index) => (
                        <div key={_index} className="w-[300px] h-[280px] rounded-[20px] relative p-4 flex flex-col items-center justify-center" style={{ boxShadow: "0px 10px 60px 0px rgba(38, 45, 118, 0.08)" }}>
                            <div style={{ backgroundColor: item.bgIcon }} className="absolute top-[-30px] left-[115px] rounded-full flex items-center justify-center w-[70px] h-[70px]">
                                {item.icon}
                            </div>
                            <h1 className="text-[#2F327D] text-[1.5rem] w-full text-center rubik-bold">{item.title}</h1>
                            <p className="rubik-light text-zinc-500 sm:max-w-[600px] mt-5 text-center">
                                {item.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}