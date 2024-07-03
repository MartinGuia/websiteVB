import Menu from "../components/Menu.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import * as images from "../img/index.js";
import { motion } from "framer-motion";
import HomePage from "./HomePage.jsx";
import ButtonFloating from "../components/ui/ButtonFloating.jsx";

function DashboardPage({ delay }) {
  // Configura el número de WhatsApp y el mensaje predefinido
  const phoneNumber = "524641407721"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría solicitar una cotización.";
  return (
    <>
      <header className="">
        <Menu />
      </header>
      <main className="">
        <HomePage />
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
            <div className="flex justify-center"></div>
          </motion.div>

          <section className="flex justify-center mt-10">
            <motion.div
              className="flex items-center p-2  w-[90%] h-auto max-[541px]:flex-col max-[541px]:justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1 }}
            >
              <article className="w-[65%] items-center text-center max-[541px]:w-[100%] flex flex-col">
                <div className=" mb-2 w-[45%] max-[1280px]:w-[80%] max-[920px]:w-[100%]">
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
          <section className="mt-10 flex justify-center items-center mb-2">
            <motion.div
              className="bg-white w-[85%] rounded-lg px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1 }}
            >
              <article className="text-center flex flex-col items-center">
                <div className="w-[60%]">
                  <h1 className="text-3xl font-bold text-black">
                    <span className="text-yellow-400">Alta calidad </span>en
                    marcas premium
                  </h1>
                  <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-auto mt-2" />
                </div>
                <div className="mt-4">
                  <p className="text-black text-center">
                    En nuestra empresa llantera nos enorgullecemos de ofrecer
                    únicamente llantas premium de la más alta calidad, al igual
                    que las reconocidas marcas Firestone y Bridgestone. Nuestro
                    compromiso es asegurar que cada llanta que vendemos cumpla
                    con los estándares más exigentes de durabilidad, seguridad y
                    rendimiento. Ya sea que necesites mejorar el agarre en
                    carreteras mojadas, incrementar la eficiencia de combustible
                    o simplemente asegurar un viaje suave y confortable,
                    nuestras llantas premium están diseñadas para satisfacer tus
                    necesidades.
                  </p>
                </div>
              </article>
              <article className="flex justify-around mt-4 max-[390px]:w-[50%]">
                <img className="" src={images.bridgestone1} alt="" />
                <img src={images.firestone1} alt="" />
              </article>
            </motion.div>
          </section>
          <section>
            <ButtonFloating phoneNumber={phoneNumber} message={message} />
          </section>
        </motion.div>
      </main>
    </>
  );
}

export default DashboardPage;
