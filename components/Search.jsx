import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context";

const Search = ({ className }) => {
  

  const {
    typeSearch,
    motive,
    typeProperty,
    motiveHandler,
    typePropertyHandler,
    typeSearchHandler,
    setInputSearch,
    inputSearch
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
        {/* <div className="container-buttons">
          <label htmlFor="room_type_field">Buscar por:</label>
          <select
            className="button-search"
            id="room_type_field"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          >
            {["","Ciudad", "Código Postal", "Condado"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div> */}
        
      </div>
      <form className="formSearch col-12">
        <input
          className="inputSearch"
          type="text"
          id="search"
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Busca por ciudad, código postal o condado"
        />
       
      </form>
      <span className="info-filter">
      Puedes filtrar por:  Area - Dirección - Código Postal - Ciudad - Año de creación Tipo de Vivienda
      </span>
    </div>
  );
};

export default Search;
