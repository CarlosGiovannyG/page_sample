import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context";

const Search = ({ className, position }) => {
  const {
    typeSearch,
    setTypeSearch,
    categorySearch,
    setCategorySearch,
    citySearch,
    setCitySearch,
    motive,
    setMotive,
    typeProperty,
    setTypeProperty,
    submitHandler,
  } = useSearch();
  return (
    <div className={`${className}`}>
      {position === "home" ? (
        <>
          <div className="container-buttons">
            {["Casas", "Apartamentos"].map((type) => (
              <button
                key={type}
                onClick={() => setTypeProperty(type)}
                className={
                  typeProperty === type ? "button-search-active" : "button-search"
                }
              >
                <span
                  className={
                    typeProperty === type ? "span-search-active" : "span-search"
                  }
                >
                  {type}
                </span>
              </button>
            ))}
          </div>
          <div className="container-buttons">
            {["Usados", "Nuevos"].map((type) => (
              <button
                key={type}
                onClick={() => setTypeSearch(type)}
                className={
                  typeSearch === type ? "button-search-active" : "button-search"
                }
              >
                <span
                  className={
                    typeSearch === type ? "span-search-active" : "span-search"
                  }
                >
                  {type}
                </span>
              </button>
            ))}
          </div>
          <div className="container-buttons">
            {["Rentar", "Comprar"].map((type) => (
              <button
                key={type}
                onClick={() => setMotive(type)}
                className={
                  motive === type ? "button-search-active" : "button-search"
                }
              >
                <span
                  className={
                    motive === type ? "span-search-active" : "span-search"
                  }
                >
                  {type}
                </span>
              </button>
            ))}
          </div>
          <div className="container-buttons">
            {["Ciudad", "Código Postal", "Condado"].map((category) => (
              <button
                key={category}
                onClick={() => setCategorySearch(category)}
                className={
                  categorySearch === category
                    ? "button-search-two-active"
                    : "button-search-two"
                }
              >
                <span
                  className={
                    categorySearch === category
                      ? "span-search-active"
                      : "span-search"
                  }
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="search-title">
          <span>Busca por ciudad</span>
        </div>
      )}
      {position === "casas" ? (
        <>
          <div className="container-buttons">
            {["Usados", "Nuevos"].map((type) => (
              <button
                key={type}
                onClick={() => setTypeSearch(type)}
                className={
                  typeSearch === type ? "button-search-active" : "button-search"
                }
              >
                <span
                  className={
                    typeSearch === type ? "span-search-active" : "span-search"
                  }
                >
                  {type}
                </span>
              </button>
            ))}
          </div>
          <div className="container-buttons">
            {["Rentar", "Comprar"].map((type) => (
              <button
                key={type}
                onClick={() => setMotive(type)}
                className={
                  motive === type ? "button-search-active" : "button-search"
                }
              >
                <span
                  className={
                    motive === type ? "span-search-active" : "span-search"
                  }
                >
                  {type}
                </span>
              </button>
            ))}
          </div>
          <div className="container-buttons">
            {["Ciudad", "Código Postal", "Condado"].map((category) => (
              <button
                key={category}
                onClick={() => setCategorySearch(category)}
                className={
                  categorySearch === category
                    ? "button-search-two-active"
                    : "button-search-two"
                }
              >
                <span
                  className={
                    categorySearch === category
                      ? "span-search-active"
                      : "span-search"
                  }
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="search-title">
          <span>Busca por ciudad</span>
        </div>
      )}

      <form className="formSearch col-12">
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
