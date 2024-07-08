import * as images from "../../img/index.js";

function ButtonWhatsapp({ phoneNumber, message }) {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <button
      onClick={openWhatsApp}
      className="rounded-full shadow-md  bg-green-500 hover:bg-green-600 flex items-center justify-center py-2 px-6"
    >
      <img
        src={images.whatsapp} // Reemplaza con la ruta a tu imagen de WhatsApp
        alt="WhatsApp"
        className="w-6 h-6 mr-2"
      />
      <span className="text-white font-semibold">WhatsApp</span>
    </button>
  );
}

export default ButtonWhatsapp;
