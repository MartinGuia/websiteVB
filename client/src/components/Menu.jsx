import { Link, useLocation } from "react-router-dom";
import * as images from "../img/index.js";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Menu() {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const Menus = [
    {
      id: 1,
      title: "Inicio",
      //   image: tickets,
      to: "/",
    },
    {
      id: 2,
      title: "Servicios",
      //   image: dptos,
      to: "/service",
    },
    {
      id: 3,
      title: "Catalogo",
      //   image: cuentas,
      to: "/catalogue",
    },
    {
      id: 4,
      title: "Contactanos",
      //   image: mensaje,
      to: "/contact",
    },
  ];

  return (
    <>
      <div className="flex w-full justify-between h-32 bg-slate-50 drop-shadow-md max-[600px]:h-28 relative z-10">
        <div className="w-[30%] flex items-center max-[913px]:w-[30%]">
          <img
            src={images.logoVB}
            alt="Logo VitaBajío"
            className="w-[35%] h-28 ml-6 max-[1025px]:w-[50%] max-[861px]:w-[80%] max-[541px]:w-[85%] max-[600px]:h-20 max-[346px]:ml-2 max-[346px]:w-[95%] max-[913px]:w-[68%]"
          />
        </div>
        <div className="w-[50%] flex items-center justify-evenly max-[861px]:w-[65%] max-[913px]:w-[70%] max-[768px]:justify-end">
          {/* Icono del menú */}
          <HiOutlineMenuAlt3
            className="text-3xl cursor-pointer mr-4 md:hidden text-black"
            onClick={() => setShowMenu(!showMenu)} // Cambia el estado del menú desplegable al hacer clic en el icono del menú
          />
          {/* Menú desplegable */}
          <ul
            className={`md:hidden absolute right-1 top-full bg-white text-black border border-gray-200 rounded-lg shadow-lg p-4 ${
              showMenu ? "block" : "hidden" // Mostrar u ocultar el menú desplegable según el estado
            }`}
          >
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className={
                  location.pathname === menu.to
                    ? "border-yellow-400 border-b-[3px] text-blue-500 py-2"
                    : "py-2"
                }
              >
                <Link to={menu.to} onClick={() => setShowMenu(false)}>
                  <span className="font-medium text-lg">{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Menú en versión de escritorio */}
          <ul className="hidden w-[100%] md:flex justify-evenly items-center">
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className={
                  location.pathname === menu.to
                    ? "border-y-[3px] border-yellow-400 text-blue-500 list-none py-2 "
                    : " hover:text-blue-500 list-none "
                }
              >
                <Link to={menu.to}>
                  <span className="font-thin text-2xl">{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-[50%] flex justify-evenly items-center max-[861px]:w-[65%]">
          {Menus.map((menu) => (
            <li
              key={menu.id}
              className={
                location.pathname === menu.to
                  ? "border-y-[3px] border-yellow-400 list-none py-2"
                  : "list-none"
              }
            >
              <Link to={menu.to}>
                <span className="font-medium text-2xl max-[861px]:text-base max-[600px]:text-sm max-[346px]:text-xs">
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Menu;
