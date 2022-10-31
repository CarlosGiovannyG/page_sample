import Link from "next/link";
import React from "react";
import { useSearch } from "../context";

const Card = ({ dato }) => {
  const { isLocation } = useSearch();
  return (
    <>
      { dato.json_data.photos.length ? (
        <div className="container-card">
          <Link className="card-link" href={"/preconstruccion"}>
            <img
              className="card-image"
              src={dato.json_data.photos[0]}
              alt="imagen"
            />
            <div className="card-title">{dato.name}</div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Card;
