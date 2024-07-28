import logo from "../../assets/shared/logo.svg"
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg"


const Navbar = () => {
    return(
        <nav className="p-7">
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" />
                <img src={hamburgerIcon} alt="icon-hamburger" />
            </div>
        </nav>
    )
}

export default Navbar;