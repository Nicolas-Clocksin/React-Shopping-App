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
  function updateName(event) {
    setName(event.target.value);
  }
  function updateStreet(event) {
    setStreet(event.target.value);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function updatePostalCode(event) {
    setPostalCode(event.target.value);
  }
  function updateIsDefault(value) {
    setIsDefault(value);
  }
  function updateState(value) {
    setState(value);
  }
  function updateUserAddresses(updatedAddresses) {
    setAddresses(updatedAddresses);
    if (user) setUser((u) => ({ ...u, addresses: updatedAddresses }));
  }
  function updateSelectedAddress(index) {
    setSelectedAddressIndex(index);
    setSelectedAddress(addresses[index] ?? null);
  }

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
