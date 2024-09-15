import AboutUs from "./components/aboutUs/page";
import NossaEspecializacao from "./components/especializacao/page";
import Header from "./components/header/page";
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
      <OurServices/>
      <PresidentMessage/>
      <ParceirosComponent/>
      <NossaEspecializacao/>
    </main>
  );
}
