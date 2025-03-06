import { useEffect, useState } from 'react';
import { Carts } from "../components/Components";

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
        <>
            <div className="home-title">
                <h1>Chez vous partout et ailleurs</h1>
            </div>
            <div className='cart-component'>
                {locations.map((logement) => (
                    <Carts key={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </div>
        </>

    );
}

export default Home;