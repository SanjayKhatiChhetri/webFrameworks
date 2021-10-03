import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const { list } = props;
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {list.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              image={item.img}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
