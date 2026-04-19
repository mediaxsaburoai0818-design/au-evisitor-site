import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Opłata za eVisitor — Bezpłatna wiza do Australii",
  description: "eVisitor (subclass 651) jest całkowicie bezpłatny. Dowiedz się o kosztach i unikaj fałszywych stron pobierających opłaty.",
};

export default function FeePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Opłaty" }]} />
      <PageHead title="Opłata za eVisitor" subtitle="eVisitor (subclass 651) jest całkowicie bezpłatny" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block rounded-2xl p-10 shadow-xl border-2" style={{ borderColor: "#B8860B", backgroundColor: "#FFFFF0" }}>
            <p className="text-lg text-gray-500 mb-2">Opłata za eVisitor (subclass 651)</p>
            <p className="text-6xl md:text-7xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>
              AUD $0
            </p>
            <p className="text-2xl font-bold mt-2" style={{ color: "#B8860B" }}>Całkowicie bezpłatna</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Dlaczego eVisitor jest bezpłatny?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Rząd australijski udostępnia program eVisitor bezpłatnie w ramach promocji turystyki i kontaktów biznesowych z krajami europejskimi. W odróżnieniu od wizy ETA (subclass 601), która kosztuje AUD $20, eVisitor nie wiąże się z żadnymi opłatami rządowymi.
        </p>

        <div className="bg-red-50 rounded-xl p-8 border border-red-200 mb-10">
          <h2 className="text-xl font-bold font-[Merriweather] mb-4 text-red-800">
            Uwaga na fałszywe strony!
          </h2>
          <p className="text-gray-700 mb-4">
            W internecie istnieją strony, które pobierają opłaty za &ldquo;pomoc&rdquo; w złożeniu wniosku o eVisitor. Pamiętaj:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">&#10007;</span>
              <span>Oficjalna opłata za eVisitor wynosi <strong>$0</strong> — nic więcej.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">&#10007;</span>
              <span>Strony pobierające opłatę &ldquo;serwisową&rdquo; nie są oficjalnymi stronami rządu.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">&#10007;</span>
              <span>Jedyną oficjalną stroną do składania wniosków jest <strong>immi.homeaffairs.gov.au</strong>.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Porównanie kosztów wiz australijskich
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
            <thead>
              <tr style={{ backgroundColor: "#00008B" }} className="text-white">
                <th className="text-left p-4 font-[Merriweather]">Typ wizy</th>
                <th className="text-left p-4 font-[Merriweather]">Subclass</th>
                <th className="text-left p-4 font-[Merriweather]">Opłata</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50 border-b">
                <td className="p-4 font-bold">eVisitor</td>
                <td className="p-4">651</td>
                <td className="p-4 font-bold text-green-700">AUD $0 (bezpłatna)</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4">ETA (Electronic Travel Authority)</td>
                <td className="p-4">601</td>
                <td className="p-4">AUD $20</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-4">Visitor Visa</td>
                <td className="p-4">600</td>
                <td className="p-4">AUD $190 - $1,065</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4">Working Holiday</td>
                <td className="p-4">417</td>
                <td className="p-4">AUD $635</td>
              </tr>
            </tbody>
          </table>
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
