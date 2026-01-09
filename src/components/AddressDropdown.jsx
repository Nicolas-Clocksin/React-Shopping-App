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
function AddressDropdown({
  setShowAddressDropdown,
  typeShipment,
  setDifferentBilling,
  differentBilling,
}) {
  // Get addresses and selected address index from AddressContext
  const {
    addresses,
    selectedShippingAddressIndex,
    selectedBillingAddressIndex,
    updateSelectedAddress,
  } = useContext(AddressConext);
  const { user } = useAuth();
  const addressType =
    typeShipment?.toLowerCase() === "billing" ? "billing" : "shipping";
  const selectedIndex =
    addressType === "billing"
      ? selectedBillingAddressIndex
      : selectedShippingAddressIndex;
  // Validate if use/addresses exist
  if (!user || !addresses || addresses.length === 0) {
    return null;
  }
  // Return dropdown form of the addresses
  return (
    <Form className="d-flex flex-column gap-2">
      <Form.Group>
        <Form.Label>{typeShipment} Address</Form.Label>
        <Form.Select
          value={selectedIndex}
          onChange={(event) =>
            updateSelectedAddress(addressType, Number(event.target.value))
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
        {addressType === "shipping" && !differentBilling ? (
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => setDifferentBilling(true)}
          >
            Billing is Different than Shipping
          </Button>
        ) : null}
        <Button onClick={() => setShowAddressDropdown(false)}>
          Add New Address
        </Button>
      </div>
    </Form>
  );
}
export default AddressDropdown;
