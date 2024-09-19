export default function AboutUs() {
    return (
        <section className="w-full h-max bg-white py-[50px] lg:py-[200px] flex items-center justify-center">

            <div className="flex items-center justify-center relative w-full">
                <div className="aboutUsbg w-[90%] lg:w-[60%] lg:translate-x-[-150px] translate-x-[0px] h-[560px] lg:h-[650px] rounded-lg mx-auto relative">
                <div className="w-full lg:w-[300px] lg:w-[450px] h-max lg:h-[460px] lg:h-[500px] absolute bg-[#00000077] backdrop-blur-[5px] lg:bg-slate-600 lg:top-[70px] bottom-[0px] lg:-right-[300px] -right-[0px] px-[30px] py-[30px] rounded-lg">
                    <h1 className="text-[1.2rem] lg:text-[2rem] font-[600] rubik-bold text-white">Sobre nós</h1>
                    <p className="text-[1rem] mt-3 text-justify font-[200] opacity-70 rubik-regular text-[0.8rem] lg:text-[1rem] text-white">
                        A Bereshit Angola é uma empresa especializada em serviços de logística, segurança e suporte empresarial. Nossa missão é fornecer soluções integradas e eficientes para atender às necessidades diversificadas de nossos clientes. 
                        <br /> <br />
                    </p>
                    <p className="text-[1rem] mt-3 text-justify font-[200] opacity-70 rubik-regular text-[0.8rem] lg:text-[1rem] text-white">
                        Nosso compromisso com a excelência e inovação nos permite oferecer uma gama abrangente de serviços, desde soluções logísticas complexas até serviços de segurança de ponta e suporte empresarial personalizado. 
                    </p>
                    <button className="bg-white font-semibold px-4 py-2.5 rubik-bold rounded-md shadow text-slate-600 mt-4 lg:mt-14">Fale connosco</button>
                </div>
                </div>
                
            </div>

        </section>
    )
}