import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidad</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">1. ¿Quién es el responsable de tratamiento de sus datos?</h2>
            <p className="text-gray-300 mb-2">THE HACKERS LABS</p>
            <p className="text-gray-300">info@thehackerslabs.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">2. ¿Qué tipo de datos tenemos sobre su persona y cómo los hemos obtenido?</h2>
            <p className="text-gray-300 mb-4">Las categorías de datos personales que tratamos de clientes y proveedores son:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Datos de identificación.</li>
              <li>Direcciones electrónicas.</li>
              <li>Información comercial.</li>
            </ul>
            <p className="text-gray-300">En ningún caso tratamos datos especialmente protegidos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">3. ¿Con qué finalidad tratamos sus datos?</h2>
            <p className="text-gray-300 mb-4">Tratamos los datos que nos facilitan las personas interesadas con el fin de gestionar distintas actividades derivadas de procedimientos específicos realizados en materia de ventas, servicio post venta, gestión de proveedores, calidad de servicios, etc. De esta manera, utilizaremos sus datos para llevar a cabo alguna de las siguientes acciones:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Envío de la información que nos soliciten mediante el formulario de contacto de nuestra página web o cualquier otro medio de contacto.</li>
              <li>Llevar a cabo encuestas de satisfacción, estudios de mercado, etc.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">4. ¿Por cuánto tiempo conservaremos sus datos?</h2>
            <p className="text-gray-300 mb-4">Los datos personales relativos a personas físicas vinculadas a clientes potenciales, clientes y proveedores que recopilemos mediante los distintos formularios de contacto y/o recogida de información se conservarán mientras no se solicite su supresión por el interesado. Los datos proporcionados por nuestros clientes y proveedores se conservarán mientras se mantenga la relación mercantil entre las partes respetando en cualquier caso los plazos mínimos legales de conservación según la materia.</p>
            <p className="text-gray-300">En cualquier caso, guardaremos sus datos personales durante el período de tiempo que sea razonablemente necesario teniendo en cuenta nuestras necesidades de dar respuesta a cuestiones que se planteen o resolver problemas, realizar mejoras, activar nuevos servicios y cumplir los requisitos que exija la legislación aplicable.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">5. ¿A qué destinatarios se comunicarán sus datos?</h2>
            <p className="text-gray-300 mb-4">No cederemos sus datos personales a ninguna empresa tercera que pretenda utilizarlos en sus acciones de marketing directo, excepto en el caso de que nos haya autorizado expresamente a ello.</p>
            <p className="text-gray-300">Le informamos que podemos facilitar sus datos personales a organismos de la Administración Pública y Autoridades competentes en aquellos casos en que nos requieran legalmente o en los casos en que, actuando de buena fe, consideremos que tal acción es razonablemente necesaria para cumplir con un proceso judicial; para contestar cualquier reclamación o demanda jurídica; o para proteger los derechos de la empresa o sus clientes y el público en general.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">6. ¿Cuáles son sus derechos como interesado?</h2>
            <p className="text-gray-300 mb-4">Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan, o no.</p>
            <p className="text-gray-300 mb-4">En concreto, las personas interesadas pueden solicitar:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Derecho de acceso a sus datos personales</li>
              <li>Derecho de rectificación de datos inexactos</li>
              <li>Derecho de supresión</li>
              <li>Derecho de limitación del tratamiento</li>
              <li>Derecho de oposición al tratamiento</li>
              <li>Derecho de portabilidad</li>
            </ul>
            <p className="text-gray-300 mb-4">Asimismo, le informamos que tiene derecho a retirar sus consentimientos otorgados en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
            <p className="text-gray-300 mb-4">Puede ejercer sus derechos contactando con nosotros a través de info@thehackerslabs.com</p>
            <p className="text-gray-300">También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de datos: <a href="http://www.agpd.es/portalwebAGPD/index-ides-idphp.php" className="text-[#ff6900] hover:text-[#ff8c00]" target="_blank" rel="noopener noreferrer">www.agpd.es</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;