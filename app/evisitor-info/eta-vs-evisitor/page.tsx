import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ETA vs eVisitor — Różnice między subclass 601 a 651",
  description: "Porównanie australijskich wiz ETA (subclass 601) i eVisitor (subclass 651). Dowiedz się, która wiza jest odpowiednia dla obywateli polskich.",
};

export default function ETAvsEvisitorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "ETA vs eVisitor" }]} />
      <PageHead title="ETA (601) vs eVisitor (651)" subtitle="Porównanie dwóch australijskich wiz elektronicznych" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          Australia oferuje dwie główne wizy elektroniczne dla krótkoterminowych wizyt: ETA (Electronic Travel Authority, subclass 601) oraz eVisitor (subclass 651). Choć obie wizy mają podobne warunki, istnieją istotne różnice.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr style={{ backgroundColor: "#00008B" }} className="text-white">
                <th className="text-left p-4 font-[Merriweather]">Cecha</th>
                <th className="text-left p-4 font-[Merriweather]">ETA (601)</th>
                <th className="text-left p-4 font-[Merriweather]">eVisitor (651)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Opłata", "AUD $20", "Bezpłatna (AUD $0)"],
                ["Okres ważności", "12 miesięcy", "12 miesięcy"],
                ["Maksymalny pobyt", "do 90 dni", "do 90 dni"],
                ["Wielokrotny wjazd", "Tak", "Tak"],
                ["Kraje uprawnione", "Głównie kraje azjatyckie, USA, Kanada", "Kraje europejskie (w tym Polska)"],
                ["Sposób składania", "Aplikacja mobilna Australian ETA", "Online przez ImmiAccount"],
                ["Cel podróży", "Turystyka, biznes", "Turystyka, biznes"],
                ["Czas rozpatrywania", "Zazwyczaj natychmiast", "3-5 dni roboczych"],
                ["Praca zarobkowa", "Nie", "Nie"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-bold text-gray-800 border-b">{row[0]}</td>
                  <td className="p-4 text-gray-600 border-b">{row[1]}</td>
                  <td className="p-4 text-gray-600 border-b font-medium" style={{ color: row[0] === "Opłata" ? "#10B981" : undefined }}>
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Która wiza jest odpowiednia dla Polaków?
        </h2>
        <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-10">
          <h3 className="text-xl font-bold font-[Merriweather] mb-3 text-green-800">
            Odpowiedź: eVisitor (subclass 651)
          </h3>
          <p className="text-gray-700 mb-4">
            Jako obywatel Polski, powinieneś ubiegać się o wizę <strong>eVisitor (subclass 651)</strong>. Jest to wiza dedykowana obywatelom krajów europejskich i jest <strong>całkowicie bezpłatna</strong>.
          </p>
          <p className="text-gray-600 text-sm">
            ETA (subclass 601) jest przeznaczona głównie dla obywateli krajów azjatyckich, USA, Kanady i kilku innych krajów spoza Europy. Obywatele polscy nie mogą ubiegać się o ETA.
          </p>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Kluczowe różnice
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#B8860B" }}>Koszt</h3>
            <p className="text-gray-600">
              Najważniejsza różnica to cena. ETA kosztuje AUD $20, podczas gdy eVisitor jest całkowicie bezpłatny. Dla polskich podróżnych to dodatkowa oszczędność.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#B8860B" }}>Sposób składania</h3>
            <p className="text-gray-600">
              ETA składa się przez dedykowaną aplikację mobilną, natomiast eVisitor przez stronę internetową ImmiAccount. Oba procesy są w pełni elektroniczne.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#B8860B" }}>Czas rozpatrywania</h3>
            <p className="text-gray-600">
              ETA jest zazwyczaj rozpatrywana natychmiast lub w ciągu kilku godzin. eVisitor może zająć 3-5 dni roboczych, dlatego warto złożyć wniosek z wyprzedzeniem.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#B8860B" }}>Uprawnione kraje</h3>
            <p className="text-gray-600">
              ETA i eVisitor obejmują różne grupy krajów. Polska jest uprawniona wyłącznie do programu eVisitor. Sprawdź oficjalną stronę, aby potwierdzić uprawnienia.
            </p>
          </div>
        </div>

        <div className="text-center">
          <CTAButton href="/evisitor-info/application/">
            Złóż bezpłatny wniosek o eVisitor
          </CTAButton>
        </div>
      </div>
    </>
  );
}
