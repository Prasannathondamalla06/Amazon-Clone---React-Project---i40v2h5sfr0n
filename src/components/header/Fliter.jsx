import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Filter() {
  const param = useParams();
  const [filter, setFilter] = useState();

  useEffect(() => {
    axios
      .get(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${param.id}`
      )
      .then((response) => {
        console.log("filter", response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.id]);

  return (
    <>
      {filter.map((item) => (
        
        <div
       
          key={item.category}
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <img src={item.image} alt={item.title} style={{ width: "200px" }} />
          <div style={{ fontWeight: "500", width: "200px" }}>{item.title}</div>
          <div>
            <h4>{item.price}</h4>
          </div>
        </div>
      ))}
    </>
  );
}