import Menu from "../components/Menu.jsx";
import lDistancia from "../img/LargaDistancia.png";
import traccion from "../img/traccion.png";
import ejeLibre from "../img/EjeLibre.png";

function CataloguePage() {
  const Cards = [
    {
      id: 1,
      title: "Toda posición",
      img: [lDistancia],
      description: "Este tipo de llantas puede ser utilizado en todos los ejes del vehículo.",
    },
    {
      id: 2,
      title: "Tracción",
      img: [traccion ],
      description: "Neumático ideal para ejes de tracción.",
    },
    {
      id: 3,
      title: "Eje Libre",
      img: [ejeLibre],
      description: "Neumático para uso exclusivo en semi-remolques, dollies y patines.",
    },
  ];

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        {/* Section de la simbología de las posiciones */}
        <section>
          <h1 className="flex justify-center text-3xl font-bold mt-4">
            Posición
          </h1>
          <div className="flex justify-around mt-5">
            {Cards.map((card) => (
              <article
                key={card.id}
                className=" flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-md hover:-translate-y-3 duration-700 border-[1px]"
              >
                <img src={card.img} alt=""  className="mt-1"/>
                <h1 className="font-medium">{card.title}</h1>
                <p className="text-center text-sm mt-2">{card.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default CataloguePage;
