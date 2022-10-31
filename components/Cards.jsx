import React from "react";
import Card from "./Card";
const Cards = ({ title, data }) => {
  return (
    <>
      <div className="cards">
        <h2 className="container-cards-title">{title}</h2>
        {data && !data.length ? (
          <div className="cards">
            <h3 className="container-cards-title">
              NO hay información para mostrar
            </h3>
            <h3>Intenta otra búsqueda</h3>
          </div>
        ) : (
          <section className="container-cards">
            {data && data.map((dato, index) => (
              <Card key={index} dato={dato} />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Cards;
