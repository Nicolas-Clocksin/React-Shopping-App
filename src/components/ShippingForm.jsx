import { AddressConext } from "../context/AddressContext";
import { Col, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
function ShippingForm({ typeShipment }) {
  const STATE_OPTIONS = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const { user } = useAuth();
  const {
    updateStreet,
    updateCity,
    updatePostalCode,
    updateState,
    addAddress,
    address,
  } = useContext(AddressConext);
  function shippingType() {
    if (typeShipment === "shipping") {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Form className="checkoutForm">
        {shippingType() ? (
          <Form.Label>Shipping Information</Form.Label>
        ) : (
          <Form.Label>Billing Information</Form.Label>
        )}
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={user.name}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            onChange={(event) => updateStreet(event.target)}
          />
        </Form.Group>

        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                onChange={(event) => updateCity(event.target)}
              />
            </Form.Group>
          </Col>

          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <DropdownButton
                title="State"
                variant="outline-secondary"
                id="checkout-state-dropdown"
                className="w-100"
              >
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {STATE_OPTIONS.map((stateAbbr) => (
                    <Dropdown.Item
                      as="button"
                      key={stateAbbr}
                      onClick={() => updateState({ value: stateAbbr })}
                    >
                      {stateAbbr}
                    </Dropdown.Item>
                  ))}
                </div>
              </DropdownButton>
            </Form.Group>
          </Col>

          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your postal code"
                onChange={(event) => updatePostalCode(event.target)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default ShippingForm;
