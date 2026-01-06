import { Form } from "react-bootstrap";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
function OrderCompletePage() {
  const { order } = useContext(OrderContext);

  return (
    <div>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Order Complete</Form.Label>
            <Form.Text>
              Thank you for your order! Your order number is {order.id}.
            </Form.Text>
          </Form.Group>
        </Form>
      </>
    </div>
  );
}

export default OrderCompletePage;
