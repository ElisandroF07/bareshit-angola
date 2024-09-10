/* eslint-disable react/jsx-no-undef */
import { Quote, User } from "lucide-react";
import NavbarComponent from "./components/navbar/page";
import ceo from '@/app/assets/images/ceo.png'
import Image from "next/image";
import cls from "@/app/assets/images/cls.png"
import iftx from "@/app/assets/images/iftx.png"
import tecmo from "@/app/assets/images/tecmo.png"
import wikai from "@/app/assets/images/wikai.png"

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

export default function Home() {
  return (
    <main>
      <header className="home-header w-full h-[960px] flex flex-col">
        <NavbarComponent />
        <div className="flex items-start justify-center pl-[20%] pb-[100px] flex-col flex-grow">
          <p className="rubik-regular">A MELHOR COPANHIA PARA SÍ</p>
          <h1 className="rubik-bold text-[3.5rem] text-white w-[60%]">Agilize seu transporte com nossos serviços de carga</h1>
          <p className="rubik-regular w-[30%]">
            Simplifique seu processo de envio e torne-o mais eficiente com nossos serviços de carga. Do início ao fim, cuidaremos de tudo para garantir que sua carga chegue com segurança.
          </p>
          <div className="flex items-center justify-center mt-4">
            <input type="text" className="w-[350px] h-[60px] outline-none bg-[#00000055] rounded-tl-[8px] rounded-bl-[8px] px-4" style={{ backdropFilter: "blur(1px)" }} placeholder="Insira o seu e-mail" />
            <button type="button" className="bg-white px-10 h-[60px] rounded-tr-[8px] rounded-br-[8px] text-zinc-600">
              Entrar em contacto
            </button>
          </div>
        </div>
      </header>
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
      <section className="flex bg-white items-center justify-center pt-[100px] w-full gap-[200px]">
        <div className="w-max flex flex-col items-start justify-start bg-[rgba(47, 50, 125, 0.03)] h-[600px] rounded-tl-[20px] rounded-br-[20px]">
          <h1 className="rubik-bold text-[#2F327D] text-[2rem] flex items-start jsutify-center gap-2"><span className="text-[#F48C06]">Adjey Serafim</span> <Quote color="#F48C06" /></h1>
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
      <section className="border-t-1 border-b-1 border-solid h-[250px] bg-white">
        <div className="w-full flex items-center justify-center flex-col h-full">
          <h1 className="rubik-bold text-[#2F327D] text-[2rem]">Nossos parceiros</h1>
          <ul className="flex items-center justify-center gap-[100px] mt-[60px]">
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
      <section className="w-full h-[500px] bg-white py-[100px] px-[100px]">
        <h1 className="rubik-bold text-[#2F327D] text-[2rem]">Nossa especialização</h1>
        <div className="flex mt-[60px] h-max">
          <div className="w-[500px] h-[800px] rounded-[20px] bg-blue-100">

          </div>
          <div className="flex flex-col flex-[1] h-[800px] gap-6 ml-6">
            <div className="flex items-center justify-center w-full h-1/2 gap-6">
              <div className="w-1/3 h-full bg-zinc-100 rounded-[20px]"></div>
              <div className="w-1/3 h-full bg-zinc-100 rounded-[20px]"></div>
              <div className="w-1/3 h-full bg-zinc-100 rounded-[20px]"></div>
            </div>
            <div className="flex items-center justify-center w-full h-1/2 gap-6">
              <div className="w-2/3 h-full bg-zinc-100 rounded-[20px]"></div>
              <div className="w-1/3 h-full bg-zinc-100 rounded-[20px]"></div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
