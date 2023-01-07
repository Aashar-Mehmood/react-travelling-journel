import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TravelCard(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={`images/${props.image_url}`} />
      </div>
      <div className="card--text">
        <h2 className="title">{props.title}</h2>
        <div className="location">
          <FontAwesomeIcon
            className="text-red"
            icon={faMapMarkerAlt}
          ></FontAwesomeIcon>
          <span>{props.location.name}</span>
          <a href={props.location.link}>View on Google Maps</a>
        </div>
        <p className="date">
          {props.date.start}&nbsp;- &nbsp; {props.date.end}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
