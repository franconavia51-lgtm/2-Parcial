/* src/components/Organismos.js */
import React from 'react';

export const JiraCard = ({ state, colorClass, titulo, codigo, descripcion }) => {
  return (
    <div className="card-container">
      {/* Cabecera con color dinámico */}
      <div className={`card-header ${colorClass}`}>
        <div className="header-left">
          <div className="circle-number">1</div>
          <h3 className="card-title">{titulo}</h3>
        </div>
        <span className="card-code">{codigo}</span>
      </div>

      {/* Cuerpo blanco */}
      <div className="card-body">
        <p className="description">{descripcion}</p>
        <div className="card-footer">
          <span>Last Updated</span>
          <span>3/8/2020</span>
        </div>
      </div>
    </div>
  );
};