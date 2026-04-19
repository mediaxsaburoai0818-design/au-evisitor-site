import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Working Holiday Visa Australia (subclass 417) — Informacje dla Polaków",
  description: "Informacje o australijskiej wizie Working Holiday (subclass 417) dla obywateli polskich. Wymagania, opłaty i proces składania wniosku.",
};

export default function WorkingHolidayPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Working Holiday" }]} />
      <PageHead title="Working Holiday Visa (subclass 417)" subtitle="Wiza umożliwiająca pracę i podróżowanie po Australii" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#FFFFF0] rounded-xl p-6 border border-gray-200 mb-10">
          <p className="text-gray-700">
            <strong>Uwaga:</strong> Working Holiday Visa (subclass 417) to zupełnie inny typ wizy niż eVisitor (subclass 651). Ta strona zawiera podstawowe informacje o programie Working Holiday dla obywateli polskich.
          </p>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Czym jest Working Holiday Visa?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Working Holiday Visa (subclass 417) to wiza umożliwiająca młodym ludziom (18-30 lat) podróżowanie po Australii z możliwością podjęcia pracy zarobkowej. Program jest dostępny dla obywateli krajów, z którymi Australia ma podpisane umowy dwustronne, w tym Polski.
        </p>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Podstawowe informacje
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { label: "Subclass", value: "417" },
            { label: "Opłata", value: "AUD $635" },
            { label: "Okres ważności", value: "12 miesięcy" },
            { label: "Wiek", value: "18-30 lat" },
            { label: "Praca", value: "Tak (do 6 miesięcy u jednego pracodawcy)" },
            { label: "Nauka", value: "Tak (do 4 miesięcy)" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-5 shadow border-l-4" style={{ borderLeftColor: "#B8860B" }}>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-bold" style={{ color: "#00008B" }}>{item.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Wymagania
        </h2>
        <ul className="space-y-3 text-gray-700 mb-10">
          {[
            "Wiek 18-30 lat w momencie składania wniosku",
            "Obywatelstwo polskie z ważnym paszportem",
            "Brak dzieci na utrzymaniu podczas podróży",
            "Wystarczające środki finansowe na początek pobytu (ok. AUD $5,000)",
            "Bilet powrotny lub środki na jego zakup",
            "Spełnienie wymagań zdrowotnych i kryminalnych",
            "Ubezpieczenie zdrowotne na czas pobytu",
          ].map((req, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold mt-0.5">&#10003;</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          eVisitor vs Working Holiday
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
            <thead>
              <tr style={{ backgroundColor: "#00008B" }} className="text-white">
                <th className="text-left p-4 font-[Merriweather]">Cecha</th>
                <th className="text-left p-4 font-[Merriweather]">eVisitor (651)</th>
                <th className="text-left p-4 font-[Merriweather]">Working Holiday (417)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Opłata", "Bezpłatna", "AUD $635"],
                ["Praca", "Niedozwolona", "Dozwolona"],
                ["Pobyt", "do 90 dni", "12 miesięcy"],
                ["Wiek", "Bez ograniczeń", "18-30 lat"],
                ["Cel", "Turystyka/biznes", "Praca i podróż"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-bold text-gray-800 border-b">{row[0]}</td>
                  <td className="p-4 text-gray-600 border-b">{row[1]}</td>
                  <td className="p-4 text-gray-600 border-b">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl p-8 border-2 mb-10" style={{ borderColor: "#00008B" }}>
          <h3 className="text-xl font-bold font-[Merriweather] mb-3" style={{ color: "#00008B" }}>
            Oficjalna strona Working Holiday
          </h3>
          <p className="text-gray-700 mb-4">
            Szczegółowe informacje i formularz wniosku znajdziesz na oficjalnej stronie rządu australijskiego.
          </p>
          <CTAButton href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417" external>
            Oficjalna strona Working Holiday (417)
          </CTAButton>
        </div>

        <div className="text-center">
          <CTAButton href="/evisitor-info/what-is-evisitor/">
            Wróć do informacji o eVisitor
          </CTAButton>
        </div>
      </div>
    </>
  );
}
