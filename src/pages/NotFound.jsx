import image from "../images/error-404.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <img alt="Logo 404" src={image} />
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error-redirection" onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
        </div>
    )
}

export default NotFound;
