import Modal from './Modal'
import { useState } from "react";
import * as images from "../../img/index.js";

function CatalogueTodaPosicion() {
    const CatalogueTodaPosicion = [
        {
          id: 1,
          title: "UAP2 FUELTECH",
          img1: [images.UAP2],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          img4: [images.lDistancia],
          caract1:
          "- Posee expulsores de piedras que brindan resistencia a las perforaciones causadas a la carcasa.",
          caract2:
            "- El diseño de hombro ranurado y estrías triangulares ofrecen mejor tracción en todas las condiciones. ",
          caract3:
            "- Los puentes de amarre en las costillas centrales ayudan a proporcionar estabilidad y minimizar el desgaste irregular. ",
          caract4:
            "-  El UAP2 cumple la normativa SmartWay de la Agencia de Protección Ambiental (Environmental Protection Agency, EPA) y el cumplimiento de las disposiciones de la Junta de Recursos del Aire de California (California Air Resources Board, CARB)",
          ancho1: "190",
          ancho2: "200",
          ancho3: "210",
          ancho4: "220",
          ancho5: "230",
          ancho6: "240",
          ancho7: "250",
          ancho8: "260",
          profundidad1: "14.3",
          profundidad2: "14.3",
          profundidad3: "14.3",
          profundidad4: "14.3",
          profundidad5: "14.3",
          profundidad6: "14.3",
          profundidad7: "14.3",
          profundidad8: "14.3",
        },
        {
          id: 2,
          title: "R4200",
          img1: [images.R4200],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          img4: [images.lDistancia],
          ancho1: "9",
          ancho2: "230",
          ancho3: "240",
          ancho4: "212",
          profundidad1: "15.9",
          profundidad2: "15.9",
          profundidad3: "15.9",
          profundidad4: "15.9",
        },
        {
          id: 3,
          title: "BRX2",
          img1: [images.BRX2],
          img2: [images.todaPosicion],
          img3: [images.On_Off],
          ancho1: "210",
          ancho2: "220",
          ancho3: "230",
          ancho4: "240",
          ancho5: "250",
          profundidad1: "17.5",
          profundidad2: "17.5",
          profundidad3: "17.5",
          profundidad4: "17.5",
          profundidad5: "17.5",
        },
        {
          id: 4,
          title: "B104",
          img1: [images.B104],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          ancho1: "180",
          ancho2: "190",
          ancho3: "200",
          ancho4: "210",
          ancho5: "220",
          ancho6: "230",
          ancho7: "240",
          ancho8: "250",
          profundidad1: "13.5",
          profundidad2: "13.5",
          profundidad3: "13.5",
          profundidad4: "13.5",
          profundidad5: "13.5",
          profundidad6: "13.5",
          profundidad7: "13.5",
          profundidad8: "13.5",
        },
        {
          id: 5,
          title: "UAP",
          img1: [images.UAP],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          ancho1: "190",
          ancho2: "200",
          ancho3: "210",
          ancho4: "220",
          ancho5: "230",
          ancho6: "240",
          ancho7: "250",
          ancho8: "260",
          profundidad1: "14.3",
          profundidad2: "14.3",
          profundidad3: "14.3",
          profundidad4: "14.3",
          profundidad5: "14.3",
          profundidad6: "14.3",
          profundidad7: "14.3",
          profundidad8: "14.3",
        },
        {
          id: 6,
          title: "RTP",
          img1: [images.RTP],
          img2: [images.todaPosicion],
          img3: [images.On_Off],
          ancho1: "6",
          ancho2: "7",
          ancho3: "8",
          ancho4: "8.5",
          ancho5: "9",
          ancho6: "9.5",
          ancho7: "10.5",
          profundidad1: "14.3",
          profundidad2: "14.3",
          profundidad3: "14.3",
          profundidad4: "14.3",
          profundidad5: "14.3",
          profundidad6: "14.3",
          profundidad7: "14.3",
        },
        {
          id: 7,
          title: "B268",
          img1: [images.B268],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          ancho1: "220",
          ancho2: "230",
          ancho3: "250",
          profundidad1: "15.0",
          profundidad2: "15.0",
          profundidad3: "15.0",
        },
        {
          id: 8,
          title: "B163",
          img1: [images.B163],
          img2: [images.todaPosicion],
          img3: [images.Urbano],
          ancho1: "220",
          ancho2: "230",
          ancho3: "240",
          ancho4: "250",
          ancho5: "260",
          profundidad1: "17.0",
          profundidad2: "17.0",
          profundidad3: "17.0",
          profundidad4: "17.0",
          profundidad5: "17.0",
        },
        {
          id: 9,
          title: "WIDE BASE RIB",
          img1: [images.WIDE],
          img2: [images.todaPosicion],
          img3: [images.off_road],
          ancho1: "15",
          ancho2: "16.5",
          ancho3: "18",
          profundidad1: "12.7",
          profundidad2: "12.7",
          profundidad3: "12.7",
        },
        {
          id: 10,
          title: "BZE2",
          img1: [images.BZE2],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          ancho1: "230",
          ancho2: "240",
          ancho3: "250",
          ancho4: "260",
          profundidad1: "15.5",
          profundidad2: "15.5",
          profundidad3: "15.5",
          profundidad4: "15.5",
        },
        {
          id: 11,
          title: "BDV",
          img1: [images.BDV],
          img2: [images.todaPosicion],
          img3: [images.Urbano],
          ancho1: "190",
          ancho2: "200",
          ancho3: "210",
          ancho4: "220",
          ancho5: "220",
          ancho6: "230",
          ancho7: "240",
          ancho8: "250",
          ancho9: "260",
          profundidad1: "17.5",
          profundidad2: "17.5",
          profundidad3: "17.5",
          profundidad4: "17.5",
          profundidad5: "17.5",
          profundidad6: "17.5",
          profundidad7: "17.5",
          profundidad8: "17.5",
          profundidad9: "17.5",
        },
        {
          id: 12,
          title: "METROMAX RIB",
          img1: [images.METROMAX],
          img2: [images.todaPosicion],
          img3: [images.Regional],
          ancho1: "140",
          ancho2: "150",
          ancho3: "160",
          ancho4: "170",
          ancho5: "180",
          ancho6: "195",
          ancho7: "205",
          ancho8: "210",
          profundidad1: "10.3",
          profundidad2: "10.3",
          profundidad3: "10.3",
          profundidad4: "10.3",
          profundidad5: "10.3",
          profundidad6: "10.3",
          profundidad7: "10.3",
          profundidad8: "10.3",
        },
        {
          id: 13,
          title: "BRM",
          img1: [images.BRM],
          img2: [images.todaPosicion],
          img3: [images.On_Off],
          ancho1: "140",
          ancho2: "150",
          ancho3: "160",
          ancho4: "170",
          ancho5: "180",
          ancho6: "195",
          ancho7: "205",
          ancho8: "210",
          profundidad1: "10.3",
          profundidad2: "10.3",
          profundidad3: "10.3",
          profundidad4: "10.3",
          profundidad5: "10.3",
          profundidad6: "10.3",
          profundidad7: "10.3",
          profundidad8: "10.3",
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
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {CatalogueTodaPosicion.map((card) => (
              <button
                key={card.id}
                onClick={() => handleOpenModal(card)}
                className="flex flex-col border-[1px] rounded-xl items-center w-full shadow-xl hover:-translate-y-3 duration-700"
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
          {selectedItem && (
            <Modal item={selectedItem} onClose={handleCloseModal} />
          )}
    </>
  )
}

export default CatalogueTodaPosicion