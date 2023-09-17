import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Edit() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    descr: "",
    prine: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/menu/" + id).then((res) =>
      setValues(res.data)
    );
  }, [id]);

  const updateMenu = () => {
    Axios.put("http://localhost:3001/menu/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "แก้ไขข้อมูลสำเร็จ !",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <br />
      <Row className="text-center">
        <Col>
          <h1>แก้ไขข้อมูลเมนู</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="ชื่อเมนู"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={values.descr}
              onChange={(e) => setValues({ ...values, descr: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="ราคา"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={values.prine}
              onChange={(e) => setValues({ ...values, prine: e.target.value })}
            />
          </FloatingLabel>
          <br />
          <div className="d-grid gap-2">
            <Button variant="outline-primary" size="lg" onClick={updateMenu}>
              แก้ไขข้อมูลเมนู
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
