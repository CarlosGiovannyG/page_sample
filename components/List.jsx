import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <div className="menu-container container col-9 ">
      <ul className="list-menu row justify-content-around text-center">
        <li>
          <Link href="/">
            <span>PROPIEDADES</span>
          </Link>
          <ul>
            <li>
            <Link href="/">
            Nuevas Construcciones
            </Link>
            </li>
            <li>
              <Link href="/">Usados</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <span>FINANCIAMIENTO</span>
          </Link>
          <ul>
            <li>
              <Link href="/">Financiamiento para extranjeros</Link>
            </li>
            <li>
              <Link href="/">Financiamiento para residentes</Link>
            </li>
            <li>
              <Link href="/">Calculadora de Hipotecas</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <span>SERVICIOS</span>
          </Link>
          <ul>
            <li>
              <Link href="/">Asesoría Contable y Legal</Link>
            </li>
            <li>
              <Link href="/">Prestamos Hipotecarios para extranjeros</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <span>ADMINISTRACIÓN DE PROPIEDADES</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>RENTA EN DÓLARES</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>NOSOTROS</span>
          </Link>
          <ul>
            <li>
              <Link href="/">Quienes somos</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <span>CONTÁCTENOS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
