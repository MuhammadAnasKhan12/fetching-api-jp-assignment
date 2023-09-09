import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./Scard.css"
import axios from "axios";
import useState from "react";
import { useNavigate } from "react-router-dom";
function Scard(props) {
  const { list } = props;
  const navigate = useNavigate();
  const navi = (id) => {
    navigate(`/description/${id}`)
  }
  return (
    <>
      {list.map((x, i) => {
        return (
          <Card className="Cardd" style={{ width: "18rem" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "10rem" }}
            >
              <Card.Img
                style={{ height: "10rem", width: "10rem" }}
                variant="top"
                src={x.image}
              />
            </div>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>{x.title}</Card.Title>
              <h6>Price: ${x.price}</h6>
              <h6>Rating: {x.rating.rate}</h6>
              <Button onClick={()=>navi(x.id)} variant="primary">Description</Button>
            </Card.Body>
          </Card>
        );
      })}        
    
    </>
  )
  
}

export default Scard;
 