import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Términos de Servicio</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">1. OBJETO Y ACEPTACIÓN</h2>
            <p className="text-gray-300 mb-4">
              El presente aviso legal regula el uso del sitio web https://thehackerslabs.com, del que es titular THE HACKERS LABS. La navegación por la plataforma de THE HACKERS LABS atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
            </p>
            <p className="text-gray-300">
              El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">2. IDENTIFICACIÓN Y COMUNICACIONES</h2>
            <p className="text-gray-300 mb-4">
              THE HACKERS LABS, en cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, le informa que:
            </p>
            <p className="text-gray-300">Email: info@thehackerslabs.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">3. CONDICIONES DE ACCESO Y UTILIZACIÓN</h2>
            <p className="text-gray-300 mb-4">
              La plataforma y sus servicios son de acceso libre y gratuito, no obstante, THE HACKERS LABS condiciona la utilización de algunos de los servicios ofrecidos en su plataforma a la previa cumplimentación del correspondiente formulario.
            </p>
            <p className="text-gray-300 mb-4">El usuario se compromete a no:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobo, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
              <li>Introducir virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los sistemas.</li>
              <li>Intentar acceder a las cuentas de correo electrónico de otros usuarios o a áreas restringidas de los sistemas informáticos.</li>
              <li>Vulnerar los derechos de propiedad intelectual o industrial.</li>
              <li>Suplantar la identidad de otro usuario, de las administraciones públicas o de un tercero.</li>
              <li>Reproducir, copiar, distribuir, transformar o modificar los contenidos sin autorización.</li>
              <li>Recabar datos con finalidad publicitaria sin consentimiento previo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">4. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD</h2>
            <p className="text-gray-300 mb-4">
              THE HACKERS LABS excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
              <li>La presencia de virus o de otros elementos en los contenidos.</li>
              <li>El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">5. PROCEDIMIENTO EN CASO DE ACTIVIDADES ILÍCITAS</h2>
            <p className="text-gray-300">
              En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, deberá enviar una notificación a THE HACKERS LABS identificándose debidamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#ff6900] mb-4">6. PUBLICACIONES</h2>
            <p className="text-gray-300">
              La información administrativa facilitada a través del sitio web no sustituye la publicidad legal de las leyes, normativas, planes, disposiciones generales y actos que tengan que ser publicados formalmente a los diarios oficiales de las administraciones públicas, que constituyen el único instrumento que da fe de su autenticidad y contenido.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;