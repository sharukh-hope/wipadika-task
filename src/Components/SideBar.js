import "../stylesheets/SideBar.css";
import user from "../images/user.svg";
const SideBar = () => {
  return (
    <div className="side-bar">
      <h5 style={{ padding: "10px" }}>Wipadika Innovations</h5>
      <hr className="divider" />
      <br />
      <div className="side-bar-item">
        <img src={user} alt={user} style={{ paddingRight: "10px" }}></img>Your
        profile
      </div>{" "}
    </div>
  );
};

export default SideBar;
