import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { AddressConext } from "../context/AddressContext";
import { Form } from "react-bootstrap";
function AddressDropdown() {
  const { addresses, selectedAddressIndex, updateSelectedAddress } =
    useContext(AddressConext);
  const { user } = useAuth();

  if (!user || !addresses || addresses.length === 0) {
    return null;
  }

  return (
    <Form>
      <Form.Label>Shipping Address</Form.Label>
      <Form.Select
        value={selectedAddressIndex}
        onChange={(event) => updateSelectedAddress(Number(event.target.value))}
      >
        {addresses.map((address, index) => (
          <option key={index} value={index}>
            {address.street} - {address.city}, {address.state}{" "}
            {address.zipCode}
          </option>
        ))}
      </Form.Select>
    </Form>
  );
}
export default AddressDropdown;
