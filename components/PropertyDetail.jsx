import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PropertyDetail = ({ loading, data }) => {
  return (
    <>
      {!loading && data && (
        <div className="detail">
          {data.map((dato) => (
            <div key={dato.url} className="detail-container">
              <div className="detail-title">
                <span>{dato.json_data.property.subType}</span>
              </div>
              <div className="detail-title">
                <span>{dato.name}</span>
              </div>
              <div className="detail-image">
                <Carousel
                  touch={false}
                  keyboard={true}
                  fade
                  slide={false}
                  indicators={false}
                >
                  {dato.json_data.photos.map((img, index) => (
                    <Carousel.Item interval={3000} key={index}>
                      <Image
                        className="d-block"
                        src={img}
                        width={1000}
                        height={500}
                      />
                      <Carousel.Caption>
                        <h3>{dato.name}</h3>
                        <p>{dato.json_data.address.full}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="detail-title">
                <span>{dato.property_area}</span>
              </div>
              <div className="container-data">
                <span className="container-data-item">
                  {dato.json_data.address.full}
                </span>
                <span className="container-data-item">
                  {dato.json_data.address.city}
                </span>
                <span className="container-data-item">
                  {dato.property_yearBuilt}
                </span>
                <span className="container-data-item">
                  {dato.json_data.property.area}
                </span>
                <span className="container-data-item">
                  {dato.json_data.property.bathsFull}
                </span>
                <span className="container-data-item">
                  {dato.property_subdivision}
                </span>
                <span className="container-data-item">{dato.geo_county}</span>
                <span className="container-data-item">{dato.address}</span>
              </div>
              <div className="container-data-comment">
                <span>{dato.json_data.remarks}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PropertyDetail;
