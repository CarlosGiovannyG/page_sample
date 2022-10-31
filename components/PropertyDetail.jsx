import Image from "next/image";
import React from "react";

const PropertyDetail = ({ loading, data }) => {

  return (
    <>
      {!loading && data && (
        <div>
          {data.map((dato) => (
            <div>
              <h3>{dato.json_data.property.subType}</h3>
              <Image src={dato.json_data.photos[0]} width={300} height={300} />
              <h3>{dato.json_data.property.listDate}</h3>
              <div>
                <span>{dato.json_data.address.full}</span>
                <span>{dato.json_data.address.city}</span>
                <span>{dato.property_yearBuilt}</span>
                <span>{dato.json_data.property.area}</span>
                <span>{dato.json_data.property.bathsFull}</span>
                <span>{dato.property_subdivision}</span>
                <span>{dato.geo_county}</span>
                <span>{dato.address}</span>
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
