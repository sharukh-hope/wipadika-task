import Card from "react-bootstrap/Card";
import Member from "./Member";
import wipadika from "../images/wipadika.png";
import dwight from "../images/dwight.png";
import jim from "../images/jim.png";
const MemberHolder = () => {
  return (
    <div style={{ margin: "10px 0px 10px" }}>
      <Card style={{ borderRadius: "12px" }}>
        <h5 style={{ padding: "15px 15px 0px", color: "#252422" }}>
          Team Members
        </h5>
        <Card.Body className="card-body">
          <Member
            name="Wipadika Innovations"
            status="available"
            img={wipadika}
          />
          <Member name="Jim Halpert" status="offline" img={jim} />
          <Member name="Dwight Schrute" status="busy" img={dwight} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemberHolder;
