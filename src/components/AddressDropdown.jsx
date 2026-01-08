import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { AddressConext } from "../context/AddressContext";
import { Button, Form } from "react-bootstrap";
function AddressDropdown({ setShowAddressDropdown }) {
  const {
    addresses,
    selectedAddressIndex,
    updateSelectedAddress,
  } = useContext(AddressConext);
  const { user } = useAuth();

  if (!user || !addresses || addresses.length === 0) {
    return null;
  }

  return (
    <Form className="d-flex flex-column gap-2">
      <Form.Group>
        <Form.Label>Shipping Address</Form.Label>
        <Form.Select
          value={selectedAddressIndex}
          onChange={(event) =>
            updateSelectedAddress(Number(event.target.value))
          }
        >
          {addresses.map((address, index) => (
            <option key={index} value={index}>
              {address.street} - {address.city}, {address.state}{" "}
              {address.zipCode}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShowAddressDropdown(false)}>
          Add New Address
        </Button>
      </div>
    </Form>
  );
}
export default AddressDropdown;
