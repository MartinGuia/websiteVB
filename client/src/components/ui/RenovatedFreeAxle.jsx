import Modal from "./Modal";
import React, { useEffect, useRef, useState } from "react";
import * as images from "../../img/index.js";

function RenovatedFreeAxle() {
    const CatalogueRenovatedAllPosition = [
        {
          id: 1,
          title: "B123",
          img1: [images.B123],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Optimiza la eficiencia del combustible gracias a su compuesto de última generación que reduce la pérdida de energía en un 4.7%.",
          caract2:
            "- Reduce 5% el nivel de desgaste, debido al diseño optimizado de la banda de rodadura.",
          caract3:
            "- Evita el desgaste irregular ya que su diseño de costillas permite alargar la vida útil de la banda de rodadura.",
          caract4:
            "- Excelente costo beneficio gracias a un OTD ideal para rodar en caminos de larga distancia ya que cuenta con el mejor equilibrio entre rendimiento y precio.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          profundidad1: "8.7",
          profundidad2: "8.7",
          profundidad3: "8.7",
          profundidad4: "8.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 2,
          title: "B135",
          img1: [images.B135],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Compuesto que reduce la pérdida de energía, disminuyendo la resistencia al rodamiento para un consumo eficiente de combustible.",
          caract2:
            "- Expulsores de piedras que combaten la retención de piedras que dañan la carcasa.",
          caract3:
            "- Costilla ecualizadora que promueve le desgaste uniforma en las costillas principales, para obtener un alto kilometraje de retiro.",
          medida1: "445/50R22.5",
          ancho1: "390",
          ancho2: "400",
          profundidad1: "8.7",
          profundidad2: "8.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 3,
          title: "BTL-SA2",
          img1: [images.BTL_SA2],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Reducción del desgaste en hombros ya que cuenta con hombros redondeados con ''mini alas'' (mini-wings) que reducen los efectos del arrastre lateral.",
          caract2:
            "- Excelente rendimiento kilometrico, con 4% mayor OTD comparada con BTR-SA. Tiene la capacidad de rodar en aplicaciones regionales y de larga distancia.",
          caract3:
            "- Baja generación de calor que proporciona menor fatiga del casco debido a que su banda es 6% más ligera que BTR-SA.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          ancho5: "250",
          ancho6: "260",
          profundidad1: "13.0",
          profundidad2: "13.0",
          profundidad3: "13.0",
          profundidad4: "13.0",
          profundidad5: "13.0",
          profundidad6: "13.0",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 4,
          title: "FCR-T2",
          img1: [images.FCR_T2],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Las costillas del hombro sólidas impiden el desgaste irregular.",
          caract2:
            "- Diseño patentado de su banda de rodamiento limita la pérdida de energía para disminuir la resistencia al rodaje.",
          caract3:
            "- El volumen optimizado de la banda de rodamiento ofrece un kilometraje excepcional gracias a las costillas anchas que aumentan la superficie de contacto con el pavimento.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          profundidad1: "8.7",
          profundidad2: "8.7",
          profundidad3: "8.7",
          profundidad4: "8.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 5,
          title: "TR 41",
          img1: [images.TR41],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- El duradero TR 4.1 ofrece un rendimiento prolongado y confiable para usos de carga en general, así como de recolección y entrega",
          caract2:
            "- Gracias a sus características permite ser utilizada en recorridos de larga distancia, regionales y urbanos.",
          caract3:
            "- El hombro suave y continuo permite lograr un desgaste uniforme.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "190",
          ancho2: "200",
          ancho3: "210",
          ancho4: "220",
          ancho5: "230",
          ancho6: "240",
          profundidad1: "8.7",
          profundidad2: "8.7",
          profundidad3: "8.7",
          profundidad4: "8.7",
          profundidad5: "8.7",
          profundidad6: "8.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 6,
          title: "T4100",
          img1: [images.T4100],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- 5 costillas que permiten gran maniobrabilidad en condiciones secas y mojadas.",
          caract2:
            "- Estrías en las tres costillas centrales que mejoran la tracción y el frenado.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          medida4: "315/80R22.5",
          ancho1: "7",
          ancho2: "8",
          ancho3: "8.5",
          ancho4: "9",
          ancho5: "9.5",
          ancho6: "10.5",
          ancho7: "255",
          ancho8: "265",
          profundidad1: "11.9",
          profundidad2: "11.9",
          profundidad3: "11.9",
          profundidad4: "11.9",
          profundidad5: "11.9",
          profundidad6: "11.9",
          profundidad7: "11.9",
          profundidad8: "11.9",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 7,
          title: "BTL3",
          img1: [images.BTL3],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Hombros redondeados que minimizan los efectos del arrastre lateral y proporciona excelente estabilidad.",
          caract2:
            "- Versatilidad de aplicación en llantas radiales, con baja generación de calor, proporcionando menor fatiga del casco.",
          caract3:
            "- Exelente resistencia al desgaste por abrasión.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          medida4: "315/80R22.5",
          ancho1: "220",
          ancho2: "230",
          ancho3: "240",
          ancho4: "250",
          ancho5: "260",
          profundidad1: "11.0",
          profundidad2: "11.0",
          profundidad3: "11.0",
          profundidad4: "11.0",
          profundidad5: "11.0",
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
                  <img className="size-28" src={card.img1} alt="" />
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

export default RenovatedFreeAxle