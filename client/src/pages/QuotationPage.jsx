import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import * as images from "../img/index.js";

function QuotationPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ljsxxil", "template_u6mb1oa", form.current, {
        publicKey: "fT4IG8SSJL_MryyCO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className="bg-gradient-to-br from-slate-800 to-slate-900 h-dvh flex items-center flex-col">
          <h1 className="text-3xl text-white mb-3 font-bold mt-10">Cotización de llantas</h1>
          <div className="relative bottom-2 right-[40%]">
              <Link to="/">
                <button className="bg-white rounded-full p-1 shadow-lg shadow-slate-800/60">
                  <img src={images.flecha} className="size-6" alt="" />
                </button>
              </Link>
            </div>
          <section className="bg-primary w-[50%] h-auto p-4 rounded-2xl shadow-lg shadow-slate-100/30 max-[912px]:w-[50%] max-[430px]:w-[70%] top-24 relative">
            <form ref={form} onSubmit={sendEmail}>
              
              <article className="flex flex-col items-center mb-6 mt-2">
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className=" flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-white">Nombre completo</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="text" name="user_name" 
                      placeholder="nombre"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-white">Número de télefono</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="number" name="user_number"
                      placeholder="Número de télefono"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-white">Correo</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="email" name="user_email"
                      placeholder="Correo"
                    />
                  </div>
                </div>
                
                <div className="">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium"
                  >
                    <h1 className="text-white font-medium">Mesaje</h1>
                  </label>
                  <textarea
                    className="text-black text-sm h-20 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto"
                     name="message" 
                  />
                 
                </div>
              </article>
              <article className="mb-7">
                <div className="flex justify-center">
                  <button
                    className="bg-yellow-400 shadow-lg shadow-yellow-500/30 text-white rounded-md py-2 px-8"
                    type="submit" value="Send"
                  >
                    Agregar
                  </button>
                </div>
              </article>
            </form>
          </section>
        </main>
    </>
  );
}

export default QuotationPage;
