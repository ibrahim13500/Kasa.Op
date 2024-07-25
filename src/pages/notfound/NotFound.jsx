// Importation des modules nécessaires :
import  "./NotFound.scss";
import Error from "../../components/error/Error.jsx";

// Définition du composant NotFound :
const NotFound = () => {
  return (
    <main className="container__notFound">
      <Error />
    </main>
  );
};

// Exportation du composant NotFound pour qu'il puisse être utilisé ailleurs :
export default NotFound;
