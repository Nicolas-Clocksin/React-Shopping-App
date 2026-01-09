/*
  Title: AddressContext
  Created By: Nicolas Clocksin

  Description: Context used to update and create address to be used
  in shipping/billing information.
*/
import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
export const AddressConext = createContext({});

export function AddressProvider({ children }) {
  // State variables for address fields and list of addresses
  const [addresses, setAddresses] = useState([]);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const { user, setUser } = useAuth();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [showAddressDropdown, setShowAddressDropdown] = useState(true);
  // Sync addresses with user data
  useEffect(() => {
    const nextAddresses = user?.addresses ?? [];
    setAddresses(nextAddresses);
    if (nextAddresses.length > 0) {
      setSelectedAddressIndex(0);
      setSelectedAddress(nextAddresses[0]);
    } else {
      setSelectedAddressIndex(0);
      setSelectedAddress(null);
    }
  }, [user]);
  // Update functions for address fields

  // Update name for the address
  function updateName(event) {
    setName(event.target.value);
  }
  // Update street for the address
  function updateStreet(event) {
    setStreet(event.target.value);
  }
  // Update city for the address
  function updateCity(event) {
    setCity(event.target.value);
  }
  // Update postal code for the address
  function updatePostalCode(event) {
    setPostalCode(event.target.value);
  }
  // Update isDefault for the address
  function updateIsDefault(value) {
    setIsDefault(value);
  }
  // Update state for the address
  function updateState(value) {
    setState(value);
  }
  // Update the users addresses both locally and in the user context
  function updateUserAddresses(updatedAddresses) {
    setAddresses(updatedAddresses);
    if (user) setUser((u) => ({ ...u, addresses: updatedAddresses }));
  }
  // Update the selected address based on index
  function updateSelectedAddress(index) {
    setSelectedAddressIndex(index);
    setSelectedAddress(addresses[index] ?? null);
  }
  // Add a new address to the user's addresses
  function addAddress() {
    const newAddress = {
      name,
      street,
      city,
      postalCode,
      state,
      isDefault,
    };
    const hasDefault = addresses.some((address) => address.isDefault);
    const updateDefault =
      isDefault || !hasDefault
        ? [
            ...addresses.map((address) => ({
              ...address,
              isDefault: false,
            })),
            { ...newAddress, isDefault: true },
          ]
        : [...addresses, newAddress];
    updateUserAddresses(updateDefault);
    setIsDefault(false);
    return newAddress;
  }
  // Provide context values to children components
  return (
    <AddressConext.Provider
      value={{
        street,
        city,
        postalCode,
        state,
        isDefault,
        name,
        addresses,
        selectedAddress,
        selectedAddressIndex,
        showAddressDropdown,
        setShowAddressDropdown,
        updateIsDefault,
        updateSelectedAddress,
        updateStreet,
        updateCity,
        updatePostalCode,
        updateState,
        addAddress,
        updateName,
      }}
    >
      {children}
    </AddressConext.Provider>
  );
}
