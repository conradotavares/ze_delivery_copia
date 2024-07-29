import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const ComponenteModal = () => {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleShowFirstModal = () => {
    setShowSecondModal(false);
    setShowFirstModal(true);
  };

  const handleCloseFirstModal = () => setShowFirstModal(false);
  const handleShowSecondModal = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };
  const handleCloseSecondModal = () => setShowSecondModal(false);

  return (
    <>
      {/* Primeiro Modal */}
      <Modal
        show={showFirstModal}
        onHide={handleCloseFirstModal}
        dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content"
        backdropClassName="custom-backdrop"
      >
        <Modal.Header className="custom-modal-header">
          <Modal.Title>
            <img
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"
              alt="Logo"
              className="custom-logo"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          Você tem 18 anos ou mais?
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button
            variant="secondary"
            onClick={handleShowSecondModal}
            className="custom-btn-secondary"
          >
            Não
          </Button>
          <Button
            variant="primary"
            onClick={handleCloseFirstModal}
            className="custom-btn-primary primary"
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Segundo Modal */}
      <Modal
        show={showSecondModal}
        onHide={handleCloseSecondModal}
        dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content-second"
        backdropClassName="custom-backdrop"
      >
        <Modal.Header className="custom-modal-header-second">
          <Modal.Title className="custom-modal-title-second">
            <img
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"
              alt="Logo"
              className="custom-logo"
            />
          </Modal.Title>
            <Modal.Body className="custom-modal-body-second">
              <p>
                Você precisa ter 18 anos ou mais para consumir bebidas
                alcoólicas.
              </p>
              <p>Relaxe, o tempo passa rápido!</p>
            </Modal.Body>
        </Modal.Header>
        <Modal.Footer className="custom-modal-footer-second">
          <Button
            variant="primary"
            onClick={handleShowFirstModal}
            className="custom-btn-primary second"
          >
            Voltar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComponenteModal;