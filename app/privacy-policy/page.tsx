import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Polityka prywatności — AU eVisitor Polska",
  description: "Polityka prywatności strony AU eVisitor Polska. Informacje o zbieraniu, przechowywaniu i przetwarzaniu danych osobowych.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Polityka prywatności" }]} />
      <PageHead title="Polityka prywatności" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>1. Informacje ogólne</h2>
            <p>Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych osób korzystających ze strony AU eVisitor Polska. Administratorem strony jest AU eVisitor Polska. Szanujemy prawo do prywatności i dbamy o bezpieczeństwo danych.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>2. Zbieranie danych</h2>
            <p>Strona nie zbiera danych osobowych użytkowników w sposób aktywny. Nie wymagamy rejestracji, logowania ani podawania danych osobowych w celu korzystania z treści strony. Nie prowadzimy żadnych formularzy składania wniosków wizowych.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>3. Pliki cookies</h2>
            <p>Strona może wykorzystywać pliki cookies w celu zapewnienia prawidłowego działania serwisu oraz w celach analitycznych. Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące plików cookies.</p>
            <p>Rodzaje plików cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cookies techniczne — niezbędne do prawidłowego działania strony</li>
              <li>Cookies analityczne — wykorzystywane do analizy ruchu na stronie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>4. Linki zewnętrzne</h2>
            <p>Strona zawiera linki do stron zewnętrznych, w szczególności do oficjalnych stron rządu australijskiego. Nie ponosimy odpowiedzialności za politykę prywatności i treść stron zewnętrznych.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>5. Bezpieczeństwo danych</h2>
            <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed nieautoryzowanym dostępem, utratą lub zniszczeniem. Strona korzysta z protokołu HTTPS zapewniającego szyfrowaną komunikację.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>6. Prawa użytkownika</h2>
            <p>Użytkownik ma prawo do:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>7. Kontakt</h2>
            <p>W przypadku pytań dotyczących polityki prywatności prosimy o kontakt pod adresem: info@au-evisitor.pl</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>8. Zmiany w polityce prywatności</h2>
            <p>Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Aktualna wersja jest zawsze dostępna na tej stronie.</p>
            <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecień 2026</p>
          </section>
        </div>
      </div>
    </>
  );
}
