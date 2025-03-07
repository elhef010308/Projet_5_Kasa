import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import vectorLeft from "../images/Vector-left.png";
import vectorRight from "../images/Vector-right.png";
import { Collapse } from "../components/Components";

function Logement() {
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(0);  // index de l'image affichée actuellement

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

    if (!location) return <div>Chargement...</div>;
    

    const previousImage = () => {
        setCurrentPicture(prev => (prev === 0 ? location.pictures.length - 1 : prev - 1))
    }   // si PREV = la première image (index = 0) alors on revient à la dernière, sinon on fait index - 1

    const nextImage = () => {
        setCurrentPicture((currentPicture + 1) % location.pictures.length)
    }                                         // "&" ===> une fois à la dernière image, on retourne à la première 

    return (
        <div className="location-page">
            <div className="location-image" style={{ backgroundImage: `url(${location.pictures[currentPicture]})` }}>            
                <div>
                    <img alt="vector-left" src={vectorLeft} onClick={nextImage} />
                    <img alt="vector-right" src={vectorRight} onClick={previousImage} />
                </div>
                <p>{currentPicture + 1}/{location.pictures.length}</p>
            </div>

            <div className="location-title">
                <div className="title">
                    <h2>{location.title}</h2>
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
                        <p key={index}>{index < parseInt(location.rating) ? "★" : "☆"}</p>
                    ))}                                      {/* MAP = parcoourir ce tableau */}
                </div>                                       {/* A chaque itération, on vérifie si l'index est inf ou sup à la note du logement */}
            </div>                                           {/* Si la note de {location.rating} est SUP on affiche une étoile pleine, sinon une étoile vide */}

            <div className="location-collapse">
                <Collapse title="Description" /*content={location.description}*/ />
                <Collapse
                    title="Équipements"
                    /*content={(
                        <ul>
                            {location.equipments.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>
                    )}*/
                />
            </div>
        </div>
    );
}

export default Logement;
