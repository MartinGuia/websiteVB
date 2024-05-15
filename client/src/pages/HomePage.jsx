import Menu from "../components/Menu.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import * as images from "../img/index.js";

function HomePage() {
  return (
    <>
      <header className="">
        <Menu />
      </header>
      <main className="">
        <section className="flex justify-center shadow-lg bg-blue-950 py-3">
          <Carousel />
        </section>
        <section className="flex justify-center mt-14">
          <div className="flex items-center p-2  w-[90%] rounded-md h-auto max-[541px]:flex-col max-[541px]:justify-center">
            <article className="w-[65%] text-center max-[541px]:w-[100%]">
              <h1 className="text-3xl font-bold mb-2 p-1 max-[430px]:text-xl">
                ¿Por qué renovar tus llantas?
              </h1>
              <p className="w-[90%] max-[853px]:text-sm max-[541px]:text-justify max-[541px]:w-[100%] max-[434px]:text-xs">
                El costo de renovar una llanta es menor que el de una llanta
                nueva y se obtiene el mismo rendimiento por kilómetro. Además,
                el proceso de renovado Bandag ha comprobado ser tan eficaz que
                en México se renuevan con Bandag aproximadamente 350 mil llantas
                al año. Mantener tus llantas funcionando por más tiempo
                permitirá a tus transportes trabajando de manera productiva,
                obteniendo más ganancias por una fracción de su costo. El
                proceso de renovado de Bandag es eficiente y comprobado, y
                mantiene a tus camiones rodando.
              </p>
            </article>
            <article className="w-[35%] flex justify-center max-[541px]:w-[100%]">
              <img
                src={images.main1}
                alt="main1"
                className="w-[90%] mt-1 max-[430px]:w-[80%] max-[853px]:w-[100%] mb-2 rounded-md shadow-md"
              />
            </article>
          </div>
        </section>
        <section className="mt-10 flex justify-center">
          <div>
            <h1 className="text-3xl font-bold">Sobre nosotros</h1>
            <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md" />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
