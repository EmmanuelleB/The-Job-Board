import "./Jobs.css";
import Job from "../job/Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        title="Full Times Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
        color="red"
      />
      <Job title="Agent de sécurité - Pantin" contractType="CDI" country="France" city="Pantin" color="green" />
      <Job title="Responsable d'atelier" contractType="CDD" country="France" city="Paris" color="yellow" />
      <Job title="Chef de projets" contractType="CDD" country="France" city="Paris" color="blue" />
      <Job title="Developpeur React" contractType="CDI" country="France" city="Paris" color="salmon" />
      <Job title="Sales Associate Stockholm" contractType="CDD" country="Suède" city="Stockholm" color="red" />
      <Job title="Vendeur/se - Crans Montana" contractType="CDI" country="Suisse" city="Crans Montana" color="green " />
      <Job title="CRM & DATA Quality Analyst" contractType="CDI" country="USA" city="New York" color="yellow" />
      <Job title="Infirmier" contractType="CDI" country="France" city="Pantin" color="blue" />
    </div>
  );
};

export default Jobs;
