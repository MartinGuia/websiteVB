const Modal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 max-[540px]:text-sm">
      <div className="bg-white p-8 rounded-lg w-[50%] shadow-lg max-[540px]:w-[70%] max-[430px]:w-[90%] max-[344px]:w-[98%] text-black">
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <section>
          <article className="text-justify">
            <p className="mb-2">{item.caract1}</p>
            <p className="mb-2">{item.caract2}</p>
            <p className="mb-2">{item.caract3}</p>
            <p>{item.caract4}</p>
          </article>
          <hr />
          <article className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <h1 className="font-bold">Medida</h1>
              <p>{item.medida1}</p>
              <p>{item.medida2}</p>
              <p>{item.medida3}</p>
              <p>{item.medida4}</p>
              <p>{item.medida5}</p>
            </div>
            <div className="flex flex-col items-center mr-2">
              <h1 className="font-bold">Ancho de sección</h1>
              <p>{item.ancho1}</p>
              <p>{item.ancho2}</p>
              <p>{item.ancho3}</p>
              <p>{item.ancho4}</p>
              <p>{item.ancho5}</p>
              <p>{item.ancho6}</p>
              <p>{item.ancho7}</p>
              <p>{item.ancho8}</p>
              <p>{item.ancho9}</p>
              <p>{item.ancho10}</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold">Profundidad</h1>
              <p>{item.profundidad1}</p>
              <p>{item.profundidad2}</p>
              <p>{item.profundidad3}</p>
              <p>{item.profundidad4}</p>
              <p>{item.profundidad5}</p>
              <p>{item.profundidad6}</p>
              <p>{item.profundidad7}</p>
              <p>{item.profundidad8}</p>
              <p>{item.profundidad9}</p>
              <p>{item.profundidad10}</p>
            </div>
          </article>
        </section>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cerrar
          </button>
          <img
            className="w-[20%] h-10 max-[1024px]:w-[40%] max-[540px]:w-[56%]"
            src={item.logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
