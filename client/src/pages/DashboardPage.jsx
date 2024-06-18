import Menu from "../components/Menu.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import * as images from "../img/index.js";
import { motion } from "framer-motion";

function DashboardPage({delay}) {
  return (
    <>
      <header className="">
        <Menu />
      </header>
      <main className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 1 }}
          >
            <section className="flex justify-center py-3">
              <Carousel />
            </section>
            <div className="flex justify-center">
            </div>
          </motion.div>

          <section className="flex justify-center mt-10">
            <motion.div
              className="flex items-center p-2  w-[90%] rounded-md h-auto max-[541px]:flex-col max-[541px]:justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1 }}
            >
              <article className="w-[65%] items-center text-center max-[541px]:w-[100%] flex flex-col">
                <div className=" mb-2 w-[40%]">
                  <h1 className="text-3xl font-bold p-1 max-[430px]:text-xl">
                    ¿Por qué renovar tus llantas?
                    <hr className="border-b-2 mt-2 border-yellow-400 rounded-md drop-shadow-md w-auto" />
                  </h1>
                  
                </div>

                <p className="w-[90%] max-[853px]:text-sm max-[541px]:text-justify max-[541px]:w-[100%] max-[434px]:text-xs">
                  El costo de renovar una llanta es menor que el de una llanta
                  nueva y se obtiene el mismo rendimiento por kilómetro. Además,
                  el proceso de renovado Bandag ha comprobado ser tan eficaz que
                  en México se renuevan con Bandag aproximadamente 350 mil
                  llantas al año. Mantener tus llantas funcionando por más
                  tiempo permitirá a tus transportes trabajando de manera
                  productiva, obteniendo más ganancias por una fracción de su
                  costo. El proceso de renovado de Bandag es eficiente y
                  comprobado, y mantiene a tus camiones rodando.
                </p>
              </article>
              <article className="w-[35%] flex justify-center max-[541px]:w-[100%]">
                <img
                  src={images.main1}
                  alt="main1"
                  className="w-[90%] mt-1 max-[430px]:w-[80%] max-[853px]:w-[100%] mb-2 rounded-md shadow-md"
                />
              </article>
            </motion.div>
          </section>
          <section className="mt-10 flex justify-center">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1 }}
            >
              {/* <div>
                <h1 className="text-3xl font-bold">Sobre nosotros</h1>
                <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md" />
              </div> */}
            </motion.div>
          </section>
        </motion.div>
      </main>
    </>
  )
}

export default DashboardPage