import Modal from "./Modal";
import * as images from "../../img/index.js";
import React, { useEffect, useRef, useState } from "react";

function CatalogueTraccion() {
  const CatalogueTraccion = [
    {
      id: 1,
      title: "B710 FUELTECH",
      img1: [images.B710],
      img2: [images.traccion],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Avanzada tecnología de compuestos que reducen la pérdida de energía por su baja resistencia al rodamiento, para obtener un consumo eficiente de combustible.",
      caract2:
        "- Diseños de hombros contínuos y alta rigidez en los bloques que brindan un desgaste uniforme, promoviendo un mayor kilometraje.",
      caract3:
        "-  El B710 cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      profundidad1: "19.8",
      profundidad2: "19.8",
      profundidad3: "19.8",
      profundidad4: "19.8",
    },
    {
      id: 2,
      title: "B760 FUELTECH",
      img1: [images.B760],
      img2: [images.traccion],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Ancho de ranura optimizada que evita la retención de piedras y protege la carcasa de daños prematuros.",
      caract2:
        "- Puentes de amarre s que ayudan a minimizar el desgaste irregular punta-talón.",
      caract3:
        "-   Pequeñas ranuras en los bloques que promueven una excelente tracción en superficies secas y mojadas al mismo tiempo que ayudan a dar una mayor estabilidad.",
      caract4:
        "- El diseño B760 Fueltech cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      profundidad1: "18.3",
      profundidad2: "18.3",
      profundidad3: "18.3",
      profundidad4: "18.3",
    },
    {
      id: 3,
      title: "B835 FUELTECH",
      img1: [images.B835],
      img2: [images.traccion],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "- Amplias y profundas ranuras para una tracción sólida y una vida útil prolongada. ",
      caract2:
        "- Bloques divididos en la banda de rodamiento para controlar el desgaste irregular y contribuir a la poca generación de ruido.",
      caract3:
        "-  Expulsores de piedras que fortalecen la durabilidad del casco.",
      caract4:
        "- El diseño B835 cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB).",
      ancho1: "390",
      ancho2: "400",
      profundidad1: "18.3",
      profundidad2: "18.3",
    },
    {
      id: 4,
      title: "MEGATREK",
      img1: [images.MEGATREK],
      img2: [images.traccion],
      img3: [images.Regional],
      img4: [images.lDistancia],
      caract1:
        "-  Compuesto patentado que contribuye a prolongar la vida útil de la banda de rodamiento. ",
      caract2:
        "- Hombros contínuos que contribuyen a una mayor duración y a combatir el desgaste irregular.",
      caract3:
        "- Diseño de taco dinámico que propicia una eficiente tracción en la operación.",
      caract4:
        "- Expulsores de piedras contínuos en el centro de la banda que fortalecen la durabilidad del casco renovado.",
      ancho1: "220",
      ancho2: "230",
      ancho3: "240",
      profundidad1: "20.6",
      profundidad2: "20.6",
      profundidad3: "20.6",
    },
    {
      id: 5,
      title: "B729Z",
      img1: [images.B729Z],
      img2: [images.traccion],
      img3: [images.Regional],
      caract1:
        "- Mayor número de estrías y bloques divididos que incrementan los puntos de contacto para una mayor tracción.",
      caract2:
        "- Diseño versátil para diversas condiciones de operación.",
      caract3:
        "- Cuatro ranuras circunferenciales ayudan a canalizar el agua lejos de la huella para lograr unan firme en condiciones húmedas.",
      caract4:
        "- El patrón especial en cada costilla mejora la tracción.",
      ancho1: "240",
      ancho2: "250",
      ancho3: "260",
      ancho4: "270",
      profundidad1: "18.5",
      profundidad2: "18.5",
      profundidad3: "18.5",
      profundidad4: "18.5",
    },
    {
      id: 6,
      title: "BDE2",
      img1: [images.BDE2],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "230",
      ancho2: "240",
      ancho3: "250",
      ancho4: "260",
      ancho5: "270",
      profundidad1: "22.0",
      profundidad2: "22.0",
      profundidad3: "22.0",
      profundidad4: "22.0",
      profundidad5: "22.0",
    },
    {
      id: 7,
      title: "BDL",
      img1: [images.BDL],
      img2: [images.traccion],
      img3: [images.Regional],
      img4: [images.On_Off],
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      ancho5: "250",
      profundidad1: "16.0",
      profundidad2: "16.0",
      profundidad3: "16.0",
      profundidad4: "16.0",
      profundidad5: "16.0",
    },
    {
      id: 8,
      title: "BDLT",
      img1: [images.BDLT],
      img2: [images.traccion],
      img3: [images.Urbano],
      ancho1: "140",
      ancho2: "150",
      ancho3: "160",
      ancho4: "170",
      ancho5: "180",
      ancho6: "190",
      ancho7: "200",
      ancho8: "210",
      profundidad1: "12.7",
      profundidad2: "12.7",
      profundidad3: "12.7",
      profundidad4: "12.7",
      profundidad5: "12.7",
      profundidad6: "12.7",
      profundidad7: "12.7",
      profundidad8: "12.7",
    },
    {
      id: 9,
      title: "BDR-AS",
      img1: [images.BDR_AS],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "180",
      ancho2: "190",
      ancho3: "200",
      ancho4: "210",
      ancho5: "220",
      ancho6: "230",
      profundidad1: "17.5",
      profundidad2: "17.5",
      profundidad3: "17.5",
      profundidad4: "17.5",
      profundidad5: "17.5",
      profundidad6: "17.5",
    },
    {
      id: 10,
      title: "BDR-HG",
      img1: [images.BDR_HG],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "210",
      ancho2: "220",
      ancho3: "230",
      ancho4: "240",
      ancho5: "250",
      ancho6: "260",
      profundidad1: "21.4",
      profundidad2: "21.4",
      profundidad3: "21.4",
      profundidad4: "21.4",
      profundidad5: "21.4",
      profundidad6: "21.4",
    },
    {
      id: 11,
      title: "BDR-HT2",
      img1: [images.BDR_HT2],
      img2: [images.traccion],
      img3: [images.Urbano],
      ancho1: "230",
      ancho2: "240",
      ancho3: "250",
      ancho4: "260",
      ancho5: "270",
      profundidad1: "22.0",
      profundidad2: "22.0",
      profundidad3: "22.0",
      profundidad4: "22.0",
      profundidad5: "22.0",
    },
    {
      id: 12,
      title: "DR4.3",
      img1: [images.DR4],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "200",
      ancho2: "210",
      ancho3: "220",
      ancho4: "230",
      ancho5: "240",
      profundidad1: "17.5",
      profundidad2: "17.5",
      profundidad3: "17.5",
      profundidad4: "17.5",
      profundidad5: "17.5",
    },
    {
      id: 13,
      title: "ECONO DRIVE",
      img1: [images.ECONO],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "8",
      ancho2: "8.5",
      ancho3: "9",
      ancho4: "9.5",
      ancho5: "10.5",
      profundidad1: "14.3",
      profundidad2: "14.3",
      profundidad3: "14.3",
      profundidad4: "14.3",
      profundidad5: "14.3",
    },
    {
      id: 14,
      title: "UDR",
      img1: [images.UDR],
      img2: [images.traccion],
      img3: [images.Regional],
      ancho1: "200",
      ancho2: "210",
      ancho3: "220",
      ancho4: "230",
      ancho5: "240",
      ancho6: "250",
      profundidad1: "20.6",
      profundidad2: "20.6",
      profundidad3: "20.6",
      profundidad4: "20.6",
      profundidad5: "20.6",
      profundidad6: "20.6",
    },
    {
      id: 15,
      title: "BDM",
      img1: [images.BDM],
      img2: [images.traccion],
      img3: [images.On_Off],
      ancho1: "190",
      ancho2: "200",
      ancho3: "210",
      ancho4: "220",
      ancho5: "230",
      ancho6: "240",
      ancho7: "250",
      ancho8: "260",
      ancho9: "270",
      ancho10: "280",
      profundidad1: "20.6",
      profundidad2: "20.6",
      profundidad3: "20.6",
      profundidad4: "20.6",
      profundidad5: "20.6",
      profundidad6: "23.8",
      profundidad7: "25.4",
      profundidad8: "25.4",
      profundidad9: "25.4",
      profundidad10: "25.4",
    },
    {
      id: 16,
      title: "BDM2",
      img1: [images.BDM2],
      img2: [images.traccion],
      img3: [images.On_Off],
      ancho1: "210",
      ancho2: "220",
      ancho3: "240",
      ancho4: "250",
      ancho5: "270",
      profundidad1: "25.4",
      profundidad2: "25.4",
      profundidad3: "25.4",
      profundidad4: "25.4",
      profundidad5: "25.4",
    },
    {
      id: 17,
      title: "BDY1S",
      img1: [images.BDY1S],
      img2: [images.traccion],
      img3: [images.On_Off],
      ancho1: "240",
      ancho2: "250",
      profundidad1: "23.8",
      profundidad2: "23.8",
    },
    {
      id: 18,
      title: "CROSS BAR",
      img1: [images.CROSS],
      img2: [images.traccion],
      img3: [images.On_Off],
      ancho1: "2",
      ancho2: "3",
      ancho3: "4",
      ancho4: "5",
      ancho5: "6",
      ancho6: "7",
      ancho7: "8",
      ancho8: "9",
      profundidad1: "11.9",
      profundidad2: "11.9",
      profundidad3: "15.1",
      profundidad4: "15.1",
      profundidad5: "15.1",
      profundidad6: "15.1",
      profundidad7: "15.1",
      profundidad8: "15.1",
    },
    {
      id: 19,
      title: "W H LUG",
      img1: [images.WHLUG],
      img2: [images.traccion],
      img3: [images.On_Off],
      ancho1: "9",
      ancho2: "9.5",
      ancho3: "10.5",
      ancho4: "12",
      profundidad1: "20.5",
      profundidad2: "20.5",
      profundidad3: "22.5",
      profundidad4: "25.6",
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
        {CatalogueTraccion.map((card) => (
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

export default CatalogueTraccion;
