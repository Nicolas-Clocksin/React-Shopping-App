import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function EditProfileModal() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  const { user, setUser } = useAuth();
  return (
    <div>
      <Button onClick={handleShow}>Edit Profile</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Update Profile</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EditProfileModal;
