import { useState } from "react";

// COMPOSANT CARTE
export function Carts({ title, cover }) {
    return (
        <div className="cart-location"
            style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position: "relative" }}>
            <p>{title}</p>
        </div>
    );
}


// COMPOSANT COLLAPSE
export function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse" onClick={toggleCollapse}>
            <div>
                <p className="collapse-title">{title}</p>
                <p className={`collapse-arrow ${open ? "open" : ""}`}>{open ? "▼" : "▲"}</p>
            </div>

            {/* Contenu qui doit s'afficher en dessous en poussant les autres éléments */}
            <div className={`collapse-content ${open ? "show" : ""}`}>
                {content}
            </div>
        </div>
    );
}

