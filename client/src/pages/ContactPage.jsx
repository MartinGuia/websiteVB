import Menu from "../components/Menu.jsx";
import Contact from "../components/ui/Contact.jsx";
import ButtonFloating from "../components/ui/ButtonFloating.jsx";

function ContactPage() {
  // Configura el número de WhatsApp y el mensaje predefinido
  const phoneNumber = "524641407721"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría solicitar una cotización.";
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Contact />
        <section>
            <ButtonFloating phoneNumber={phoneNumber} message={message} />
          </section>
      </main>
    </>
  );
}

export default ContactPage;
