// Importation des modules nécessaires :
import Banner from "../../components/banner/Banner.jsx";
import  "../../pages/about/About.scss";
import Collapse from "../../components/collapse/Collapse.jsx";
import bannerAbout from "../../img/bannerAbout.png";
import { useApiCallAbout } from "../../hook/useApiCallAbout.jsx";

// Définition du composant About :
const About = () => {
  const { apiState } = useApiCallAbout();

  return (
    <main className="container__main">
      <Banner imgBanner={bannerAbout} />
      {apiState.error && <p>Une erreur est survenue...</p>}
      <section>
        {apiState.data?.length > 0 &&
          apiState.data.map((item) => (
            <Collapse
              key={item.id}
              datatitle={item.title}
              dataDescription={item.description}
            />
          ))}
      </section>
      {apiState.data === null && (
        <p>Votre requête ne correspond à aucune donnée.</p>
      )}
    </main>
  );
};

// Exportation du composant About pour qu'il puisse être utilisé ailleurs :
export default About;
