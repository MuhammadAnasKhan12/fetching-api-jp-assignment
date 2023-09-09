import "./Home.css"
import axios from "axios";
import SNavBar from "../components/SNavbar";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Scard from "../components/Scard";
export default function Home() {
   
const [listData, setListData] = useState([]);
let getData = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      setListData([...res.data]);
    })
    .catch((err) => {
      console.log(err);
    });
};

    return (
      <>
        <div className="Home">
          <SNavBar clickss={getData} />
          <div className="main-body">
            <div className="mid">
              <div className="card-container">
                {listData.map((x, i) => {
                  return (
                    <>
                      <Scard list={listData} />
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    )
}