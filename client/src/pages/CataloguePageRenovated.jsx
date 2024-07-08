import Menu from "../components/Menu.jsx";
import * as images from "../img/index.js";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RenovatedAllPosition from "../components/ui/RenovatedAllPosition.jsx";
import RenovatedTraction from "../components/ui/RenovatedTraction.jsx";
import RenovatedFreeAxle from "../components/ui/RenovatedFreeAxle.jsx";

function CataloguePageRenovated({ delay }) {
    const [vista, setVista] = useState("todaPosicion");

    const TodaPosicion = () => (
      <>
        <h1 className="font-bold text-4xl text-center">Toda posición</h1>
        <RenovatedAllPosition/>
      </>
    );
    const Traccion = () => (
      <>
        <h1 className="font-bold text-4xl text-center">Tracción</h1>
        <RenovatedTraction/>
      </>
    );
    const EjeLibre = () => (
      <>
        <h1 className="font-bold text-4xl text-center">Eje libre</h1>
        <RenovatedFreeAxle/>
      </>
    );
  
    // Funciones para cambiar la vista
    const mostrarTodaPosicion = () => setVista("todaPosicion");
    const mostrarTraccion = () => setVista("traccion");
    const mostrarEjeLibre = () => setVista("ejeLibre");
  
    let contenido;
    if (vista === "todaPosicion") {
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
        <main className="">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section className="flex flex-col items-center mt-4">
              <div>
                <h1 className="flex justify-center text-3xl font-bold">
                  Renovado
                </h1>
                <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-auto mt-2" />
              </div>
              <div className="relative bottom-6 right-[40%]">
                <Link to="/catalogue">
                  <button className="bg-white rounded-full p-1 shadow-lg shadow-slate-800/60">
                    <img src={images.flecha} className="size-6" alt="" />
                  </button>
                </Link>
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
                      Este tipo de llantas puede ser utilizado en todos los ejes
                      del vehículo.
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
                      patines.
                    </p>
                  </button>
                </div>
              </motion.div>
            </section>
  
            {/* Tarjetas de catalogo */}
            <section className="mt-5 mb-2">{contenido}</section>
          </motion.div>
        </main>
      </>
    );
}

export default CataloguePageRenovated;
