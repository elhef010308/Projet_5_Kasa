// On importe les composants à inclure dans chaque page pour éviter de les répéter
import Header from "./Header";
import Footer from "./Footer";

// Création d'un composant React qui sert de structure de base pour les pages du site
// Tout contenu placé entre <Layout> ... </Layout> sera inséré à la place de { children }
function Layout({ children }) {
    return (
        <>
            <Header />                 
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;

