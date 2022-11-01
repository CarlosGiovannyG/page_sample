import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context";

const Search = ({ className, position }) => {
  const {
    typeSearch,
    setCategorySearch,
    citySearch,
    setCitySearch,
    motive,
    typeProperty,
    motiveHandler,
    typePropertyHandler,
    submitHandler,
    typeSearchHandler
  } = useSearch();
  return (
    <div className={`${className}`}>
      <div className="container-select">
        <div className="container-buttons">
          <label htmlFor="room_type_field">Tipo de Inmueble</label>
          <select
            className="button-search"
            id="room_type_field"
            value={typeProperty}
            onChange={(e) => typePropertyHandler(e.target.value)}
          >
            {["","Casas", "Apartamentos"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="container-buttons">
          <label htmlFor="room_type_field">Transacción</label>
          <select
            className="button-search"
            id="room_type_field"
            value={motive}
            onChange={(e) => motiveHandler(e.target.value)}
          >
            {["","Rentar", "Comprar"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container-select">
        <div className="container-buttons">
          <label htmlFor="room_type_field">Condición</label>
          <select
            className="button-search"
            id="room_type_field"
            value={typeSearch}
            onChange={(e) => typeSearchHandler(e.target.value)}
          >
            {["","Usados", "Nuevos"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="container-buttons">
          <label htmlFor="room_type_field">Buscar por:</label>
          <select
            className="button-search"
            id="room_type_field"
            value={motive}
            onChange={(e) => setCategorySearch(e.target.value)}
          >
            {["","Ciudad", "Código Postal", "Condado"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <form className="formSearch col-12">
        <input
          className="inputSearch"
          type="text"
          name="search"
          onChange={(e) => setCitySearch(e.target.value)}
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
