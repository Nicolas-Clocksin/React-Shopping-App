import { Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Button } from "react-bootstrap";
import EditProfileModal from "../modals/EditProfileModal";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <div className="profilePage">
      <Form className="profileCard">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={user?.name || ""}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user?.email || ""}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user?.password || ""}
            disabled
          />
        </Form.Group>
        <EditProfileModal />
      </Form>
    </div>
  );
}
export default ProfilePage;
