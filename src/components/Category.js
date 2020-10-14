import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/styles/HomeProduct.css';
import { Link } from 'react-router-dom';

function Category(props) {
  
  const datosca = props.datosca;

  return (
    <div className=" ">
      <div className="">Categorias</div>
      <div className="">
        {datosca.map((cat) => {
          return (
            <div key={cat.id} className="listacategoria">
              <Link to={'/categorias/' + cat.id}>
                {cat.nombrecategoria}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
