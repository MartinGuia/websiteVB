import * as images from "../../img/index.js";

function Contact() {
  return (
    <>
      <main className="flex justify-center text-black">
        <div className="w-[90%] justify-evenly mt-6 relative bg-slate-100 rounded-xl p-4 shadow-lg">
          <div className="flex max-[768px]:flex-col max-[541px]:flex-col">
            <section className="w-[50%] flex flex-col max-[768px]:w-[100%] max-[541px]:w-[100%]">
              <article>
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl font-bold max-[540px]:text-2xl">Llamanos</h1>
                  <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-[50%]" />
                  <div className="flex mt-8 max-[540px]:mt-4">
                    <img className="size-8 mr-4" src={images.phone} alt="" />
                    <p className="text-2xl max-[540px]:text-xl">464-136-3889</p>
                  </div>
                </div>
              </article>
              <article className="mt-8">
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl font-bold max-[540px]:text-2xl">Contacto</h1>
                  <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-[50%]" />
                  <div className="flex mt-8 max-[540px]:mt-4">
                    <img className="size-8 mr-4" src={images.contact} alt="" />
                    <p className="text-2xl max-[540px]:text-xl">abarea@vitabajio.com</p>
                  </div>
                </div>
              </article>
            </section>
            <section className="w-[50%] flex flex-col items-center justify-center max-[768px]:w-[100%] max-[768px]:mt-10 max-[541px]:w-[100%]">
              <h1 className="flex justify-center text-4xl font-bold max-[540px]:text-2xl max-[540px]:mt-5">
                Ubicación
              </h1>
              <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-[50%]" />
              <iframe
                className="w-[100%] mt-5 lg:h-60 md:h-72"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2971990449066!2d-101.18318940025155!3d20.564383419385976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c853f95560771%3A0xc23f71fda5f290c0!2sVita%20Bajio!5e0!3m2!1ses!2smx!4v1715801749820!5m2!1ses!2smx"
              ></iframe>
            </section>
          </div>
          <section className="w-[100%] mt-10 max-[540px]:mt-4">
            <article className="flex justify-evenly">
              <img className="w-[10%] h-[10%] max-[768px]:w-[20%] max-[768px]:h-[20%] max-[540px]:w-[30%]" src={images.logoVB} alt="" />
              <img className="w-[10%] h-[10%] max-[768px]:w-[20%] max-[768px]:h-[20%] max-[540px]:w-[30%]" src={images.bandag} alt="" />
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
