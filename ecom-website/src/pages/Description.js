import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SNavBar from "../components/SNavbar"; 
export default function Description() {
  let params = useParams();
  const [datas, setdatas] = useState({});

  let getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setdatas({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { rate, count } = datas.rating || {};
  return (
    <>
    <SNavBar/>
      <Button onClick={getData}>Get Description</Button>
      <Card style={{ width: "18rem" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "10rem" }}
        >
          <Card.Img
            style={{ height: "10rem", width: "10rem" }}
            variant="top"
            src={datas.image}
          />
        </div>
        <Card.Body>
          <Card.Title>Title: {datas.title}</Card.Title>
          <Card.Text>
            <h5>Description:</h5>
            <span>{datas.description}</span>
            <h5>
              Category: <span>{datas.category}</span>
            </h5>
            <h5>
              Rating: <span>{rate}</span>
            </h5>
            <h5>
              Count: <span>{count}</span>
            </h5>
            <h4>
              Price: <span>${datas.price}</span>
            </h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
