import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function KerdesMezo(props) {
  const [hatterV1, setHatterV1] = useState("white");
  const [hatterV2, setHatterV2] = useState("white");
  const [hatterV3, setHatterV3] = useState("white");
  const [hatterV4, setHatterV4] = useState("white");

  const handleValasz1 = async (e) => {
    let helyesValasz = props.teszt.helyes;
    console.log(helyesValasz)
    if (helyesValasz==="v1") {
        setHatterV1("green")
    } else {
        setHatterV1("red")
    }
  };

  const handleValasz2 = async (e) => {
    let helyesValasz = props.teszt.helyes;
    console.log(helyesValasz)
    if (helyesValasz==="v2") {
        setHatterV2("green")
    } else {
        setHatterV2("red")
    }
  };

  const handleValasz3 = async (e) => {
    let helyesValasz = props.teszt.helyes;
    console.log(helyesValasz)
    if (helyesValasz==="v3") {
        setHatterV3("green")
    } else {
        setHatterV3("red")
    }
  };

  const handleValasz4 = async (e) => {
    let helyesValasz = props.teszt.helyes;
    console.log(helyesValasz)
    if (helyesValasz==="v4") {
        setHatterV4("green")
    } else {
        setHatterV4("red")
    }
  };

  return (
    <Container className="kerdesMezo">
      <Row>
        <Col className="kerdes" md={12}>
          {props.teszt.kerdes}
        </Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={5} style={{ backgroundColor: hatterV1 }} onClick={handleValasz1}>
          {props.teszt.v1}
        </Col>
        <Col md={5} style={{ backgroundColor: hatterV2 }} onClick={handleValasz2}>
          {props.teszt.v2}
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={5} style={{ backgroundColor: hatterV3 }} onClick={handleValasz3}>
          {props.teszt.v3}
        </Col>
        <Col md={5}  style={{ backgroundColor: hatterV4 }} onClick={handleValasz4}>
          {props.teszt.v4}
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}
