import HeaderInformation from "../headerInformation/page";
import NavbarComponent from "../navbar/page";

export default function Header() {
    return (
        <header className="home-header w-full h-[960px] flex flex-col">
            <NavbarComponent />
            <HeaderInformation />
        </header>
    )
}