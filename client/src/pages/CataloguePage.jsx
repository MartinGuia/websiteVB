import Menu from "../components/Menu.jsx";
import * as images from "../img/index.js";
import { useState } from "react";
import CatalogueTodaPosicion from "../components/ui/CatalogueTodaPosicion.jsx";
import CatalogueTraccion from "../components/ui/CatalogueTraccion.jsx";
import CatalogueEjeLibre from "../components/ui/CatalogueEjeLibre.jsx";
import { motion } from "framer-motion";

function CataloguePage({delay}) {
  const [vista, setVista] = useState("major");
 

  const Info = [
    {
      id: 1,
      title: "Larga distancia",
      img: [images.lDistancia],
      description:
        "Recorridos de hasta 400 km. o más, sobre caminos pavimentados. Permiten realizar maniobras en terrenos donde las curvas cerradas son mínimas. Se utilizan para viajes de grandes distancias, con una baja posibilidad de detenerse.",
    },
    {
      id: 2,
      title: "Regional",
      img: [images.Regional],
      description:
        "Recorridos de hasta 400 km. Son ideales para realizar maniobras continuas, frenados excesivos, paradas y arranques.",
    },
    {
      id: 3,
      title: "Recolección y entrega",
      img: [images.ejeLibre],
      description:
        "Ideales para realizar recorridos dentro de las ciudades que se ven afectados por frecuentes paros y arranques. Permiten realizar maniobras, pese a la dificultad de los trazos en calles y avenidas (recorridos de 30 a 50 km).",
    },
    {
      id: 4,
      title: "Urbano",
      img: [images.Urbano],
      description:
        "El uso de estos vehículos se basa en recorridos dentro de la ciudad, alrededor de 30-50km. Realizan paros y arranques frecuentes. Permite realizar maniobras propias, pese a la dificultad de los trazos en calles y avenidas. ",
    },
    {
      id: 5,
      title: "ON/OFF",
      img: [images.On_Off],
      description:
        "Aplica para vehículos que circulan aproximadamente 60% del tiempo de carreteras pavimentadas y 40% fuera de ellas.",
    },
    {
      id: 6,
      title: "Off-road",
      img: [images.off_road],
      description:
        "Se les puede encontrar alrededor de un 70% del tiempo fuera de carretera y el 30% restante, sobre la misma.",
    },
  ];

  // Componentes para cada vista
  const Major = () => (
    <>
      {/* Section de la simbología de las posiciones  */}
      <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 1 }}
    >
      <div className="flex flex-col items-center mt-4">
        <h1 className="flex justify-center text-3xl font-bold mt-4">
          Aplicación
        </h1>
        <div className="w-[80%] bg-slate-100 mt-4 shadow-lg rounded-lg border-[1px]">
          {Info.map((inf) => (
            <article className="flex mt-5 mb-5" key={inf.id}>
              <img
                src={inf.img}
                alt=""
                className="w-[3%] h-[2%] max-[853px]:w-[10%]"
              />
              <span className="ml-4">
                <h1 className="font-bold text-blue-800 max-[540px]:text-sm">
                  {inf.title}
                </h1>
                <p className="text-sm text-blue-500 font-semibold max-[540px]:text-xs">
                  {inf.description}
                </p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
      
    </>
  );
  const TodaPosicion = () => (
    <>
      <CatalogueTodaPosicion />
    </>
  );
  const Traccion = () => (
    <>
      <CatalogueTraccion />
    </>
  );
  const EjeLibre = () => (
    <>
      <CatalogueEjeLibre />
    </>
  );

  // Funciones para cambiar la vista
  const mostrarMajor = () => setVista("major");
  const mostrarTodaPosicion = () => setVista("todaPosicion");
  const mostrarTraccion = () => setVista("traccion");
  const mostrarEjeLibre = () => setVista("ejeLibre");

  let contenido;
  if (vista === "major") {
    contenido = <Major />;
  } else if (vista === "todaPosicion") {
    contenido = <TodaPosicion />;
  } else if (vista === "traccion") {
    contenido = <Traccion />;
  } else if (vista === "ejeLibre") {
    contenido = <EjeLibre />;
  }

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section className="flex flex-col items-center mt-4">
            <div>
              <h1 className="flex justify-center text-3xl font-bold">
                Posición
              </h1>
            </div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1 }}
            >
              <div className="flex justify-around mt-5 max-[430px]:flex-col max-[430px]:items-center">
              <button
                onClick={mostrarTodaPosicion}
                className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%] max-[430px]:mb-4"
              >
                <img src={images.todaPosicion} alt="" className="mt-1" />
                <h1 className="font-bold">Toda Posición</h1>
                <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
                  Este tipo de llantas puede ser utilizado en todos los ejes del
                  vehículo.
                </p>
              </button>

              <button
                onClick={mostrarTraccion}
                className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%] max-[430px]:mb-4"
              >
                <img src={images.traccion} alt="" className="mt-1" />
                <h1 className="font-bold">Tracción</h1>
                <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
                  Neumático ideal para ejes de tracción.
                </p>
              </button>

              <button
                onClick={mostrarEjeLibre}
                className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%]"
              >
                <img src={images.ejeLibre} alt="" className="mt-1" />
                <h1 className="font-bold">Eje Libre</h1>
                <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
                  Neumático para uso exclusivo en semi-remolques, dollies y
                  patines.{" "}
                </p>
              </button>
            </div>
            </motion.div>
            
          </section>

          {/* Tarjetas de catalogo */}
          <section className="mt-5">{contenido}</section>
        </motion.div>
      </main>
    </>
  );
}

export default CataloguePage;
