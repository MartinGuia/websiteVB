import Menu from "../components/Menu.jsx";
import Contact from "../components/ui/Contact.jsx";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <>
    <Helmet>
        <title>Contacto - VitaBajío</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <meta
          name="description"
          content="Síguenos en nuestras redes sociales para obtener los últimos productos, promociones y consejos para el cuidado de tus neumáticos."
        />
        <meta
          name="keywords"
          content="contacto, Sociales, Ubicación, VitaBajío"
        />
        <meta property="og:title" content="Contacto - VitaBajío" />
        <meta
          property="og:description"
          content="Síguenos en nuestras redes sociales para obtener los últimos productos, promociones y consejos para el cuidado de tus neumáticos."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <header>
        <Menu />
      </header>
      <main>
        <Contact />
      </main>
    </>
  );
}

export default ContactPage;
