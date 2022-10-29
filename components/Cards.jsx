import React from "react";
import Card from "./Card";
import data from "../data/data.json";

const Cards = ({ title }) => {
  return (
    <div className="cards">
      <h2 className="container-cards-title">{title}</h2>
      <section className="container-cards">
        {data.map((dato, index) => (
          <Card key={index} dato={dato} />
        ))}
      </section>
    </div>
  );
};

export default Cards;
