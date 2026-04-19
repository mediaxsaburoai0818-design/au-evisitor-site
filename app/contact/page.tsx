import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Kontakt — AU eVisitor Polska",
  description: "Skontaktuj się z nami w sprawie pytań dotyczących australijskiej wizy eVisitor (subclass 651).",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Kontakt" }]} />
      <PageHead title="Kontakt" subtitle="Masz pytania? Skontaktuj się z nami" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
              Skontaktuj się z nami
            </h2>
            <p className="text-gray-700 mb-6">
              Jeśli masz pytania dotyczące treści na naszej stronie lub chcesz zgłosić błąd w informacjach, skontaktuj się z nami za pomocą poniższego adresu e-mail.
            </p>
            <div className="bg-[#FFFFF0] rounded-lg p-6 border border-gray-200 mb-6">
              <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#00008B" }}>E-mail</h3>
              <p className="text-gray-700">info@au-evisitor.pl</p>
            </div>
            <div className="bg-[#FFFFF0] rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#00008B" }}>Czas odpowiedzi</h3>
              <p className="text-gray-700">Staramy się odpowiadać na wiadomości w ciągu 2-3 dni roboczych.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
              Oficjalne kontakty
            </h2>
            <p className="text-gray-700 mb-6">
              W przypadku pytań dotyczących wniosku wizowego lub statusu wizy, skontaktuj się bezpośrednio z oficjalnymi instytucjami:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow border-l-4" style={{ borderLeftColor: "#00008B" }}>
                <h3 className="font-bold font-[Merriweather] text-sm mb-1" style={{ color: "#00008B" }}>
                  Department of Home Affairs
                </h3>
                <p className="text-gray-600 text-sm">
                  <a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    immi.homeaffairs.gov.au
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow border-l-4" style={{ borderLeftColor: "#00008B" }}>
                <h3 className="font-bold font-[Merriweather] text-sm mb-1" style={{ color: "#00008B" }}>
                  Ambasada Australii w Warszawie
                </h3>
                <p className="text-gray-600 text-sm">
                  <a href="https://poland.embassy.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    poland.embassy.gov.au
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <p className="text-gray-700 text-sm">
            <strong>Uwaga:</strong> Nie jesteśmy w stanie udzielać porad prawnych dotyczących wiz ani pomagać w składaniu wniosków wizowych. W przypadku problemów z wnioskiem, skontaktuj się z Department of Home Affairs lub skonsultuj się z licencjonowanym agentem migracyjnym.
          </p>
        </div>
      </div>
    </>
  );
}
