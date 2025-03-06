import { Collapse } from "../components/Components";

const data = [
    { title: "Fiabilité", content: "Le texte explicatif sur la fiabilité..." },
    { title: "Respect", content: "Le texte explicatif sur le respect..." },
    { title: "Service", content: "Le texte explicatif sur le service..." },
    { title: "Sécurité", content: "Le texte explicatif sur la sécurité..." }
];

function About() {
    return (
        <>  
            <div className="about-title"></div>
            <div className="collapse-container">
                {data.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </>
    );
}

export default About;