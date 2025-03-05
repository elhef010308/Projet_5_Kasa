import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

function Header() {
    return (
        <header className="header">
            <img alt="Logo de Kasa" src={logo} />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

