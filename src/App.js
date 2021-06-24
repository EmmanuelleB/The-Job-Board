import "./App.css";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Job} from "./components/jobs/Job"

function App() {
  return (
    <div>
      < Header title="The Job Board" />
      < div className = "container">
        < Job title="Full Times Sales Associate - Sydney Boutique" contractType="CDI" country="Australie" city="Sydney" className="red card-job" />
        < Job title="Agent de sécurité - Pantin" contractType="CDI" country="France" city="Pantin" className="green card-job" />
        < Job title="Responsable d'atelier" contractType="CDD" country="France" city="Paris" className="yellow card-job" />
        < Job title="Chef de projets" contractType="CDD" country="France" city="Paris" className="blue card-job" />
        < Job title="Develoopeur React" contractType="CDI" country="France" city="Paris" className="salmon card-job" />
        < Job title="Sales Associate Stockholm" contractType="CDD" country="Suède" city="Stockholm" className="red card-job" />
        < Job title="Vendeur/se - Crans Montana" contractType="CDI" country="Suisse" city="Crans Montana" className="green card-job" />
        < Job title="CRM & DATA Quality Analyst" contractType="CDI" country="USA" city="New York" className="yellow card-job" />
        < Job title="Infirmier" contractType="CDI" country="France" city="Pantin" className="blue card-job" />


      </div>
      
      < Footer />
    </div>
  );
}

export default App;
