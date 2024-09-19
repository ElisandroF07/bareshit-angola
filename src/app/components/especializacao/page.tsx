"use client"

function NossaEspecializacao() {
    return (
        <>
            <section className="w-full bg-white pt-[50px] lg:pt-[200px] pb-[50px] lg:pb-[100px] px-[20px] lg:px-[100px] h-max">
                <h1 className="rubik-bold text-[#2F327D] w-full lg:w-max text-center lg:text-left text-[1.2rem] lg:text-[2rem]">Especialistas em Procurement e Logística</h1>
                <p className="rubik-regular text-slate-600 mt-2 max-w-[700px] w-full lg:w-max text-center lg:text-left text-[0.8rem] lg:text-[1rem]">
                    Nossa especialização em procurement e logística oferece soluções abrangentes para otimizar a cadeia de suprimentos de sua empresa. Combinamos expertise local com práticas globais para garantir eficiência, redução de custos e entrega pontual de produtos e serviços.
                </p>
                <div className="flex flex-col lg:flex-row mt-[60px] w-full h-max">
                    <div className="w-full lg:w-[500px] h-[300px] lg:h-[800px] rounded-[20px] relative overflow-hidden flex items-end justify-start pb-[20px] lg:pb-[40px] px-[20px] lg:px-[40px]">
                        <div className="absolute top-0 left-0 oil w-full lg:w-[500px] h-[300px] lg:h-[800px]" />
                        <div className='flex items-start justify-start gap-2'>
                            <p className='rubik-bold text-slate-100 z-10 text-[1.2rem] lg:text-[1.8rem]'>Fornecimento de <br /> Lubrificantes</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:flex-[1] h-[500px] lg:h-[800px] mt-5 lg:mt-0 gap-3 lg:gap-6 lg:ml-6">
                        <div className="flex flex-row items-center justify-center w-full h-1/2 lg:h-1/2 gap-3 lg:gap-6">
                            <div className="w-1/2 lg:w-2/3 h-full bg-zinc-100 rounded-[20px] relative overflow-hidden flex items-end justify-start pb-[20px] lg:pb-[40px] px-[20px] lg:px-[40px]">
                                <div className="absolute top-0 left-0 chemic w-full h-full"></div>
                                <div className='flex items-start justify-start gap-2'>
                                    <p className='rubik-bold text-slate-100 z-10 text-[1.2rem] lg:text-[1.8rem]'>Materiais químicos</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 h-full bg-zinc-100 rounded-[20px] relative overflow-hidden flex items-end justify-start">
                                <div className="chemic2 w-full h-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center w-full h-1/2 lg:h-1/2 gap-3 lg:gap-6">
                            <div className="w-2/3 lg:w-2/3 h-full bg-zinc-100 rounded-[20px] relative overflow-hidden flex items-end justify-start pb-[20px] lg:pb-[40px] px-[20px] lg:px-[40px]">
                                <div className="absolute top-0 left-0 epi w-full h-full"></div>
                                <div className='flex items-start justify-start gap-2'>
                                    <p className='rubik-bold text-slate-100 z-10 text-[1.2rem] lg:text-[1.8rem]'>Equipamentos de proteção <br /> individual</p>
                                </div>
                            </div>
                            <div className="w-1/3 lg:w-1/3 h-full bg-zinc-100 rounded-[20px] relative overflow-hidden flex items-end justify-start pb-[20px] lg:pb-[40px] px-[20px] lg:px-[40px]">
                                <div className="absolute top-0 left-0 epi w-full h-full"></div></div>

                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

function NossaEspecializacaoViewer() {
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

export { NossaEspecializacao, NossaEspecializacaoViewer}