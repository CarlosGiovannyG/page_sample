import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context";

const Search = ({ className, position }) => {
  const {
    typeSearch,
    setCategorySearch,
    categorySearch,
    citySearch,
    submitHandler,
    handleClick,
    handleSubmit,
  } = useSearch();
  return (
    <div className={`${className} container container-fluid col-8`}>
      {position === "home" && (
        <div className="container-buttons">
          {["Usados", "Nuevos", "Rentar"].map((type) => (
            <button
              key={type}
              onClick={() => handleClick(type)}
              className={
                typeSearch === type ? "button-search-active" : "button-search"
              }
            >
              <span className="span-search">{type}</span>
            </button>
          ))}
        </div>
      )}
      <form className="formSearch col-12">
        <div className="container-select">
          <label htmlFor="select_search">Buscar por: </label>
          <select
            className="selectSearch"
            id="select_search"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          >
            {["Ciudad", "Código Postal", "Condado"].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input
          className="inputSearch"
          type="text"
          name="search"
          onChange={(e) => handleSubmit(e.target.value)}
          value={citySearch}
          placeholder="Selecciona una opción y has tu búsqueda"
        />
        <button
          onClick={submitHandler}
          type="submit"
          className="btnSearch text-white"
        >
          <FaSearch size={25} />
        </button>
      </form>
      <div className="row wrapper"></div>
    </div>
  );
};

export default Search;

/*

 <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h2 className="mb-3">Buscar Habitación</h2>
            <div className="form-group">
              <label htmlFor="location_field">Location</label>
              <input
                type="text"
                className="form-control"
                id="location_field"
                placeholder="bogota"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guest_field">No. de Huéspedes</label>
              <select
                className="form-control"
                id="guest_field"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="room_type_field">Tipo de Habitación</label>
              <select
                className="form-control"
                id="room_type_field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {["King", "Single", "Twins"].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-block py-2">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>




*/
