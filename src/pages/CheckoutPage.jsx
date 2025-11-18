import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" />
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" />
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter your postal code" />
          <InputGroup>
            <DropdownButton
              title="State"
              variant="outline-secondary"
              id="input-group-dropdown-1"
            ></DropdownButton>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CheckoutPage;
