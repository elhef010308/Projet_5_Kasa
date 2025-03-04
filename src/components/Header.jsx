import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

function Header() {
    return (
        <header>
            <img alt="Logo de Kasa" src={logo} />
            <nav>
                <ul>
                    <li><link to="/">Accueil</link></li>
                    <li><link to="/about">A propos</link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

