"use client"
export default function NossaEspecializacaoViewer() {
    return (
        <>
           <section className="w-full bg-white pb-[100px] lg:pb-[200px] px-[20px] lg:px-[40px] lg:px-[100px] gap-[50px] flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/3 flex lg:block flex-col items-center justify-center">
                    <h1 className="rubik-bold text-[#2F327D] text-[1.2rem] lg:text-[2rem] text-center lg:text-left mt-[40px] lg:mt-0">Fornecendo produtos à mais de 5 anos</h1>
                    <p className="rubik-regular  text-center lg:text-left text-slate-600 text-[0.8rem] lg:text-[1rem] mt-2 max-w-[700px]">
                        Nossa especialização em procurement e logística oferece soluções abrangentes para otimizar a cadeia de suprimentos de sua empresa. Combinamos expertise local com práticas globais para garantir eficiência, redução de custos e entrega pontual de produtos e serviços.
                    </p>
                </div>
                <div className="w-full lg:w-2/3 bg-slate-100 h-[600px] rounded-[20px]">

                </div>

            </section>
        </>
    )
}