import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Regulamin — AU eVisitor Polska",
  description: "Regulamin korzystania ze strony AU eVisitor Polska. Warunki użytkowania i zastrzeżenia prawne.",
};

export default function AgreementPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Regulamin" }]} />
      <PageHead title="Regulamin" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>1. Postanowienia ogólne</h2>
            <p>Niniejszy regulamin określa zasady korzystania ze strony internetowej AU eVisitor Polska. Korzystanie ze strony oznacza akceptację niniejszego regulaminu w całości.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>2. Charakter strony</h2>
            <p>AU eVisitor Polska jest nieoficjalnym serwisem informacyjnym. Strona nie jest powiązana z rządem Australii, Department of Home Affairs ani żadną inną instytucją rządową. Nie składamy wniosków wizowych w imieniu użytkowników i nie pobieramy żadnych opłat za usługi.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>3. Treści informacyjne</h2>
            <p>Informacje zamieszczone na stronie mają charakter wyłącznie informacyjny i edukacyjny. Dokładamy wszelkich starań, aby treści były aktualne i rzetelne, jednak nie gwarantujemy ich pełnej dokładności. Oficjalnym źródłem informacji o wizach australijskich jest strona rządu australijskiego (domeny .gov.au).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>4. Odpowiedzialność</h2>
            <p>Nie ponosimy odpowiedzialności za:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Decyzje podjęte na podstawie informacji zamieszczonych na stronie</li>
              <li>Odmowę przyznania wizy lub jakiekolwiek konsekwencje związane z procesem wizowym</li>
              <li>Błędy lub nieaktualność informacji</li>
              <li>Treści i politykę prywatności stron zewnętrznych, do których prowadzą linki</li>
              <li>Szkody wynikające z korzystania ze strony</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>5. Prawa autorskie</h2>
            <p>Wszelkie treści zamieszczone na stronie, w tym teksty, grafiki i układ strony, są chronione prawem autorskim. Kopiowanie, rozpowszechnianie lub wykorzystywanie treści bez zgody jest zabronione.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>6. Zmiany regulaminu</h2>
            <p>Zastrzegamy sobie prawo do zmiany niniejszego regulaminu. Aktualna wersja regulaminu jest zawsze dostępna na tej stronie. Dalsze korzystanie ze strony po wprowadzeniu zmian oznacza ich akceptację.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>7. Kontakt</h2>
            <p>W przypadku pytań dotyczących regulaminu prosimy o kontakt pod adresem: info@au-evisitor.pl</p>
          </section>

          <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecień 2026</p>
        </div>
      </div>
    </>
  );
}
