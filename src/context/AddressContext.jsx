import { createContext } from "react";
export const AddressConext = createContext({});

export function AddressProvider({ children }) {
  const { street, setStreet } = useState("");
  const { city, setCity } = useState("");
  const { postalCode, setPostalCode } = useState("");
  const { state, setState } = useState("");
  const { address, setAddress } = useState([]);

  function updateStreet(target) {
    setStreet(target.value);
  }
  function updateCity(target) {
    setCity(target.value);
  }
  function updatePostalCode(target) {
    setPostalCode(target.value);
  }
  function updateState(target) {
    setState(target.value);
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
