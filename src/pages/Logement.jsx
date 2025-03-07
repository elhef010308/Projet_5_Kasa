import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import vectorLeft from "../images/Vector-left.png";
import vectorRight from "../images/Vector-right.png";
import { Collapse } from "../components/Components";

function Logement() {
    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('/logements.json');
                const data = await response.json();
                const foundLocation = data.find((item) => item.id === id);
                setLocation(foundLocation);
            } catch (error) {
                console.error("Erreur de chargement : ", error);
            }
        };

        fetchLocation();
    }, [id]);

    if (!location) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="location-page">
            <div className="location-image">
                <img alt="vector-left" src={vectorLeft} />
                <div className="image">
                    <img alt={location.title} src={location.pictures[0]} />
                    <p>1/x</p>
                </div>
                <img alt="vector-right" src={vectorRight} />
            </div>

            <div className="location-title">
                <div className="title">
                    <p>{location.title}</p>
                    <p>{location.location}</p>
                </div>
                <div className="author">
                    <p>{location.host.name}</p>
                    <img alt={location.host.name} src={location.host.picture} />
                </div>
            </div>

            <div className="location-filter">                {/* MAP crée un bouton pour chaque tag du tableau location.tags */}
                <div className="button-filter">              {/* key={index} permet à React d'identifier chaque bouton de façon unique */}           
                    {location.tags.map((tag, index) => (
                        <button key={index}>{tag}</button>   
                    ))}                                      {/* {tag} = le contenu texte du bouton */}
                </div>
                <div className="stars">                      {/* Array(5) = créer un tableau de 5 éléments */}
                    {[...Array(5)].map((_, index) => (       
                        <span key={index}>{index < parseInt(location.rating) ? "★" : "☆"}</span>
                    ))}                                      {/* MAP = parcoourir ce tableau */}
                </div>                                       {/* A chaque itération, on vérifie si l'index est inf ou sup à la note du logement */}
            </div>                                           {/* Si la note de {location.rating} est SUP on affiche une étoile pleine, sinon une étoile vide */}

            <div className="location-collapse">
                <Collapse title="Description" content={location.description} />
                <Collapse
                    title="Équipements"
                    content={(
                        <ul>          
                            {location.equipments.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>  
                    )}          {/* {location.equipement} = tableau avec une liste d'équipement */}
                />              {/* pour chaque élément (equip) on crée une <li> dynamiquement */}
            </div>
        </div>
    );
}

export default Logement;
