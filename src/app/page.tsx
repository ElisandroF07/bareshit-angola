import AboutUs from "./components/aboutUs/page";
import NossaEspecializacao from "./components/especializacao/page";
import NossaEspecializacaoViewer from "./components/especializacaoViewer/page";
import Faq from "./components/faq/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import JoinUs from "./components/join/page";
import OurServices from "./components/ourServices/page";
import ParceirosComponent from "./components/parceiros/page";
import PresidentMessage from "./components/presidentMessage/page";
import WhyBereshit from "./components/whyBereshit/page";

export default function Home() {
  return (
    <main>
      <Header/>
      <WhyBereshit/>
      <AboutUs/>
      <PresidentMessage/>
      <ParceirosComponent/>
      <NossaEspecializacao/>
      <NossaEspecializacaoViewer/>
      <OurServices/>
      <JoinUs/>
      <Faq/>
      <Footer/>
    </main>
  );
}
