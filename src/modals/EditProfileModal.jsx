import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function EditProfileModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const updateProfile = () => {
    setShow(false);
  };
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
              <Form.Control
                type="text"
                placeholder={user.name}
                onChange={(event) => updateName(event)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                onChange={(event) => updateEmail(event)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder={user.password}
                onChange={(event) => updatePassword(event)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={updateProfile}>Update Profile</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EditProfileModal;
