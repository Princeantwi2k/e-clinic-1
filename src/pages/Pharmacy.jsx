import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Pharmacy.css";
import { AiOutlineCheck } from "react-icons/ai";
import { Pagination, Button } from "react-bootstrap";
import Pharmacymodal from "./PharmacyModal";

const Pharmacy = () => {
  const [modalShow, setModalShow] = useState(false);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div>
        <h1 className="topic"> PHARMACY</h1>
        <input
          type="text"
          placeholder="Type Patient Name to Search"
          className="input"
        />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Consultion</th>
              <th>Exam</th>
              <th>Reciept</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table">
              <td>1</td>
              <td>Mary Jane</td>
              <td>23</td>
              <td>Female</td>
              <td>Amasaman</td>
              <td>
                <AiOutlineCheck className="icon" />
              </td>
              <td>
                {" "}
                <AiOutlineCheck className="icon" />
              </td>

              <td>
                <div className="time">
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Reciept
                  </Button>

                  <Pharmacymodal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Pagination className="pagi">{items}</Pagination>
    </>
  );
};

export default Pharmacy;
