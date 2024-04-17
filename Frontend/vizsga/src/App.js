import { useEffect, useState } from "react";
import "./App.css";
import { Row, Dropdown, DropdownButton, Col } from "react-bootstrap";
import axios from "./api/axios";
import KerdesMezo from "./components/KerdesMezo";

function App() {
  const [kategoriak, setKategoriak] = useState([]);
  const [tesztek, setTesztek] = useState([]);

  //Add komment
  useEffect(() => {
    axios
      .get("/api/kategoria")
      .then((res) => {
        console.log(res.data);
        setKategoriak(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/tesztek")
      .then((res) => {
        console.log(res.data);
        setTesztek(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <div id="Felulet">
        <Row>
          <Col>
            <DropdownButton
              variant="Secondary"
              title="Kategóriák:"
              id="kategoriak"
            >
              {kategoriak.map((kategoria, id) => {
                return (
                  <Dropdown.Item eventKey={id} >
                    {kategoria.kategorianev}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Col>
        </Row>
        {tesztek.map((teszt, id) => {
          return (
            <KerdesMezo key={id} teszt={teszt}></KerdesMezo>
          );
        })}
      </div>
    </div>
  );
}

export default App;
