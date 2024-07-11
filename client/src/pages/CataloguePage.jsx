import React from "react";
import Menu from "../components/Menu";
import Card from "../components/ui/Card";
import * as images from "../img/index.js";
import { Helmet } from "react-helmet";

function CataloguePage() {
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

  return (
    <>
      <Helmet>
        <title>Catalogo - VitaBajío</title>
        <link rel="canonical" href="https://vitabajio.com/" />
        <meta
          name="description"
          content="Encuentra la mejor selección de llantas nuevas y renovadas en nuestra tienda en línea. Somos expertos en la renovación y venta de bandas de llantas para ofrecerte calidad y seguridad en cada viaje."
        />
        <meta
          name="keywords"
          content="catálogo, llantas, nuevas, renovadas, modelos, distancia, VitaBajío"
        />
        <meta property="og:title" content="Catalogo - VitaBajío" />
        <meta
          property="og:description"
          content="Encuentra la mejor selección de llantas nuevas y renovadas en nuestra tienda en línea. Somos expertos en la renovación y venta de bandas de llantas para ofrecerte calidad y seguridad en cada viaje."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <header>
        <Menu />
      </header>
      <main>
        <section className="flex flex-col items-center mt-4">
          <article className="w-[45%] text-center max-[520px]:w-[80%]">
            <h1 className="text-3xl font-bold text-white">
              Un<strong className="font-bold text-yellow-400" > stock variado </strong>para
              todo tipo de terreno
            </h1>
            <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-auto mt-2" />
          </article>
          <article className="w-[70%] mt-4 max-[520px]:w-[90%]">
            <p className="text-center text-lg">
              "Explora nuestro catálogo en línea y descubre la mejor selección
              de llantas nuevas y bandas renovadas para tus vehículos. En
              nuestra página de catálogo, te ofrecemos la conveniencia de elegir
              entre dos opciones: una sección dedicada a las llantas nuevas,
              donde encontrarás una amplia variedad de modelos para
              satisfacer tus necesidades y preferencias; y otra sección dedicada
              a las bandas renovadas, donde podrás encontrar opciones económicas
              y de calidad para prolongar la vida útil de tus llantas. Confía en
              nuestra experiencia y encuentra la opción perfecta para optimizar
              el rendimiento y seguridad de tus vehículos. 
            </p>
          </article>
        </section>
        <section className="mt-10">
          <div className="flex justify-around ">
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-2">
              <Card
                to={`/catalogo-nuevo`}
                imagen={images.FD663}
                titulo="Llanta Nueva"
              />
              <Card
                to={`/catalogo-renovado`}
                imagen={images.bandaRenovada}
                titulo="Banda Renovada"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center mt-4">
            <p className="flex justify-center text-3xl font-bold mt-4">
              Aplicación
            </p>
            <div className="w-[80%] bg-slate-100 mt-4 shadow-lg rounded-lg mb-2">
              {Info.map((inf) => (
                <article className="flex mt-5 mb-5" key={inf.id}>
                  <img
                    src={inf.img}
                    alt="Tipo de camino"
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
        </section>
      </main>
    </>
  );
}

export default CataloguePage;
