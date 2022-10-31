import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSearch } from "../context";

const Card = ({ dato }) => {
  const router = useRouter();
  const { isLocation } = useSearch();

  const searchHandler = (id) => {
    router.push(`/${isLocation}/${id}`);
  };

  return (
    <>
      {dato.json_data.photos.length ? (
        <div className="container-card">
          <img
            onClick={() => searchHandler(dato.url)}
            className="card-image"
            src={dato.json_data.photos[0]}
            alt="imagen"
          />
          <div className="card-title">{dato.name}</div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
