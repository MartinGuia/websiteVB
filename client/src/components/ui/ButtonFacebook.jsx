import * as images from "../../img/index.js";

function ButtonFacebook() {
   // Estilo Tailwind para el botón flotante
   const buttonStyle = "bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-md flex items-center justify-center";

   // Función para abrir la página de Facebook en una nueva pestaña
   const openFacebook = () => {
       window.open('https://www.facebook.com/profile.php?id=61559730121097&mibextid=LQQJ4d', '_blank');
   };

   return (
       <button className={buttonStyle} onClick={openFacebook}>
           <img className="w-6 h-6 mr-2" src={images.facebook} alt="Facebook" />
           <span className="font-semibold">Facebook</span>
       </button>
   );
};

export default ButtonFacebook