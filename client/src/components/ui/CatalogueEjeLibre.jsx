import Modal from './Modal'
import React, { useEffect, useRef, useState } from "react";
import * as images from "../../img/index.js";


function CatalogueEjeLibre() {
  const CatalogueEjeLibre = [
    {
      id: 1,
      title: "B135 FUELTECH",
      img1: [images.B135],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Compuesto que reduce la pérdida de energía, disminuyendo la resistencia al rodamiento para un consumo eficiente de combustible.",
      caract2:
        "- Extpulsores de piedras que combaten la retención de piedras que dañan la carcasa.",
      caract3:
        "- Costilla ecualizadora que promueve le desgaste uniforma en las costillas principlaes, para obtener un alto kilometraje de retiro.",
      caract4:
        "-  El B135 Fueltech cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "180",
      ancho2: "210",
      ancho3: "220",
      ancho4: "230",
      ancho5: "240",
      ancho6: "250",
      profundidad1: "8.7",
      profundidad2: "8.7",
    },
    {
      id: 2,
      title: "B197 FUELTECH",
      img1: [images.B760],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Compuesto que reduce la pérdida de energía, disminuyendo la resistencia al rodamiento para un consumo eficiente de combustible",
      caract2:
        "- Diseño que mejora la tracción con una mejor evacuación del agua para obtener con un agarre firme en carreteras mojadas. ",
      caract3:
        "- Combate el desgaste irregular a lo largo de las costillas principales debido a que absorbe las tensiones para una mayor resistencia al desgaste.",
      caract4:
        "- El B197 Fueltech cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      profundidad1: "8.7",
      profundidad2: "8.7",
      profundidad3: "8.7",
    },
    {
      id: 3,
      title: "BTL-SA2",
      img1: [images.BTL_SA2],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Con su diseño de hombro modificado, las carcasas renovadas con BTL-SA son menos susceptibles a los daños provocados por los giros cerrados o las maniobras pronunciadas.",
      caract2:
        "- El compuesto de la banda de rodamiento brinda resistencia a cortes, desgranamientos y desgarres.",
      caract3:
        "- La profundidad de banda de rodamiento asegura una prolongada vida útil.",
      ancho1: "230",
      ancho2: "240",
      ancho3: "250",
      profundidad1: "12.7",
      profundidad2: "12.7",
      profundidad3: "12.7",
    },
    {
      id: 4,
      title: "BTR-SA",
      img1: [images.BTR_SA],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      caract1:
        "- Configuración de 5 costillas sólidas que porpician la baja resistencia al rodamiento.",
      caract2:
        "- Hombros redondeados para soportar fuerzas laterales.",
      caract3:
        "-  Mini-alas laterales para mejor agarre con la carcasa y apariencia.",
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      ancho5: "250",
      ancho6: "260",
      profundidad1: "12.7",
      profundidad2: "12.7",
      profundidad3: "12.7",
      profundidad4: "12.7",
      profundidad5: "12.7",
      profundidad6: "12.7",
    },
    {
      id: 5,
      title: "FCR-T",
      img1: [images.FCR_T],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      caract1:
        "- El diseño de la banda de rodamiento ayuda a minimizar los desgastes irregulares y contribuye a una prolonganda vida útil",
      caract2:
        "- Costillas sólidas del hombro brindan protección contra el desgaste por fricción en los giros pronunciados.",
      caract3:
        "- El FCR T cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "8.50",
      ancho2: "9",
      ancho3: "230",
      profundidad1: "8.7",
      profundidad2: "8.7",
      profundidad3: "8.7",
    },
    {
      id: 6,
      title: "BTL",
      img1: [images.BTL],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      profundidad1: "8.7",
      profundidad2: "8.7",
      profundidad3: "8.7",
    },
    {
      id: 7,
      title: "T4100",
      img1: [images.T4100],
      img2: [images.ejeLibre],
      img3: [images.Regional],
      ancho1: "8.5",
      ancho2: "9",
      ancho3: "9.5",
      ancho4: "10.5",
      ancho5: "255",
      ancho6: "265",
      profundidad1: "11.9",
      profundidad2: "11.9",
      profundidad3: "11.9",
      profundidad4: "11.9",
      profundidad5: "11.9",
      profundidad6: "11.9",
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
    const observer = new IntersectionObserver((entries) => {
      const cardsInView = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
      setVisibleCards(cardsInView);
    }, { threshold: 0.5 }); // Puedes ajustar el umbral según tus necesidades
  
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3" ref={containerRef}>
        {CatalogueEjeLibre.map((card) => (
          <button
            key={card.id}
            onClick={() => handleOpenModal(card)}
            className={`flex flex-col border-[1px] rounded-xl items-center w-full shadow-xl hover:-translate-y-3 duration-700  bg-slate-100 ${visibleCards.includes(card) ? " opacity-0" : "animate-fadeIn"}`}
          >
            <h1 className="bg-blue-950 w-full rounded-t-lg flex justify-center text-white font-semibold p-2">
              {card.title}
            </h1>
            <div className="mt-1">
              <img src={card.img1} alt="" />
            </div>
            <div className="flex">
              <img src={card.img2} alt="" />
              <img src={card.img3} alt="" />
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

export default CatalogueEjeLibre