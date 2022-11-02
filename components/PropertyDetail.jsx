import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PropertyDetail = ({ loading, data }) => {
  return (
    <>
      {!loading && data && (
        <div className="container-detail" >
          <h2 className="title-detail">Detalles de la búsqueda </h2>
          <div className="detail">
            {data.map((dato) => (
              <div key={dato.url} className="detail-container">
                <div className="detail-title">
                  <span>
                    {`Tipo de vivienda:  ${dato.json_data.property.subType} `}{" "}
                  </span>
                </div>
                <div className="detail-image">
                  <Carousel
                    touch={true}
                    keyboard={true}
                    slide={true}
                    indicators={false}
                  >
                    {dato.json_data.photos.map((img, index) => (
                      <Carousel.Item key={index}>
                        <Image
                          className="d-block"
                          src={img}
                          width={1000}
                          height={500}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className="detail-title">
                  <span>Precio: ${dato.naturalPrice}</span>
                </div>
                <div className="container-data">
                  <span className="container-data-item">
                    Dirección: {dato.json_data.address.full}
                  </span>
                  <span className="container-data-item">
                    Ciudad: {dato.json_data.address.city}
                  </span>
                  <span className="container-data-item">
                    Año de construcción: {dato.property_yearBuilt}
                  </span>
                  <span className="container-data-item">
                    Código postal: {dato.postalCode}
                  </span>
                  <span className="container-data-item">
                    Baños: {dato.json_data.property.bathsFull}
                  </span>
                  <span className="container-data-item">
                    Subdivisión {dato.property_subdivision}
                  </span>
                  <span className="container-data-item">
                    Condado: {dato.geo_county}
                  </span>
                  <span className="container-data-item">
                    Area: {dato.property_area}
                  </span>
                </div>
                <div className="container-data-comment">
                  <span>{dato.json_data.remarks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyDetail;
