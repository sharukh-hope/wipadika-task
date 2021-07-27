import greenMail from "../images/mailGreen.svg";
import "../stylesheets/TeamMembers.css";
const Member = (props) => {
  const status = color(props.status);

  return (
    <div className="row">
      <div className="col-md-2">
        <img
          src={props.img}
          alt={props.img}
          style={{ height: "50px", width: "50px" }}
          className="member-img"
        />
      </div>
      <div className="col-md-7">
        {props.name}
        <br />
        <div style={{ color: status }}> {props.status}</div>
      </div>
      <div className="col-md-3">
        <img src={greenMail} alt={greenMail} style={{ height: "20px" }}></img>
      </div>
    </div>
  );
};
const color = (status) => {
  if (status === "available") {
    return "lightgreen";
  } else if (status === "busy") {
    return "red";
  } else {
    return "lightgrey";
  }
};
export default Member;
