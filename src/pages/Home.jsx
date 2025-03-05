import { useEffect, useState } from 'react';
import Carts from "../components/Carts";

function Home() {
    const [locations, setLocations] = useState([]);

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
        <div className='cart-component'>
            {locations.map((logement) => (
                <Carts key={logement.id} title={logement.title} />
            ))}
        </div>
    );
}

export default Home;