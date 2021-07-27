import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyForm = () => {
  return (
    <div>
      <Card style={{ borderRadius: "12px", padding: "20px" }}>
        <h5 style={{ marginBottom: "20px", color: "#252422" }}>Edit Profile</h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dunder Mifflin Inc."
                disabled
              />
            </Form.Group>{" "}
            <Form.Group as={Col}>
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Michael23@code.com" />
            </Form.Group>{" "}
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>{" "}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Michael" />
            </Form.Group>{" "}
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Scott" />
            </Form.Group>{" "}
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Scranton, Pennsylvania" />
          </Form.Group>{" "}
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Scranton" />
            </Form.Group>{" "}
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="United States of America"
              />
            </Form.Group>{" "}
            <Form.Group as={Col}>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Zip Code" />
            </Form.Group>{" "}
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="I'm not superstitious, but I'm a little stitious."
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "#51cbce",
                borderColor: "white",
                borderRadius: "30px",
                padding: "5px 30px",
              }}
              type="submit"
            >
              Update Profile
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default MyForm;
