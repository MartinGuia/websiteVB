import React from "react";
import { Link } from "react-router-dom";

function Card({ imagen, titulo, to }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link to={to} className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-br from-slate-800 to-slate-900">
      <div
        
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-auto"
          style={{
            minHeight: "200px",
            maxHeight: "250px",
            transition: "transform 0.3s ease-in-out",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <p className="text-yellow-400 text-lg font-bold text-center">
            {titulo}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
