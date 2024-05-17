
// const Modal = ({ isOpen, onClose, children, idUsuario }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="fixed inset-0 transition-opacity" onClick={onClose}>
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>
//         <div className="relative bg-white rounded-lg shadow-xl w-96 max-[541px]:w-80 max-[281px]:w-60">
//           <div className="p-8">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Modal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-[50%] shadow-lg">
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <section className="text-justify">
        <p className="mb-2">{item.caract1}</p>
        <p className="mb-2">{item.caract2}</p>
        <p className="mb-2">{item.caract3}</p>
        <p>{item.caract4}</p>
        </section>
        <section className="flex justify-evenly">
          <div>
            <h1>Ancho</h1>
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
          <div>
            <h1>Profundidad</h1>
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
        </section>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
