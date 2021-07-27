import Card from "react-bootstrap/Card";
import img from "../images/download.png";
import "../stylesheets/DescCard.css";
import DM from "../images/DM.jpg";
const DescCard = () => {
  return (
    <div style={{ margin: "10px 0px 10px" }}>
      <Card style={{ borderRadius: "12px" }}>
        <div style={{ height: "120px" }}>
          <Card.Img
            className="bg-img"
            variant="top"
            src={DM}
            width="1000px"
            height="200px"
          />
        </div>

        <Card.Body className="card-body">
          <div className="author">
            <img className="profile-photo" src={img} alt={img} />
            <h5 className="name">Michael Scott</h5>
            <br />
            <p className="id">@micahelgscott</p>
            <br />
          </div>
          <p className="quote">
            "You miss 100% <br />
            of the shots
            <br /> you don't take"
          </p>
        </Card.Body>
        <hr
          style={{
            width: "80%",
            margin: "auto",
          }}
        />
        <div className="md-col-3">
          <div style={{ textAlign: "center" }}>
            12
            <br /> files
          </div>
          <div style={{ textAlign: "center" }}>
            24.6$
            <br /> Spent
          </div>
          <div style={{ textAlign: "center" }}>
            2GB <br />
            Used
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DescCard;
