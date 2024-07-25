// Importation des modules nécessaires :
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./components/navbar/Navbar.jsx";
import  "./components/footer/Footer.jsx";
import Housing from "./pages/housing/Housing.jsx";
import Footer from "./components/footer/Footer.jsx";
// Définition du composant App :
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

// Exportation du composant App pour qu'il puisse être utilisé ailleurs :
export default App;
