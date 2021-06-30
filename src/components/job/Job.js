import "./Job.css";

const Job = (props) => {
  return (
    <div className={`card-job ${props.color}`}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} {props.country} {props.city}
      </p>
    </div>
  );
};

export default Job;
