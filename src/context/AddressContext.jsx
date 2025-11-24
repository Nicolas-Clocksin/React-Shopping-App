/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
*/
import { createContext } from "react";
export const AddressConext = createContext({});

export function AddressProvider({ children }) {
  const { street, setStreet } = useState("");
  const { city, setCity } = useState("");
  const { postalCode, setPostalCode } = useState("");
  const { state, setState } = useState("");
  const { address, setAddress } = useState([]);

  function updateStreet(event) {
    setStreet(event.target.value);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function updatePostalCode(event) {
    setPostalCode(event.target.value);
  }
  function updateState(event) {
    setState(event.target.value);
  }
  function addAddress() {
    setAddress([street, city, postalCode, state]);
  }
  return (
    <AddressConext.Provider
      value={{
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
