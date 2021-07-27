import { Container, Navbar } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DescCard from "./Components/DescCard";
import "bootstrap/dist/css/bootstrap.min.css";
import MemberHolder from "./Components/MemberHolder";
import MyForm from "./Components/MyForm";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f4f3ef",
        width: "100%",
      }}
    >
      <SideBar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container>
            <Row>
              <Col>
                {" "}
                <DescCard />
                <MemberHolder />
                <MyForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default App;
