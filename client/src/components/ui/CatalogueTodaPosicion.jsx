import Modal from "./Modal";
import React, { useEffect, useRef, useState } from "react";
import * as images from "../../img/index.js";

function CatalogueTodaPosicion() {
  const CatalogueTodaPosicion = [
    {
      id: 1,
      title: "R213",
      img1: [images.R213],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
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
      logo2: [images.B]
    },
    {
      id: 2,
      title: "R283s",
      img1: [images.R283s],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      img4: [images.Regional],
      caract1:
        "- Es una llanta de última generación diseñada para ejes de dirección dirigida a aquellas flotas que operan bajo un modelo de distribución enfocado en aplicación larga distancia con incursiones regulares en caminos regionales.",
      caract2:
        "- Está diseñada con costado innovador INTELLISHAPE y compuesto NANOPRO TECH que ayuda a reducir el peso total de la llanta sin reduir la durabilidad.",
      caract3:
        "- Ranuras transversales para mejor tracción y agarre en todo tipo de condición.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "285/75R24.5",
      ancho1: "292",
      ancho2: "292",
      ancho3: "290",
      ancho4: "290",
      profundidad1: "14.3",
      profundidad2: "14.3",
      profundidad3: "14.3",
      profundidad4: "14.3",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 3,
      title: "R268",
      img1: [images.R268],
      img2: [images.Regional],
      img3: [images.lDistancia],
      caract1:
        "- Su compuesto NANOPRO TECH de clase premium que resultan en un mayor rendimiento kilométrico.",
      caract2:
        "- Diseño de banda de rodamiento y características de protección del casco, para resistir daños por maniobras, contribuyendo a una durabilidad excepcional.",
      caract3:
        "- Distribución optimizada de las costillas para proporcionar mejor pisada y reducir el desgaste irregular.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "295/80R22.5",
      medida5: "285/75R24.5",
      ancho1: "284",
      ancho2: "284",
      ancho3: "290",
      ancho4: "297",
      ancho5: "287",
      profundidad1: "16.7",
      profundidad2: "16.7",
      profundidad3: "16.7",
      profundidad4: "16.7",
      profundidad5: "16.7",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 4,
      title: "R250 ED",
      img1: [images.R250],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Llanta toda posición diseñada específicamente para aplicacones dentro de carretera y servicio de recolección y entrega.",
      caract2:
        "- Nuevo compuesto de hule a la banda de rodamiento que otorga extra-resistencia a cortes y maximiza el rendimiento.",
      caract3:
        "- Costados reforzados con un compuesto especial de hule que brindan gran resistencia durante maniobras y protegen el costado contra daños por roces con cunetas y bordes para mayor durabilidad y renovabilidad.",
      caract4:
        "- Cinco costillas con cuatro ranuras anchas y rectas que otorgan una excelente tracción y maniobrabilidad.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "255/70R22.5",
      medida4: "295/80R22.5",
      ancho1: "277",
      ancho2: "277",
      ancho3: "262",
      ancho4: "298",
      profundidad1: "15.1",
      profundidad2: "15.1",
      profundidad3: "15.1",
      profundidad4: "15.1",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 5,
      title: "R269",
      img1: [images.R269],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Este diseño está dirigido a clientes que buscan rendimiento y una renovabilidad superior.",
      caract2:
        "- Este nuevo diseño cuenta con ranuras rediseñadas, 12% mayor profundidad de estría, tecnológia patentada COOLING FIN que reduce la temperatura en la zona de pestaña y un nuevo compuesto en el lateral y en la region de la pestaña que permite una mayor disipación de calor durante la operación.",
      caract3:
        "- Menor retención de piedras, mayor capacidad de cargas, hasta un 10% mayor rendimiento y una mayor renovabilidad.",
      medida1: "295/80R22.5",
      ancho1: "304",
      profundidad1: "17.7",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 6,
      title: "R249",
      img1: [images.R249],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Ofrce un excelente desempeño y confort. Radio de corona y huella de pisada optimizada para brindar una mayor resistencia al desgaste irregular.",
      caract2: "- Diseño de baja resistencia al rodamiento. ",
      medida1: "295/60R22.5",
      medida2: "315/80R22.5",
      medida3: "315/80R22.5",
      ancho1: "292",
      ancho2: "320",
      ancho3: "320",
      profundidad1: "12.5",
      profundidad2: "14.5",
      profundidad3: "14.5",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 7,
      title: "R152",
      img1: [images.R152],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Ofrece un kilometraje total superior, asimismo, cuenta con expulsores de piedras en la banda de rodamiento lo cual favorece a un excelente índice de renovabilidad.",
      caract2:
        "- Su exclusivo diseño de banda de rodamiento, proporciona una mayor resistencia al calor y al desgaste irregular, su hombro ancho y liso otorga una mayor resistencia a los esfuerzos laterales.",
      medida1: "295/80R22.5",
      ancho1: "298",
      profundidad1: "14",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 8,
      title: "R227",
      img1: [images.R227],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      caract1:
        "- Diseño unidireccional y compuesto especial para un alto desempeño y mayor vida útil.",
      caract2: 
      "- Mayor rendimiento y tracción confiable en mojado.",
      caract3:
        "- Ranuras defensivas y costillas ecualizadoras que evitan y reducen el desgaste irregular.",
      medida1: "285/70R19.5",
      ancho1: "269",
      profundidad1: "13.4",
      logo: [images.bridgestone],
      logo2: [images.B]
    },
    {
      id: 9,
      title: "R260",
      img1: [images.R260],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Ofrece un excelente desempeño y confort.",
      caract2:
        "- Diseño de baja resistencia al rodamiento.",
      caract3:
        "- Diseño de banda de rodamiento y características de protección del casco, para resistir daños por maniobras, contribuyendo a una durabilidad excepcional.",
      caract4:
        "- Excelente renovabilidad gracias a la durabilidad del casco.",
        medida1: "305/75R24.5",
        ancho1: "305",
        profundidad1: "17.5",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 10,
      title: "R238",
      img1: [images.R238],
      img2: [images.todaPosicion],
      img3: [images.Recoleccion],
      caract1:
        "- Su compuesto NANO TECH de clase premium que resultan en un mayor rendimiento kilométrico, reduciendo la resistencia al rodamiento y un casco de ahorro de energía para el uso eficiente del combustible.",
      caract2:
        "- Las características protectoras del casco contribuyen a resistir el daño producido por los roces con los bordes de la acera y la fricción propia de las maniobras, lo que prolonga la vida útil.",
      caract3:
        "- Costillas anchas y sólidas del hombro, ayudan a brindar una mayor resistencia a la fricción al maniobrar.",
        medida1: "215/75R17.5",
        medida2: "225/70R19.5",
        medida3: "245/70R19.5",
        ancho1: "224",
        ancho2: "221",
        ancho3: "236",
        profundidad1: "11.9",
        profundidad2: "12.0",
        profundidad3: "14.2",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 11,
      title: "M814",
      img1: [images.M814],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Posee un diseño esclusivo con un mayor volumen de hule en la banda de rodadura para mayor tracción y aumentar la vida original.",
      caract2:
        "- Tecnología de expulsores de piedras en ranuras centrales para proteger los daños en cinturones y promover la renovabilidad del casco .",
      caract3:
        "- Compuesto base especial para aumentar la resistencia al calor y brindar mayor durabilidad.",
        medida1: "215/75R17.5",
        ancho1: "215",
        profundidad1: "14.6",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 12,
      title: "R184",
      img1: [images.R184],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Ofrece una larga vida útil y excelente renovabilidad.",
      caract2:
        "- Múltiples ranuras transversales en las costillas que ayudan en el desalojo del agua para un mejor desempeño en piso mojado.",
      caract3:
        "- Hombros continuos que ayudan a combatir del daño resultado de las maniobras.",
        medida1: "235/75R17.5",
        ancho1: "233",
        profundidad1: "12.7",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 13,
      title: "R187",
      img1: [images.R187],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Llanta de toda posición para aplicacones regionales.",
      caract2:
        "- Ofrece una gran capacidad de carga y resistencia a los desgastes irregulares.",
      caract3:
        "- Gran tracción en condiciones mojadas.",
        medida1: "8R19.5",
        ancho1: "203",
        profundidad1: "12.7",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 14,
      title: "R294",
      img1: [images.R294],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Llanta de toda posición, uso en servicio regional, recolección y reparto.",
      caract2:
        "- Construcción reforzada en el área de la caja.",
      caract3:
        "- Proporciona mayor estabilidad y resistencia en los costados, mejorando la renovabilidad.",
        medida1: "205/75R16",
        ancho1: "203",
        profundidad1: "11.3",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 15,
      title: "R163",
      img1: [images.R163],
      img2: [images.todaPosicion],
      img3: [images.Urbano],
      caract1:
        "- Integra nuevas tecnologías y compuestos para brindar un nuevo nivel de desempeño como rendimiento total y mejor eficiencia de combustible.",
      caract2:
        "- Posee la tecnología COOLINGFIN en ceja para reducir la temperatura en esta zona para mejorar la durabilidad.",
      caract3:
        "- Amplias ranuras y diseño complejo de strías para brindar una excepcional tracción en condiciones de psio seco o mojado.",
        medida1: "295/80R22.5",
        ancho1: "300",
        profundidad1: "22.3",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 16,
      title: "R192",
      img1: [images.R192],
      img2: [images.todaPosicion],
      img3: [images.Urbano],
      caract1:
        "- Llanta toda posición diseñada para aplicaciones urbanas.",
      caract2:
        "- Compuestos especiales de banda de rodadura que aumentan el desempeño de zonas urbanas, además de proveer un desgaste uniforme y menos costo por kilometro.",
      caract3:
        "- Costados reforzados con un compuesto especial que otorga una mayor resistencia a torsión cortes e impactos para asegurar una mayor renovabilidad .",
        medida1: "11R22.5",
        medida2: "295/80R22.5",
        ancho1: "303",
        ancho2: "310",
        profundidad1: "20.5",
        profundidad2: "19.3",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 17,
      title: "M863",
      img1: [images.M863],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Posee un diseño de última generación para todas las posiciones de camiones de concreto , volquetes y flotas de construcción en aplicaciones dentro y fuera de carretera.",
      caract2:
        "- Expulsores de piedras que ayudan a evitar daños en la carcasa, aumentando la renovabilidad.",
      caract3:
        "- Ranuras en los bloques que promueven la tracción y brindan un agarre sólido en condiciones mojadas.",
        medida1: "11R22.5",
        medida2: "11R24.5",
        medida3: "315/80R22.5",
        ancho1: "279",
        ancho2: "278",
        ancho3: "322",
        profundidad1: "19.1",
        profundidad2: "19.1",
        profundidad3: "19.1",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 18,
      title: "M864",
      img1: [images.M864],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Con construcción avanzada y base ancha la covierte en un aopción para condiciones severas, su nuevo diseño de banda de rodamiento genera un desempeño mejorado en tracción sobre condiciones mojadas y secas.",
      caract2:
        "- Diseño de cuatro costillas para ayudar a extender la vida útil.",
      caract3:
        "- Expulsores de piedras y cuarto cinturon ancho evitando daños mejorando la durabilidad y renovabilidad del casco.",
        medida1: "385/65R22.5",
        medida2: "425/65R22.5",
        ancho1: "304",
        ancho2: "290",
        profundidad1: "18.0",
        profundidad2: "18.5",
        logo: [images.bridgestone],
        logo2: [images.B]
    },
    {
      id: 19,
      title: "FS591",
      img1: [images.M864],
      img2: [images.todaPosicion],
      img3: [images.lDistancia],
      img4: [images.Regional],
      caract1:
        "- Ayuda a obtener el desempeño requerido por los más exigentes, diseñada con costado innovador INTELLISHAPE uqe ayuda a reducir el peso de la llanta sin reducir durabilidad.",
      caract2:
        "- Combina baja resistencia al rodamiento y un casco ahorro de energía para el uso eficiente del combustible.",
      caract3:
        "- Diseño innovador de banda de rodamiento y hombro para mayor rendimiento kilométrico.",
      caract4:
        "- Ranuras laterales defensivas y estrías disipadoras para evitar y reducir el desgaste irregular.",
        medida1: "11R22.5",
        medida2: "11R22.5",
        medida3: "295/75R22.5",
        medida4: "285/75R24.5",
        ancho1: "292",
        ancho2: "292",
        ancho3: "289",
        ancho4: "290",
        profundidad1: "14.2",
        profundidad2: "14.2",
        profundidad3: "14.2",
        profundidad4: "14.2",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 20,
      title: "FS560 Plus",
      img1: [images.FS560PLUS],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Diseño de banda de rodamiento con ranuras transversales para mejor tracción.",
      caract2:
        "- Banda de rodamiento más ancha para distribuir la carga sobre un área mas grande para promover desgaste lento y uniforme.",
      caract3:
        "- Costillas protectoras en ambas paredes laterales para resistir los cortes, enganches y abrasiones por frenar e impactos.",
        medida1: "255/70R22.5",
        ancho1: "262",
        profundidad1: "14",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 21,
      title: "FS561",
      img1: [images.FS561],
      img2: [images.todaPosicion],
      img3: [images.Regional],
      caract1:
        "- Nuevos compuestos, diseño de hombro sólido y casco fortalecido que extienden la vida original, brindando excelente durabilidad y renovabilidad.",
      caract2:
        "- Plataformas expulsoras de piedra en ranuras centrales que proveen protección a los cinturones de acero, mejorando la renovabilidad de la carcasa.",
      caract3:
        "- Costillas protectoras en ambas paredes laterales para resistir los cortes, enganches y abrasiones por frenar e impactos.",
        medida1: "215/75R17.5",
        medida2: "225/70R19.5",
        ancho1: "224",
        ancho2: "220",
        profundidad1: "12",
        profundidad2: "13",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 22,
      title: "FS400",
      img1: [images.FS400],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Diseño de cinco costillas con ranuras transversales para óptima tracción en toda condición climática y larga vida útil.",
      caract2:
        "- Ranura defensiva en el hombro para minimizar el efecto del desgaste irregular.",
      caract3:
        "- Diseño de plataformas expulsoras de piedras en ranuras centrales que reducen daños por retención en cinturones estabilizadores, incrementando la renovabilidad.",
        medida1: "315/80R22.5",
        ancho1: "320",
        profundidad1: "14.3",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 23,
      title: "FS818",
      img1: [images.FS818],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Diseño de base ancha para soportar más carga y propiedades de flotación, mantiene el agarre y alta tracción.",
      caract2:
        "- Cinturones de acero anchos para combatir la torsión de la banda de rodadura y mejorar la capacidad de renovabilidad.",
      caract3:
        "- Posee una banda de rodamiento con características de autolimpieza y con expulsores de piedras en las ranuras lo cual brinda excelente durabilidad.",
        medida1: "385/65R22.5",
        medida2: "425/65R22.5",
        ancho1: "383",
        ancho2: "409",
        profundidad1: "18.0",
        profundidad2: "18.0",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 24,
      title: "FS821",
      img1: [images.FS821],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Maximiza hasta un 15% de su rendimiento kilométrico, 9% de mejor tracción en superficies mojadas.",
      caract2:
        "- Tamaño de pisada mejorada para mantener mejor área de contacto a lo largo de la vida útil para un desgaste lento y uniforme.",
      caract3:
        "- Expulsores de piedras evitando que queden atrapadas en la banda de rodamiento para proteger el casco de posibles daños para aumentar la durabilidad y renovabilidad.",
        medida1: "385/65R22.5",
        medida2: "425/65R22.5",
        ancho1: "383",
        ancho2: "409",
        profundidad1: "18.0",
        profundidad2: "18.0",
        logo: [images.Firestone],
        logo2: [images.F]
    },
    {
      id: 25,
      title: "T819",
      img1: [images.T819],
      img2: [images.todaPosicion],
      img3: [images.off_road],
      caract1:
        "- Compuestos desarrollados para resistir desgarres, arrancamientos y penetraciones.",
      caract2:
        "- Ranuras de tracción en las costillas externas que le dan la versatilidad necesaria para ser usada en diferentes posiciones y aseguran gran durabilidad.",
      caract3:
        "- Cuatro cinturones de acero para mayor resistencia en caminos irregulares.",
        medida1: "11R24.5",
        ancho1: "272",
        profundidad1: "15.8",
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
        {CatalogueTodaPosicion.map((card) => (
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
              <img className="size-28" src={card.img1} alt="Llanta nueva de toda posición" />
            </div>
            <div className="flex">
              <img src={card.img2} alt="Toda posición" />
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

export default CatalogueTodaPosicion;
