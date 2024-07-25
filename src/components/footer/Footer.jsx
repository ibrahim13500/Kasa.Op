// Importation des modules nécessaires :
import  "../../components/footer/Footer.scss";
import logoFooter from "../../svg/logoFooter.svg";

// Définition du composant Footer :
const Footer = () => {
  return (
    <footer className="container__footer">
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

// Exportation du composant Footer pour qu'il puisse être utilisé ailleurs :
export default Footer;
