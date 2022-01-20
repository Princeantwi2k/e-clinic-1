import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./Modal.css";

const Pharmacymodal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="reciept" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          E-Clinic
        </Modal.Title>
        <p className="date">Thursday 22,june 2022</p>
      </Modal.Header>
      <Modal.Body>
        <h2 className="modal-topic">Patient information</h2>
        <Table striped bordered hover size="sm" className="modal-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mary jane</td>
              <td>13-july-1999</td>
              <td>Female</td>
            </tr>
          </tbody>
        </Table>
        <p className="modal-topic">Medical Treatment</p>
        <Table striped bordered hover size="sm" className="modal-table1">
          <thead>
            <tr>
              <th>Cost</th>
              <th>Prescrition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 xGh 45.00</td>
              <td>Paracetamol (50mg) 2 (Tabblet) (OD) 2 days</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="sm" className="modal-table1">
          <thead>
            <tr>
              <th>Total</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>90.00</td>
              <td>Sample Comment</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" size="lg" className="button">
          Patient has paid
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Pharmacymodal;
