import Modal from "./Modal";
import React, { useEffect, useRef, useState } from "react";
import * as images from "../../img/index.js";

function RenovatedAllPosition() {
  const CatalogueRenovatedAllPosition = [
    {
      id: 1,
      title: "UAP2",
      img1: [images.UAP2],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Un compuesto patentado de Bandag contribuye a una larga vida útil de la banda de rodadura y una baja resistencia a la rodadura.",
      caract2:
        "- El exclusivo diseño de ranura triangular con ranura en ángulo mejora la durabilidad del hombro en comparación con la generación anterior.",
      caract3:
        "- Cuatro ranuras circunferenciales evacuan el agua para proporcionar un fuerte agarre en carreteras mojadas.",
      caract4:
        "- Los hombros lisos y continuos contribuyen a una baja resistencia a la rodadura.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "315/80R22.5",
      ancho1: "180 m",
      ancho2: "210 m",
      ancho3: "220 m",
      ancho4: "230 m",
      profundidad1: "13.5",
      profundidad2: "13.5",
      profundidad3: "13.5",
      profundidad4: "13.5",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 2,
      title: "B269",
      img1: [images.B269],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Prolonga la vida útil del casco, a través de su sistema de eyectores de piedras.",
      caract2:
        "- Mayor resistencia al arrastre lateral, a partir de hombros redondeados que minimizan los efectos del arrastre lateral.",
      caract3:
        "- Producto versátil debido a su diseño innovador, toda posición y de aplicación regional.",
      caract4:
        "- Excelente desempeño kilómetrico gracias al compuesto de clase mundial ideado para las condiciones exigentes de caminos regionales.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "315/80R22.5",
      ancho1: "220 m",
      ancho2: "230 m",
      ancho3: "240 m",
      ancho4: "250 m",
      ancho5: "260 m",
      profundidad1: "15.0",
      profundidad2: "15.0",
      profundidad3: "15.0",
      profundidad4: "15.0",
      profundidad5: "15.0",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 3,
      title: "B440",
      img1: [images.B440],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Mayor protección y durabilidad de la carcasa gracias a su sistema de eyectores de piedras.",
      caract2:
        "- Mayor resistencia al arrastre lateral, ya que cuenta con hombros redondeados que minimizan los efectos del arrastre lateral.",
      caract3:
        "- Producto versátil toda posición de aplicación regional, debido a su diseño innovador.",
      caract4:
        "- Excelente costo beneficio gracias a un OTD ideal para rodar en caminos regionales ya que cuenta con el mejor equilibrio entre rendimiento y precio.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "315/80R22.5",
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      ancho5: "250",
      ancho6: "260",
      profundidad1: "14.0",
      profundidad2: "14.0",
      profundidad3: "14.0",
      profundidad4: "14.0",
      profundidad5: "14.0",
      profundidad6: "14.0",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 4,
      title: "Brawny Rib",
      img1: [images.BrawnyRib],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Diseño especialmente proyectado para el uso urbano con surcos longitudinales que ofrecen una alta capacidad de tracción y frenaje en pisos húmedos, logrando además un desgaste uniforme y una mayor adherencia lateral.",
      caract2:
        "- Su amplia disponibilidad de medidas la hace ideal para cubrir un amplio abanico de neumáticos en el mercado.",
      caract3:
        "- Excelente rendimiento kilométrico para ejes libres y de tracción moderada.",
      caract4:
        "- Versatilidad de uso para neumáticos radiales y convencionales.",
      medida1: "235/75R17.5",
      medida2: "255/70R22.5",
      medida3: "215/75R17.5",
      medida4: "225/70R19.5",
      ancho1: "600",
      ancho2: "650",
      ancho3: "700",
      ancho4: "750",
      ancho5: "800",
      ancho6: "850",
      profundidad1: "11.1",
      profundidad2: "11.1",
      profundidad3: "11.1",
      profundidad4: "11.1",
      profundidad5: "11.1",
      profundidad6: "11.1",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 5,
      title: "Highway",
      img1: [images.Highway],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Banda de rodamiento versatil para toda posición y tipo de servicio.",
      caract2:
        "- Buen desempeño en recorridos de corta y larga distancia.",
      caract3:
        "- Buen desempeño en cascos radiales como convencionales.",
      medida1: "235/75R17.5",
      medida2: "255/70R22.5",
      medida3: "225/70R19.5",
      ancho1: "3",
      ancho2: "6",
      ancho3: "7",
      ancho4: "8",
      profundidad1: "11.1",
      profundidad2: "12.7",
      profundidad3: "12.7",
      profundidad4: "12.7",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 6,
      title: "METROMAX RIB",
      img1: [images.MetroMaxRIB],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Brinda alto kilometraje en aplicaciones de regionales y de recolección y entrega.",
      caract2:
        "- Configuración de 5 costillas que brindan excelente tracción y frenado seguro.",
      caract3:
        "- Canales en las costillas que permiten la evacuación del agua en condiciones mojadas.",
      caract4:
        "- Estrías en el centro de los bloques que mejoran la distancia de frenado.",
      medida1: "225/70R19.5",
      medida2: "215/75R17.5",
      medida3: "225/70R19.5",
      ancho1: "170",
      ancho2: "180",
      ancho3: "195",
      ancho4: "205",
      ancho5: "210",
      profundidad1: "10.3",
      profundidad2: "10.3",
      profundidad3: "10.3",
      profundidad4: "10.3",
      profundidad5: "10.3",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 7,
      title: "BDV",
      img1: [images.BDV],
      img2: [images.todaPosicion],
      img3: [images.Urbano],
      caract1:
        "- Ofrece mejoras e innovaciones en su compuesto NanoPro Tech de clase premium que resultan en un mayor rendimiento kilométrico.",
      caract2:
        "- Diseñada con costado innovador Intellishape que ayuda a reducir el peso total de la llanta sin reducir durabilidad.",
      caract3:
        "- Combina baja resistencia al rodamiento y un casco de ahorro de energía para el uso eficiente del combustible.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "285/75R24.5",
      ancho1: "294",
      ancho2: "294",
      ancho3: "289",
      ancho4: "289",
      profundidad1: "13.5",
      profundidad2: "13.5",
      profundidad3: "13.5",
      profundidad4: "13.5",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 8,
      title: "BZY",
      img1: [images.BZY],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Banda de rodamiento con resistencia a cortes y penetraciones.",
      caract2:
        "- Canales redondeados que facilitan la autolimpieza.",
      caract3:
        "- Alta resistencia a cortes y pinchazos.",
      caract4:
        "- Diseñada para vehículos que viajan en sobre carretera y terracería.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      ancho1: "8",
      ancho2: "8.5",
      ancho3: "9",
      ancho4: "10.5",
      profundidad1: "15.1",
      profundidad2: "15.1",
      profundidad3: "15.1",
      profundidad4: "15.1",
      logo: [images.bridgestone],
      logo2: [images.B],
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
        {CatalogueRenovatedAllPosition.map((card) => (
          <button
            key={card.id}
            onClick={() => handleOpenModal(card)}
            className={`flex flex-col border-[1px] rounded-xl items-center w-full shadow-xl hover:-translate-y-3 duration-700  bg-slate-100 ${
              visibleCards.includes(card) ? " opacity-0" : "animate-fadeIn"
            }`}
          >
            <h1 className="bg-yellow-500 w-full rounded-t-lg flex text-white font-semibold p-2 shadow-md">
              <div className="w-[90%]">{card.title}</div>
              <div className="w-[10%]">
                <img className="size-6" src={card.logo2} alt="" />
              </div>
            </h1>
            <div className="mt-1">
              <img className="size-28" src={card.img1} alt="Llanta renovada toda posición" />
            </div>
            <div className="flex">
              <img src={card.img2} alt="Toda Posición" />
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

export default RenovatedAllPosition;
