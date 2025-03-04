// Importation des modules
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Logement } from './pages/Logement';
import { NotFound } from './pages/NotFound';


// Définition du composant App() qui va retourner l'affichage principal du site
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


// Exportation du composant
export default App;