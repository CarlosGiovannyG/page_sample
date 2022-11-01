import React, { useState } from "react";
import Card from "./Card";
import Paginator from "./Paginator";
const Cards = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)


  


  const handlePaged = (e) => {
    if (e.target.id === 'back') {
        if (currentPage >= 1) {
            if (currentPage !== 1)
                setCurrentPage(currentPage - 1);
        }
    } else if (e.target.id === 'next') {
        if (itemsToShow.length >= 9)
            setCurrentPage(currentPage + 1);
    } else
        setCurrentPage(Number(e.target.value));
}

let itemsToShow = []
if (data && data.length) {
    itemsToShow = data.slice(((currentPage - 1) * itemsPerPage), (currentPage * itemsPerPage))
}

  return (
    <>
      <div className="cards">
        <h2 className="container-cards-title">{title}</h2>
        {!itemsToShow.length ? (
          <div className="cards">
            <h3 className="container-cards-title">
              NO hay información para mostrar
            </h3>
            <h3>Intenta otra búsqueda</h3>
          </div>
        ) : (
          <>
            <section className="container-cards">
              {itemsToShow &&
                itemsToShow.map((dato, index) => <Card key={index} dato={dato} />)}
            </section>
            <section className="container-paginator">
              <Paginator
               currentPage={currentPage}
               totalItems={data.length}
               itemsPerPage={itemsPerPage}
               handlePaged={handlePaged}
               />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
