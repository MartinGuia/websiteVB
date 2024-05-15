import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as images from "../../img/index.js";

function Carousel() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Slider {...settings} className="w-[80%] max-[853px]:w-[85%] relative">
        <div className="relative rounded-md">
          <img src={images.slider1} alt="Imagen 1" className="" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
            <span className="font-medium text-2xl text-center max-[575px]:text-xs max-[575px]:font-normal">
            "Rodando hacia el futuro: <br />
             Calidad y Seguridad en cada giro."
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={images.slider2} alt="Imagen 2" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
            <span className="font-medium text-2xl text-center max-[575px]:text-xs max-[575px]:font-normal">
              Desde hace 10 años ofrecemos nuestro servicio de venta de llanta <br className="max-[345px]:hidden"/>
              nueva, convirtiéndonos en distribuidores oficiales de las <br />
              principales marcas premium y algunas de bajo costo, avaladas por <br className="max-[345px]:hidden"/>
              su calidad alrededor del mundo.
            </span>
          </div> 
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
