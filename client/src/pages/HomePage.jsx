import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as images from "../img/index.js";
import "animate.css";

function HomePage() {
  // Define el arreglo de textos
  const textos = [
    {
      mito: "Un renovado no se compara con una llanta nueva",
      realidad:
        "El renovado tiene un rendimiento igual o mejor que el de una llanta nueva y supera por mucho a las llantas económicas. Además, al renovar puedes alargar la vida útil de la llanta ya que puede someterse a este proceso más de una vez y su precio es más barato que el de una llanta nueva",
    },
    {
      mito: "Los renovados son los trozos de la banda que se encuentran tirados en la carretera",
      realidad:
        "Esos trozos de banda con alambre que encuentras en la carretera no son parte de un renovado, pues contiene cuerdas de alambre que pertenecen al casco.",
    },
    // Agrega más objetos con mitos y realidades si es necesario
  ];

  // Define el estado para el índice actual
  const [indice, setIndice] = useState(0);

  // Actualiza el índice cada vez que se cargue la página
  useEffect(() => {
    const nuevoIndice = Math.floor(Math.random() * textos.length);
    setIndice(nuevoIndice);
  }, []);

  return (
    <main >
      <div className="flex bg-gradient-to-br from-slate-800 to-slate-900 h-screen max-[912px]:flex-col max-[912px]:justify-start">
        <section className="w-[50%] flex flex-col justify-center items-center animate__animated animate__slideInUp max-[912px]:w-[100%] max-[912px]:mt-10">
          <article className="flex flex-col w-[50%]">
            <div className="text-9xl font-bold flex max-[1368px]:text-8xl max-[540px]:text-6xl max-[376px]:text-5xl">
              <h1 className="">Vi</h1>
              <h1 className=" text-yellow-500">ta</h1>
            </div>
            <div className="flex ml-[42%] text-9xl font-bold max-[1368px]:text-8xl max-[540px]:text-6xl max-[376px]:text-5xl">
              <h1 className="">Ba</h1>
              <h1 className=" text-yellow-500">jío</h1>
            </div>
          </article>
          <article className="mt-4 w-[50%] text-justify flex flex-col max-[540px]:w-[80%]">
            <div className="">
              <h1 className="text-2xl text-yellow-500 max-[1024px]:text-lg max-[912px]:text-2xl max-[376px]:text-xl">
                Mito
              </h1>
              <p className="max-[1024px]:text-sm max-[912px]:text-lg max-[376px]:text-sm">
                {textos[indice].mito}
              </p>{" "}
              {/* Muestra el mito correspondiente al índice */}
            </div>
            <div className="mt-2">
              <h1 className="text-2xl text-yellow-500 max-[1024px]:text-lg max-[912px]:text-2xl max-[376px]:text-xl">
                Realidad
              </h1>
              <p className="max-[1025px]:text-sm max-[912px]:text-lg max-[376px]:text-sm">
                {textos[indice].realidad}
              </p>{" "}
              {/* Muestra la realidad correspondiente al índice */}
            </div>
          </article>
        </section>
        <section className="w-[50%] flex flex-col justify-center items-center animate__animated animate__slideInUp max-[912px]:w-[100%] ">
          <article className="animate-spin-slow w-[55%] max-[1368px]:w-[50%] max-[912px]:w-[40%] max-[540px]:w-[30%] max-[912px]:mt-4">
            <img
              className="drop-shadow-2xl w-[100%]"
              src={images.rueda}
              alt=""
            />
          </article>
          <article className="mt-16 max-[540px]:mt-10">
            <button>
              <Link
                to="/quotation"
                className="cursor-pointer bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-lg px-14 py-4"
              >
                Solicitar cotización
              </Link>
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
