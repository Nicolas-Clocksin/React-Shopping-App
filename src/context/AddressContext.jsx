/*
  Title: AddressContext
  Created By: Nicolas Clocksin

  Description: Context used to update and create address to be used
  in shipping/billing information.
*/
import { createContext, useState } from "react";

export const AddressConext = createContext({});

export function AddressProvider({ children }) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState([]);

  function updateStreet(event) {
    setStreet(event.target.value);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function updatePostalCode(event) {
    setPostalCode(event.target.value);
  }
  function updateState(value) {
    setState(value);
  }
  function addAddress() {
    const newAddress = { street, city, postalCode, state };
    setAddress(newAddress);
    return newAddress;
  }
  return (
    <AddressConext.Provider
      value={{
        street,
        city,
        postalCode,
        state,
        updateStreet,
        updateCity,
        updatePostalCode,
        updateState,
        addAddress,
        address,
      }}
    >
      {children}
    </AddressConext.Provider>
  );
}
