import { SendHorizonal } from "lucide-react";

export default function Faq() {
    return (
        <section className="w-full py-[50px] lg:py-[150px] bg-white flex items-center justify-center flex-col">
            <h1 className="rubik-bold text-[#2F327D] text-[1.2rem] sm:text-[2rem]">Como podemos ajudar?</h1>
            <p className="max-w-[600px] rubik-regular text-slate-600 mt-2 text-center mx-4 text-[0.8rem] sm:text-[1rem]">Tem alguma dúvida ou precisa de assistência? Entre em contato conosco e ficaremos felizes em ajudar.</p>
            <form className="w-full sm:w-max px-4 sm:px-0 mt-[50px]">
                <div className="w-full sm:w-max flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input placeholder="Nome*" className="w-full sm:w-[300px] rubik-regular px-[20px] h-[55px] bg-slate-100 rounded-[12px] placeholder:text-slate-400 text-slate-800 outline-none border-none text-[0.8rem] sm:text-[1rem]" type="text" name="nome" id="nome" required />
                    <input placeholder="Email*" className="w-full sm:w-[300px] rubik-regular px-[20px] h-[55px] bg-slate-100 rounded-[12px] placeholder:text-slate-400 text-slate-800 outline-none border-none text-[0.8rem] sm:text-[1rem]" type="email" name="email" id="email" required />
                </div>
                <textarea className="w-full h-[300px] rounded-[12px] bg-slate-100 rubik-regular mt-3 px-[20px] py-[20px] placeholder:text-slate-400 text-slate-600 outline-none border-none text-[0.8rem] sm:text-[1rem]" placeholder="Mensagem*" name="mensagem" id="mensagem" required></textarea>
                <div className="mt-3 w-full flex items-center justify-end">
                    <button type="submit" className="h-[49px] w-full sm:w-max px-8 flex items-center justify-center gap-2 bg-slate-800 text-white rounded-[12px] rubik-regular hover:bg-slate-700 transition-colors text-[0.8rem] sm:text-[1rem]">Enviar <SendHorizonal strokeWidth={1.7} size={18}/></button>
                </div>
            </form>
        </section>
    )
}