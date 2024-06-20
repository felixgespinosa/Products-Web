import Tarjeta from "./Tarjeta";

import React, { useState } from "react";
import Header from "./Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Producto from "./routes/Producto";
import Lista from "./Lista";
import Form from "react-bootstrap/Form";
export default function SearchPage(props) {
  const [filtro, setFiltro] = useState();
  const [datos, setDatos] = useState(props.theproducts);

  const [selector, setSelector] = useState();

  function getRepetidos() {
    let categorias = props.theproducts?.map((elem) => elem?.category); //array de categorias:
    var temporal = [];
    var repetidos = [];
    categorias?.forEach((value, index) => {
      temporal = Object.assign([], categorias);
      temporal.splice(index, 1);
      if (temporal.indexOf(value) !== -1 && repetidos.indexOf(value) === -1)
        repetidos.push(value);
    });
    return repetidos;
  }

  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <h2 id="catálogo">Catálogo:</h2>
      {/*-----------------------FILTRAR----------------------- */}
      <div id="filtrar">
        Filtrar:
        <Form.Select
          aria-label=""
          id="selector"
          value={selector}
          onChange={(e) => {
            if (e.target.value === "All") {
              setDatos(props.theproducts);
            } else {
              setDatos(
                props.theproducts?.filter((elem) =>
                  elem.category?.includes(e.target.value)
                )
              );
            }
          }}
        >
          <option value={selector}>All</option>

          {getRepetidos()?.map((e) => {
            return <option value={selector}>{e}</option>;
          })}
        </Form.Select>
      </div>

      {/*-----------------------BUSCAR----------------------- */}
      <div id="buscar">
        Buscar:
        <input
          id="filtro"
          placeholder="Escriba lo que quiere buscar"
          type="text"
          value={filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
          }}
          required
        />
        <button
          id="buscador"
          onClick={() => {
            setDatos(
              props.theproducts?.filter((elem) =>
                elem.title?.toLowerCase().includes(filtro.toLowerCase())
              )
            );
          }}
        >
          Buscar
        </button>
      </div>
      {/*-----------------------LISTA DE RESULTADOS-----------------------*/}

      <div>
        <Lista datos={datos} />
      </div>
    </div>
  );
}
