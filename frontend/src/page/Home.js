import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const [Item, setItem] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/menus").then((response) => {
      setItem(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/menu/${id}`).then((response) => {
      setItem(
        Item.filter((val) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ลบข้อมูลสำเร็จ !",
            showConfirmButton: false,
            timer: 2000,
          });
          return val.id !== id;
        })
      );
    });
  };

  return (
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <h3>Menu</h3>
        </Col>
        <Col xs lg="2">
          <Button variant="outline-primary" as={Link} to={"/create"}>
            {" "}
            เพิ่มเมนู !{" "}
          </Button>{" "}
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>เมนู</th>
                <th>ราคา</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Item.map((menu) => (
                <tr className="text-center" key={menu.id}>
                  <td>{menu.id}</td>
                  <td>{menu.descr}</td>
                  <td>{menu.prine}</td>
                  <td>
                    <Button variant="outline-warning" as={Link} to={"/edit/"+menu.id}>
                      <FaRegPenToSquare />
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(menu.id)}
                    >
                      <FaRegTrashCan />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
