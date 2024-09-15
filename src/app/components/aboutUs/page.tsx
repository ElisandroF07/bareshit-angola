export default function AboutUs () {
    return (
        <section className="w-full h-max bg-white py-[200px] flex items-center justify-center">

            <div  className="flex items-center justify-center pr-[200px] relative">
                <div className="aboutUsbg w-[1000px] h-[650px] rounded-lg"></div>
                <div className="w-[450px] h-[500px] absolute bg-blue-800 right-[-70px] px-[30px] py-[30px] rounded-lg">
                    <h1 className="text-[2rem] font-[600] rubik-bold">Sobre nós</h1>
                    <p className="text-[1rem] mt-3 text-justify font-[200] opacity-70 rubik-regular">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illum odit adipisci iusto doloremque voluptas ipsum molestias iure id exercitationem. Assumenda dignissimos quis aliquam ipsum voluptatem amet nesciunt, quasi cum?
                        <br /> <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illum odit adipisci iusto doloremque voluptas ipsum molestias iure id exercitationem. Assumenda dignissimos quis aliquam ipsum voluptatem amet nesciunt, quasi cum?
                    </p>
                    <button className="bg-white font-semibold px-4 py-2.5 rubik-bold rounded-md shadow text-blue-800 mt-14">Fale connosco</button>
                </div>
            </div>

        </section>
    )
}