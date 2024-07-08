import Modal from "./Modal";
import React, { useEffect, useRef, useState } from "react";
import * as images from "../../img/index.js";

function RenovatedTraction() {
    const CatalogueRenovatedAllPosition = [
        {
          id: 1,
          title: "B713",
          img1: [images.B713],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Vida útil mejorada, para más kilómetros de rendimiento con bajo costo de combustible en comparación con la generación anterior de Bandag B710.",
          caract2:
            "- 130% más de bordes de agarre para mejorar la tracción en comparación con la generación anterior de Bandag B710.",
          caract3:
            "- Distribuye el peso y la torsión de forma más uniforme para combatir el desgaste.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          profundidad1: "16.7",
          profundidad2: "16.7",
          profundidad3: "16.7",
          profundidad4: "16.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 2,
          title: "B835",
          img1: [images.B835],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Amplias y profundas ranuras para una tracción sólida y una vida útil prolongada.",
          caract2:
            "- Bloques divididos en la banda de rodamiento para controlar el desgaste irregular y contribuir a la poca generación de ruido.",
          caract3:
            "- Expulsores de piedras que fortalecen la durabilidad del casco.",
          medida1: "445/50R22.5",
          ancho1: "390",
          ancho2: "400",
          profundidad1: "18.3",
          profundidad2: "18.3",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 3,
          title: "DR 5.3",
          img1: [images.DR53],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Un hombro resistente, sólido y continuo ofrece una gran vida útil y un desgaste uniforme.",
          caract2:
            "- El diseño de tacos resistentes los cuales ofrecen una gran tracción.",
          caract3:
            "- El compuesto probado y patentado contribuye a la durabilidad y a una vida útil prolongada.",
          caract4:
            "- Los eyectores de piedra ayudan a evitar las perforaciones en el casco.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
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
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 4,
          title: "Megatrek",
          img1: [images.Megatrek],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Compuesto patentado que contribuye a prolongar la vida útil de la banda de rodamiento.",
          caract2:
            "- Hombros continuos que contribuyen a una mayor duración y a combatir el desgaste irregular.",
          caract3:
            "- Diseño de taco dinámico que propicia una eficiente tracción en la operación.",
          caract4:
            "- Expulsores de piedras continuos en el centro de la banda que fortalecen la durabilidad del casco renovado.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "220",
          ancho2: "230",
          profundidad1: "20.6",
          profundidad2: "20.6",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 5,
          title: "B760",
          img1: [images.B760],
          img2: [images.todaPosicion],
          img3: [images.lDistancia],
          caract1:
            "- Ancho de ranura optimizada que evita la retención de piedras y protege la carcasa de daños prematuros.",
          caract2:
            "- Puentes de amarre s que ayudan a minimizar el desgaste irregular punta-talón.",
          caract3:
            "- Pequeñas ranuras en los bloques que promueven una excelente tracción en superficies secas y mojadas al mismo tiempo que ayudan a dar una mayor estabilidad.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "220",
          ancho2: "230",
          ancho3: "240",
          profundidad1: "18.3",
          profundidad2: "18.3",
          profundidad3: "18.3",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 6,
          title: "BDR-HG",
          img1: [images.BDR_HG],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- Tecnología 3D siping.",
          caract2:
            "- Compuesto de muy alta resistencia al desgaste.",
          caract3:
            "- Diseño de hombros abiertos que proveen máxima tracción.",
          caract4:
            "- Estrías de gran profundidad que garantizan larga duración.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
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
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 7,
          title: "Econo Drive",
          img1: [images.ECONODRIVE],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- De profundidad moderada para una menor generación de calor.",
          caract2:
            "- Patrón de bloques que proporcionana una excelente tracción.",
          caract3:
            "- Estrías en el centro de los bloques que mejoran la tracción y el frenado.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "8.5",
          ancho2: "9",
          ancho3: "9.5",
          ancho4: "10.5",
          profundidad1: "14.3",
          profundidad2: "14.3",
          profundidad3: "14.3",
          profundidad4: "14.3",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 8,
          title: "UDR",
          img1: [images.UDR],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- Expulsores de piedras para evitar daños en la carcas.",
          caract2:
            "- Hombros abiertos que proveen tracción en todo tipo de condiciones.",
          caract3:
            "- Puentes de amarre en los hombros que brindan estabilidad en los bloques con el fin de minimizar el desgaste irregular.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/80R22.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          ancho5: "250",
          profundidad1: "20.6",
          profundidad2: "20.6",
          profundidad3: "20.6",
          profundidad4: "20.6",
          profundidad5: "20.6",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 9,
          title: "B736",
          img1: [images.B736],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- Mayor número de estrías y bloques divididos que incrementan los puntos de contacto para una mayor tracción.",
          caract2:
            "- Ancho de banda amplio que proporciona mayor contacto con la carretera y agarre extra para un mejor desempeño en condiciones mojadas.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "230",
          ancho2: "240",
          ancho3: "250",
          ancho4: "260",
          ancho5: "270",
          profundidad1: "18.5",
          profundidad2: "18.5",
          profundidad3: "18.5",
          profundidad4: "18.5",
          profundidad5: "18.5",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 10,
          title: "DR 4.3",
          img1: [images.DR43],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- Banda de rodamiento de tracción con hombro abierto.",
          caract2:
            "- La costilla central sólida ofrece una gran vida útil y un desgaste uniforme.",
          caract3:
            "- El diseño de tacos en los costados ofrecen una gran tracción.",
          caract4:
            "- El compuesto probado y patentado contribuye a la durabilidad y a una vida útil prolongada.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          profundidad1: "17.5",
          profundidad2: "17.5",
          profundidad3: "17.5",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 11,
          title: "D4300",
          img1: [images.D4300],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          caract1:
            "- Banda de bloques con surcos profundos de 17.5mm y el sistema Tie-Bars en los tacos centrales para evitar el arrancamientos, la banda D4300 presenta una alta capacidad de tracción durante toda su operación.",
          caract2:
            "- Excelente rendimiento en ejes de tracción.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          medida3: "295/75R22.5",
          ancho1: "219",
          ancho2: "236",
          ancho3: "250",
          ancho4: "260",
          ancho5: "270",
          profundidad1: "17.5",
          profundidad2: "17.5",
          profundidad3: "17.5",
          profundidad4: "17.5",
          profundidad5: "17.5",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 12,
          title: "BDM",
          img1: [images.BDM],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Compuesto revolucionario de hule para aplicaciones severas que mejora la resistencia al desgaste.",
          caract2:
            "- Configuración de bloques con amplia area de contacto para mejor tracción.",
          caract3:
            "- Hombros abiertos que proveen tracción en todo tipo de condiciones.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "220",
          ancho2: "230",
          ancho3: "240",
          ancho4: "250",
          ancho5: "260",
          profundidad1: "20.6",
          profundidad2: "20.6",
          profundidad3: "20.6",
          profundidad4: "20.6",
          profundidad5: "20.6",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 13,
          title: "BLSS",
          img1: [images.BLSS],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- El agresivo diseño de la banda de rodamiento ofrece un agarre firme tanto dentro como fuera de la carretera.",
          caract2:
            "- La profunda banda de rodamiento de 25,2 mm brinda más volumen para una mayor vida útil.",
          caract3:
            "- La tecnología de rechazo de piedra reduce la retención de piedras.",
          caract4:
            "- El compuesto especializado resiste el astillado y los cortes.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "200",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          profundidad1: "25.4",
          profundidad2: "25.4",
          profundidad3: "25.4",
          profundidad4: "25.4",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 14,
          title: "CROSSBAR",
          img1: [images.CROSSBAR],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Diseño profundo de bloques que ofrecen buen desempeño en operaciones fuera de carretera.",
          caract2:
            "- Hombros abiertos que contribuyen a una óptima tracción.",
          caract3:
            "- Compuesto que brinda excelente kilometraje y resistencia a las penetraciones.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "2",
          ancho2: "3",
          ancho3: "4",
          ancho4: "5",
          ancho5: "6",
          ancho6: "7",
          ancho7: "8",
          profundidad1: "11.9",
          profundidad2: "11.9",
          profundidad3: "15.1",
          profundidad4: "15.1",
          profundidad5: "15.1",
          profundidad6: "15.1",
          profundidad7: "15.1",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 15,
          title: "Rock Lug Modified",
          img1: [images.RockLugModified],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Gran desempeño kilométrico.",
          caract2:
            "- Compuesto especial para resistencia a cortes y penetraciones.",
          caract3:
            "- Gran profundidad que ofrece alto rendimiento kilométrico.",
          medida1: "11R22.5",
          medida2: "11R24.5",
          ancho1: "9",
          ancho2: "10",
          profundidad1: "22.2",
          profundidad2: "22.2",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 16,
          title: "Grader",
          img1: [images.Grader],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Diseño agresivo para ejes de tracción, especial ára industria agrícola",
          medida1: "13R22.5",
          medida2: "14.00-24",
          medida3: "14.00R24",
          medida4: "15.5R25",
          ancho1: "13",
          ancho2: "15.5",
          profundidad1: "25.4",
          profundidad2: "28.6",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 17,
          title: "BDLT",
          img1: [images.BDLT],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Brinda alto kilometraje en aplicaciones regionales y de recolección y entrega.",
          caract2:
            "- Configuración de hombro abierto y bloques centrales que brindan excelente tracción.",
          caract3:
            "- Estrías en el centro de los bloques que mejoran el frenado en condiciones mojadas.",
          medida1: "195R15",
          medida2: "7.50R17",
          medida3: "215/80R16",
          ancho1: "160",
          ancho2: "170",
          ancho3: "180",
          ancho4: "190",
          profundidad1: "12.7",
          profundidad2: "12.7",
          profundidad3: "12.7",
          profundidad4: "12.7",
          logo: [images.bridgestone],
          logo2: [images.B],
        },
        {
          id: 18,
          title: "Comercial traction",
          img1: [images.CT],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          caract1:
            "- Vida útil mejorada, para más kilómetros de rendimiento con bajo costo de combustible en comparación con la generación anterior de Bandag B710.",
          caract2:
            "- 130% más de bordes de agarre para mejorar la tracción en comparación con la generación anterior de Bandag B710.",
          caract3:
            "- Distribuye el peso y la torsión de forma más uniforme para combatir el desgaste.",
          medida1: "195R15",
          medida2: "7.50R17",
          medida3: "215/80R16",
          ancho1: "600",
          ancho2: "800",
          profundidad1: "13.2",
          profundidad2: "13.2",
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
                  <img className="size-28" src={card.img1} alt="Banda renovada de tracción" />
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

export default RenovatedTraction