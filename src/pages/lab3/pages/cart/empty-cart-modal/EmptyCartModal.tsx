import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface EmptyCartModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  emptyCart: () => void;
}

export const EmptyCartModal = (props: EmptyCartModalProps) => {
  return (
    <Modal
      show={props.show}
      centered
      onHide={() => (props.setShow(false))}
      backdrop='static'
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Emptying your cart cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={(event) => {
            event.preventDefault();
            props.setShow(false);
          }}
        >
          Cancel
        </Button>
        <Button
          variant='danger'
          onClick={(event) => {
            event.preventDefault();
            props.emptyCart();
            props.setShow(false);
          }}
        >
          Empty Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
