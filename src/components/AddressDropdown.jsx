/*
  Title: AddressDropdown.jsx
  Created By: Nicolas Clocksin

  Description: AddressDropdown is used to display a dropdown of stored addrreses for the
  user on checkout.
*/
import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { AddressConext } from "../context/AddressContext";
import { Button, Form } from "react-bootstrap";
function AddressDropdown({ setShowAddressDropdown }) {
  // Get addresses and selected address index from AddressContext
  const { addresses, selectedAddressIndex, updateSelectedAddress } =
    useContext(AddressConext);
  const { user } = useAuth();
  // Validate if use/addresses exist
  if (!user || !addresses || addresses.length === 0) {
    return null;
  }
  // Return dropdown form of the addresses
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
