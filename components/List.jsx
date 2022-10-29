import React from "react";

const List = () => {
  return (
    <div className="menu-container container col-9 ">
      <ul className="list-menu row justify-content-around text-center">
        <li>
          <a href="/">
            <span>PROPIEDADES</span>
          </a>
          <ul>
            <li>
              <a href="/">Nuevas Construcciones</a>
            </li>
            <li>
              <a href="/">Usados</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <span>FINANCIAMIENTO</span>
          </a>
          <ul>
            <li>
              <a href="/">Financiamiento para extranjeros</a>
            </li>
            <li>
              <a href="/">Financiamiento para residentes</a>
            </li>
            <li>
              <a href="/">Calculadora de Hipotecas</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <span>SERVICIOS</span>
          </a>
          <ul>
            <li>
              <a href="/">Asesoría Contable y Legal</a>
            </li>
            <li>
              <a href="/">Prestamos Hipotecarios para extranjeros</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <span>ADMINISTRACIÓN DE PROPIEDADES</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>RENTA EN DÓLARES</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>NOSOTROS</span>
          </a>
          <ul>
            <li>
              <a href="/">Quienes somos</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <span>CONTÁCTENOS</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default List;
