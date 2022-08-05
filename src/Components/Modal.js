import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "./Modal.css";
import ProtectedRoute from "./ProtectedRoute";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const signIn = () => {
    setShowModal(false);
    setisAuthenticated(true);
  };

  return (
    <>
      {showModal ? (
        <div className="modalBackground">
          <div className="modalContainer">
            <h4>Please sign in before accessing this site</h4>
            {/* <Card
            style={{ width: "16rem", alignSelf: "center", marginBottom: "4px" }}
          >
            <Card.Img variant="top" src={image} />
          </Card> */}
            <div
              className="modalPart1"
              style={{ alignSelf: "center", marginBottom: "4px" }}
            >
              <Button variant="outline-dark" onClick={signIn}>
                Log in with Facebook
              </Button>
              <Button variant="outline-dark" onClick={signIn}>
                Log in with Google
              </Button>
              <Button variant="outline-dark" onClick={signIn}>
                Log in with Apple
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      <ProtectedRoute isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Modal;
