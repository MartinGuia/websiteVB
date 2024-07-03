import React from "react";
import Menu from "../components/Menu";
import Card from "../components/ui/Card";
import * as images from "../img/index.js";
import ButtonFloating from "../components/ui/ButtonFloating.jsx";

function CataloguePage() {
  // Configura el número de WhatsApp y el mensaje predefinido
  const phoneNumber = "524641407721"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría solicitar una cotización.";
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
      <header>
        <Menu />
      </header>
      <main>
        <section className="flex flex-col items-center mt-4">
          <article className="w-[45%] text-center max-[520px]:w-[80%]">
            <h1 className="text-3xl font-bold text-white">
              Un<span className="text-yellow-400"> stock variado </span>para
              todo tipo de terreno
            </h1>
            <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-auto mt-2" />
          </article>
          <article className="w-[70%] mt-4 max-[520px]:w-[90%]">
            <p className="text-center text-lg">
              En nuestro sitio web, nos enorgullece ofrecer un conocimiento
              profundo del mercado y una amplia gama de productos. Desde llantas
              renovadas hasta llantas nuevas, contamos con un variado stock que
              se adapta a tus necesidades. Descubre cómo podemos ayudarte a
              encontrar la opción perfecta para tu vehículo y presupuesto
            </p>
          </article>
        </section>
        <section className="mt-10">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 max-w-5xl">
              <Card
                to={`/catalogueNew`}
                imagen={images.FD663}
                titulo="Llanta Nueva"
              />
              <Card
                to={`/catalogueRenovated`}
                imagen={images.bandaRenovada}
                titulo="Banda Renovada"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center mt-4">
            <h1 className="flex justify-center text-3xl font-bold mt-4">
              Aplicación
            </h1>
            <div className="w-[80%] bg-slate-100 mt-4 shadow-lg rounded-lg mb-2">
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
        </section>
        <section>
          <ButtonFloating phoneNumber={phoneNumber} message={message} />
        </section>
      </main>
    </>
  );
}

export default CataloguePage;
