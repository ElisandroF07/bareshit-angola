import ceo from '@/app/assets/images/ceo.png'
import { Quote } from "lucide-react";
import Image from 'next/image'

export default function PresidentMessage() {
    return (
        <section className="flex bg-white items-center justify-center pt-[100px] w-full gap-[200px]">
            <div className="w-max flex flex-col items-start justify-start bg-[rgba(47, 50, 125, 0.03)] h-[600px] rounded-tl-[20px] rounded-br-[20px]">
                <h1 className="rubik-bold text-[#2F327D] text-[2rem] flex items-start jsutify-center gap-2"><span className="text-[#F48C06]">Adjely Serafim</span> <Quote color="#F48C06" /></h1>
                <h1 className="rubik-bold text-[#2F327D] text-[2rem]">Presidente do Conselho Executivo</h1>
                <p className="rubik-regular text-zinc-500 sm:max-w-[600px] mt-5 text-justify">
                    A nossa crença é a de uma Bereshit-Angola na linha da frente no fornecimento de materiais subsaliente no sector de petróleo e gás, com os melhores quadros e equipamentos de última geração, totalmente informatizada, digital e integrada de forma transparente e eficiente. Sempre com o propósito de melhorar as operações, e disponibilizar o melhor retorno aos nossos clientes e accionistas. <br /> <br />
                    Queremos ser “ator principal” no processo de transformação que todos vão experienciar, e o catalisador da transformação das empresas para esta nova realidade, assegurando assim a maximização das oportunidades que esta revolução trará para Angola, e os angolanos. <br /> <br />
                    É nossa convicção que neste mundo em mudança acelerada, apenas empresas socialmente responsáveis e que contribuam ativamente para criar uma sociedade melhor para as gerações futuras, serão sustentáveis no longo prazo. Assumimos o nosso compromisso em sermos um exemplo de inclusão e diversidade, adotando também um papel ativo na protecção do meio ambiente e na redução das emissões de carbono. Continuamos comprometidos com os princípios do Global Compact e empenhados em contribuir para a concretização dos Objetivos de Desenvolvimento Sustentável das Nações Unidas.
                </p>
            </div>
            <div className="w-[400px]">
                <Image src={ceo} alt="ceo" className="w-full" />
            </div>
        </section>
    )
}