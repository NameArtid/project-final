import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Create() {
  const [data, setData] = useState([]);
  const [menuid, setMenuid] = useState(0);
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState(0);

  const addMenu = () => {
    Axios.post("http://localhost:3001/menu", {
      id: menuid,
      descr: descr,
      price: price,
    }).then(() => {
      setData([
        ...data,
        {
          id: menuid,
          descr: descr,
          price: price,
        },
        Swal.fire({
          position: "center",
          icon: "success",
          title: "บันทึกข้อมูลสำเร็จ !",
          showConfirmButton: false,
          timer: 2000,
        }),
      ]);
    });
  };
  return (
    <Container>
      <br />
      <Row className="text-center">
        <Col>
          <h1>เพิ่มเมนู</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="ID"
            className="mb-3"
            onChange={(e) => {
              setMenuid(e.target.value);
            }}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="ชื่อเมนู"
            className="mb-3"
            onChange={(e) => {
              setDescr(e.target.value);
            }}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="ราคา"
            className="mb-3"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <br />
          <div className="d-grid gap-2">
            <Button variant="outline-primary" size="lg" onClick={addMenu} as={Link} to={"/"}>
              บันทึกเมนู
            </Button>
            <Button variant="outline-secondary" size="lg" as={Link} to={"/"}>
              กลับหน้าแรก
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
