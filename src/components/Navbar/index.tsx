import useDevice from "@hooks/useDevice"
import NavbarMobile from "./NavbarMobile"
import NavbarDesktop from "./NavbarDesktop"



const Navbar: React.FC = () => {
    const device = useDevice()
    if (device < 970) return <NavbarMobile />
    else return <NavbarDesktop />
}

export default Navbar