import "../stylesheets/NavBar.css";
import bell from "../images/bell.svg";
import settings from "../images/settings.svg";
import pie from "../images/pie-chart.svg";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <label class="search-label">
        <input tpe="text" placeholder="Search..." />
      </label>
      <button className="nav-btn">
        {" "}
        <img src={pie} alt={pie} />
      </button>
      <button className="nav-btn">
        {" "}
        <img src={bell} alt={bell} />
      </button>
      <button className="nav-btn">
        <img src={settings} alt={settings} />
      </button>
    </div>
  );
};

export default NavBar;
