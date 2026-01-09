/*
  Title: ShippingForm
  Created By: Nicolas Clocksin

  Description: Component used to dispaly a form for shipping information of an order.
*/
import { AddressConext } from "../context/AddressContext";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
function ShippingForm({ typeShipment, setDifferentBilling, differentBilling }) {
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
  const addressType =
    typeShipment?.toLowerCase() === "billing" ? "billing" : "shipping";
  const {
    shippingDraft,
    billingDraft,
    updateStreet,
    updateCity,
    updatePostalCode,
    updateState,
    updateName,
    updateIsDefault,
  } = useContext(AddressConext);
  const addressDraft =
    addressType === "billing" ? billingDraft : shippingDraft;
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
        <Form.Label>{typeShipment} Information</Form.Label>

        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={addressDraft.name || user.name || ""}
            onChange={(event) => updateName(addressType, event)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={addressDraft.street}
            onChange={(event) => updateStreet(addressType, event)}
          />
        </Form.Group>

        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                value={addressDraft.city}
                onChange={(event) => updateCity(addressType, event)}
              />
            </Form.Group>
          </Col>

          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <DropdownButton
                title={addressDraft.state || "Select state"}
                id="state-dropdown"
                variant="light"
                className="text-dark"
              >
                {STATE_OPTIONS.map((s) => (
                  <Dropdown.Item
                    as="button"
                    key={s}
                    type="button"
                    onClick={() => updateState(addressType, s)}
                  >
                    {s}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>

          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your postal code"
                value={addressDraft.postalCode}
                onChange={(event) => updatePostalCode(addressType, event)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Set as default address"
                checked={addressDraft.isDefault}
                onChange={(event) =>
                  updateIsDefault(addressType, event.target.checked)
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-end">
            {addressType === "shipping" &&
            !differentBilling &&
            typeof setDifferentBilling === "function" ? (
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => setDifferentBilling(true)}
              >
                Billing is Different than Shipping
              </Button>
            ) : null}
          </div>
        </Row>
      </Form>
    </>
  );
}
export default ShippingForm;
