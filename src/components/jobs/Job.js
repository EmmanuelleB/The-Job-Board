import "./Job.css";
export const Job =(props)=>{
    return <div className={props.className}>
        <h2>{props.title}</h2>
        <p>{props.contractType} {props.country} {props.city}</p>
    </div>
}

export default Job;