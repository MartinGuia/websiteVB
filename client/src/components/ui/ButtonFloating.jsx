import React from "react";
import * as images from "../../img/index.js";

function ButtonFloating({ phoneNumber, message }) {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-7 right-10 flex items-center justify-center max-[430px]:bottom-10 max-[430px]:right-8"
    >
      <img
        src={images.whatsapp} // Reemplaza con la ruta a tu imagen de WhatsApp
        alt="WhatsApp Icon"
        className="w-19 h-10 mr-2"
      />
      {/* <span className="font-semibold">WhatsApp</span> */}
    </button>
  );
}

export default ButtonFloating;
