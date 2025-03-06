function Carts({ title, cover }) {
    return (
        <div className="cart-location"
            style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position: "relative" }}>
            <p>{title}</p>
        </div>
    );
}

export default Carts;

// TITLE = titre de l'objet image (cf: tableau JSON)
// COVER = URL de l'objet image (cf: tableau JSON)