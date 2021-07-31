import React from 'react';
import { Modal } from 'react-bootstrap';

function LoginModal(props) {
  const { show, setShow } = props;

  // modal controller
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered animation="false">
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}
export default LoginModal;
