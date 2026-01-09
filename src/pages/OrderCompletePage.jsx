import { Form, ListGroup } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
function OrderCompletePage() {
  const { order, userOrders } = useContext(OrderContext);
  const { user } = useAuth();
  useEffect(() => {
    console.log("Order Complete Page - User orders:", user);
  }, [userOrders]);

  return (
    <div className="orderCompletePage">
      <Form className="orderCompleteCard">
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label className="orderCompleteTitle">Order Complete</Form.Label>
          <Form.Text className="d-block">
            Thank you for your order! Your order number is {order?.id}.
          </Form.Text>
          <Form.Text className="d-block">
            Order will be sent to {order?.shippingAddress?.street},{" "}
            {order?.shippingAddress?.city}, {order?.shippingAddress?.state}{" "}
            {order?.shippingAddress?.zipCode}.
          </Form.Text>
          <Form.Text className="d-block">
            Billing will be sent to {order?.billingAddress?.street},{" "}
            {order?.billingAddress?.city}, {order?.billingAddress?.state}{" "}
            {order?.billingAddress?.zipCode}.
          </Form.Text>
          <Form.Text className="d-block">
            Payment Method: {order?.paymentMethod?.cardType} ending in{" "}
            {order?.paymentMethod?.cardNumber?.slice(-4)}.
          </Form.Text>
        </Form.Group>
        <ListGroup className="orderCompleteList">
          {order?.items.map((item, index) => (
            <ListGroup.Item key={index} className="orderCompleteItem">
              <div className="orderCompleteItem-left">
                <img src={item.item.imgUrl} alt={item.item.name} />
                <div>
                  <div className="orderCompleteItem-name">{item.item.name}</div>
                  <div className="orderCompleteItem-qty">
                    Qty: {item.quantity}
                  </div>
                </div>
              </div>
              <div className="orderCompleteItem-price">
                ${(item.item.price * item.quantity).toFixed(2)}
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item className="orderCompleteTotal">
            <strong>
              Total Amount: ${Number(order?.totalAmount || 0).toFixed(2)}
            </strong>
          </ListGroup.Item>
        </ListGroup>
      </Form>
    </div>
  );
}

export default OrderCompletePage;
