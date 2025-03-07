import { useEffect, useState } from 'react';
import { Carts } from "../components/Components";
import { useNavigate } from "react-router-dom";

function Home() {
    {/* LOCATIONS = getter (l'état actuel) ; SETLOCATIONS = setter */ }
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/logements.json");
                const data = await response.json();
                setLocations(data);    // mettre à jour le state avec les logementds récupérés
            } catch (error) {
                console.error("Erreur de chargement : ", error);
            }
        };

        fetchData();  // appeler la fonction asynchrone
    }, []);

    return (
        <>
            <div className="home-title">
                <h1>Chez vous partout et ailleurs</h1>
            </div>
            <div className="cart-component">
                {locations.map((logement) => (
                    <Carts
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                        onClick={() => navigate(`/logement/${logement.id}`)}  // Récupérer l'ID de l'objet cliqué
                    />
                ))}
            </div>
        </>
    );
}

export default Home;