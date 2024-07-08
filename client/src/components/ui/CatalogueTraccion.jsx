import Modal from "./Modal";
import * as images from "../../img/index.js";
import React, { useEffect, useRef, useState } from "react";

function CatalogueTraccion() {
  const CatalogueTraccion = [
    {
      id: 1,
      title: "M726 ELA",
      img1: [images.M726ELA],
      img2: [images.traccion],
      img4: [images.lDistancia],
      caract1:
        "- La nueva generación de M726 ELA ofrece hasta un 12% menos de resistencia al rodamiento, proporciona un desempeño superior por su diseño de alta rigidez, desgaste lento y uniforme gracias a su control de movimiento de costillas y bloques en la rotación.",
      caract2:
        "- Estrías en bloques para promover la tracción en caminos mojados.",
      caract3:
        "- Diseño de hombros continuos para combatir un desgaste irregular y la torsión de los bloques originando un desgaste más uniforme.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "285/75R24.5",
      ancho1: "285",
      ancho2: "285",
      ancho3: "287",
      ancho4: "287",
      profundidad1: "25.4",
      profundidad2: "25.4",
      profundidad3: "25.4",
      profundidad4: "25.4",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 2,
      title: "M726",
      img1: [images.M726],
      img2: [images.traccion],
      img4: [images.lDistancia],
      caract1:
        "- Diseñada con banda de rodadura extra profunda para proporcionar el mejor kilometraje y tracción.",
      caract2:
        "- Costillas d hpmbro continuas para distribuir el peso y el torque reduciendo el desgaste irregular.",
      caract3:
        "- Casco robusto para mejorar renovabilidad y con plataformas centrales para evitar daños por piedras enfocado.",
      medida1: "255/70R22.5",
      ancho1: "262",
      profundidad1: "20.6",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 3,
      title: "M713",
      img1: [images.M713],
      img2: [images.traccion],
      img4: [images.lDistancia],
      caract1:
        "- Está diseñada con un costado innovador INTELLISHAPE que ayuda a reducir el peso total de la llanta sin reducir durabilidad",
      caract2:
        "- Combinan baja resistencia al rodamiento y un casco de ahorro de energía para el uso eficiente del combustible.",
      caract3:
        "- Hombro continuo y diseño de banda de rodadura rígido combaten el desgaste irregular y reducen la resistencia al rodamiento.",
      caract4:
        "- Verificada con la regulación smartway de eficiencia de uso de combustible.",
      medida1: "295/75R22.5",
      ancho1: "287",
      profundidad1: "20.6",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 4,
      title: "M749",
      img1: [images.M749],
      img2: [images.traccion],
      img4: [images.lDistancia],
      caract1:
        "- Está diseñada con la tecnología ptentada WaveBelt para mejorar la durabilidad del casco y minimizar el estrés en los cinturones, manteniendo una pisada estable.",
      caract2:
        "- Tracción mejorada en superficies mojadas gracias a sus múltiples estrías onduladas.",
      caract3:
        "- Posee puentes de amarre en la banda para controlar el movimiento de los bloques disminuyendo el desgaste irregular.",
      caract4:
        "- Deflectores flexibles en ranuras que amortiguan el ruido producido por el aire al rodar la llanta.",
      medida1: "295/60R22.5",
      ancho1: "292",
      profundidad1: "18.3",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 5,
      title: "M729",
      img1: [images.M729],
      img2: [images.traccion],
      img3: [images.Regional],
      caract1:
        "- Diseño agresivo para mejor tracción en toda condición climática.",
      caract2:
        "- Casco optimizado para una mayor durabilidad y costillas protectoras laterales para reducir cortes e impactos.",
      caract3:
        "- Diseñado con compuesto especial para incrementar su vida original y propiciar una mayor renovabilidas.",
        medida1: "225/70R19.5",
        medida2: "285/70R19.5",
        medida3: "11R24.5",
        ancho1: "216",
        ancho2: "283",
        ancho3: "285",
        profundidad1: "15.1",
        profundidad2: "15.9",
        profundidad3: "23.8",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 6,
      title: "M736",
      img1: [images.M736],
      img2: [images.traccion],
      img3: [images.Regional],
      caract1:
        "- Nuevo compuesto que brinda mayor kilometraje.",
      caract2:
        "- Diseño de bloques convexos que reducen el desgaste irregular.",
      caract3:
        "- Mayor número de bloques lo cual brinda mayor adherencia y tracción, proporcionando alto desempeño en terrenos mojados.",
      caract4:
        "- Banda de rodadura con construcción CAPA-BASE lo cual genera menor calor y mayor durabilidad.",
        medida1: "275/80R22.5",
        medida2: "295/80R22.5",
        ancho1: "279",
        ancho2: "298",
        profundidad1: "22",
        profundidad2: "23.6",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 7,
      title: "L317",
      img1: [images.L317],
      img2: [images.traccion],
      img3: [images.off_road],
      caract1:
        "- Diseñada con robustas barras para proporcionar un excelente agarre, compuesto especial en la banda de rodadura para mayor resistencia a cortes, desgarres irregulares.",
      caract2:
        "- Diseño profundo para una mayor vida original.",
        medida1: "11R22.5",
        medida2: "13R22.5",
        medida3: "12.00R24",
        ancho1: "274",
        ancho2: "320",
        ancho3: "320",
        profundidad1: "24.6",
        profundidad2: "31.0",
        profundidad3: "31.0",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 8,
      title: "L320",
      img1: [images.L320],
      img2: [images.traccion],
      img3: [images.off_road],
      caract1:
        "- Diseñada con robustas barras para proporcionar un excelente agarre, compuesto especial en la banda de rodadura para mayor resistencia a cortes, desgarres irregulares.",
      caract2:
        "- Diseño profundo para una mayor vida original.",
        medida1: "11R22.5",
        medida2: "11R24.5",
        ancho1: "274",
        ancho2: "274",
        profundidad1: "24.6",
        profundidad2: "25.6",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 9,
      title: "FD694",
      img1: [images.FD694],
      img2: [images.traccion],
      img3: [images.lDistancia],
      caract1:
        "- Banda de rodamiento profunda y rígida: Ofrece larga durabilidad y desgaste uniforme, controlando el movimiento de las costillas y bloques durante la operación.",
      caract2:
        "- Diseño solido de hombro: Distribuye el peso y los esfuerzos por torque, para combatir el desgaste irregular y la torsión de los bloques, logrando un desgaste uniforme.",
      caract3:
        "- Ranuras anchas en centro y hombro: Evacúan el agua eficazmente para mejorar la tracción y ofrecer un agarre estable en superficies mojadas.",
      caract4:
        "- Expulsores de piedra: Reducen el atrapamiento de piedras en las ranuras disminuyendo los daños y oxidación en los cinturones y carcasa, mejorando la renovabilidad.",
        medida1: "11R22.5",
        medida2: "11R24.5",
        medida3: "295/75R22.5",
        medida4: "285/75R24.5",
        ancho1: "287",
        ancho2: "287",
        ancho3: "290",
        ancho4: "287",
        profundidad1: "23.8",
        profundidad2: "23.8",
        profundidad3: "23.8",
        profundidad4: "23.8",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 10,
      title: "FD663",
      img1: [images.FD663],
      img2: [images.traccion],
      img3: [images.Regional],
      caract1:
        "- Sus bloques profundos proporcionan un agarre excepcional.",
      caract2:
        "- Los canales laterales por la estructura de hombro abierto proporcionan las vías para una precisa evacuación de agua, lodo o escombros; asegurando el máximo contacto con la carretera.",
      caract3:
        "- Los bloques adyacentes unidos por la tecnología TIE-BARS minimizan el desgaste irregular para una larga vida útil.",
      caract4:
        "- Cuatro cinturones de seguridad de acero para mayor durabilidad y renovabilidad.",
        medida1: "11R22.5",
        medida2: "11R24.5",
        medida3: "295/75R22.5",
        medida4: "285/75R24.5",
        ancho1: "274",
        ancho2: "272",
        ancho3: "282",
        ancho4: "269",
        profundidad1: "20.6",
        profundidad2: "20.6",
        profundidad3: "20.6",
        profundidad4: "20.6",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 11,
      title: "T831",
      img1: [images.T831],
      img2: [images.traccion],
      img3: [images.off_road],
      caract1:
        "- Diseño agresivo de barras para una tracción efectiva. Banda de rodamiento extra profunda para mayor rendimiento.",
      caract2:
        "- Compuestos desarrollados para resistir desgarres, arrancamientos y penetraciones.",
      caract3:
        "- Contorno especial en el cuerpo que ayuda a reducir el estrés de la operación, proporcionando durabilidad y renovabilidad.",
        medida1: "11R22.5",
        medida2: "11R24.5",
        medida3: "295/75R22.5",
        medida4: "285/75R24.5",
        ancho1: "274",
        ancho2: "272",
        ancho3: "282",
        ancho4: "269",
        profundidad1: "20.6",
        profundidad2: "20.6",
        profundidad3: "20.6",
        profundidad4: "20.6",
        logo: [images.Firestone],
        logo2: [images.F]
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  // Función para manejar la apertura de la modal
  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  // Función para manejar el cierre de la modal
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const [visibleCards, setVisibleCards] = useState([]);

  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const cardsInView = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);
        setVisibleCards(cardsInView);
      },
      { threshold: 0.5 }
    ); // Puedes ajustar el umbral según tus necesidades

    if (containerRef.current) {
      containerRef.current.childNodes.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.childNodes.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3"
        ref={containerRef}
      >
        {CatalogueTraccion.map((card) => (
          <button
            key={card.id}
            onClick={() => handleOpenModal(card)}
            className={`flex flex-col border-[1px] rounded-xl items-center w-full shadow-xl hover:-translate-y-3 duration-700  bg-slate-100 ${
              visibleCards.includes(card) ? " opacity-0" : "animate-fadeIn"
            }`}
          >
             <h1 className="bg-yellow-500 w-full rounded-t-lg flex text-white font-semibold p-2 shadow-md">
              <div className="w-[90%]">{card.title}</div>
              <div className="w-[10%]"><img className="size-6" src={card.logo2} alt="" /></div>
            </h1>
            <div className="mt-1">
              <img className="size-28" src={card.img1} alt="Llanta nueva para tracción" />
            </div>
            <div className="flex">
              <img src={card.img2} alt="Tracción" />
              <img src={card.img3} alt="Tipo de camino" />
              <img src={card.img4} alt="" />
            </div>
          </button>
        ))}
      </div>
      {/* Renderiza la modal si hay un item seleccionado */}
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </>
  );
}

export default CatalogueTraccion;
