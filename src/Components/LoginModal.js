import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function LoginModal(props) {
  const { show, setShow, modalTitle } = props;

  // modal controller
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="border-bottom-0">
          {/* closeButton */}
          <Modal.Title className="mx-auto mt-2">
            <h2>{modalTitle}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer className="d-none">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginModal;
