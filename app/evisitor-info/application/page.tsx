import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Jak złożyć wniosek o eVisitor — Krok po kroku",
  description: "Szczegółowy przewodnik krok po kroku dotyczący składania wniosku o australijską wizę eVisitor (subclass 651) online.",
};

const steps = [
  {
    num: 1,
    title: "Przygotuj dokumenty",
    desc: "Upewnij się, że posiadasz ważny paszport z minimum 6-miesięcznym okresem ważności, adres e-mail oraz kartę debetową/kredytową (choć opłata wynosi $0).",
  },
  {
    num: 2,
    title: "Wejdź na stronę ImmiAccount",
    desc: "Odwiedź oficjalną stronę rządu australijskiego pod adresem immi.homeaffairs.gov.au i załóż konto ImmiAccount, jeśli jeszcze go nie posiadasz.",
  },
  {
    num: 3,
    title: "Wypełnij formularz wniosku",
    desc: "Wybierz wizę eVisitor (subclass 651) i wypełnij formularz, podając dane osobowe, informacje o paszporcie i cele podróży.",
  },
  {
    num: 4,
    title: "Załącz wymagane dokumenty",
    desc: "Załaduj skany wymaganych dokumentów, w tym stronę ze zdjęciem paszportu.",
  },
  {
    num: 5,
    title: "Złóż wniosek",
    desc: "Sprawdź wszystkie dane i złóż wniosek. Nie ma opłaty za złożenie wniosku o eVisitor.",
  },
  {
    num: 6,
    title: "Oczekuj na decyzję",
    desc: "Większość wniosków jest rozpatrywana w ciągu 3-5 dni roboczych. Decyzja zostanie wysłana na podany adres e-mail.",
  },
];

export default function ApplicationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Jak złożyć wniosek" }]} />
      <PageHead title="Jak złożyć wniosek o eVisitor?" subtitle="Przewodnik krok po kroku dotyczący składania wniosku o australijską wizę elektroniczną" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold font-[Merriweather] mb-8" style={{ color: "#00008B" }}>
          Proces składania wniosku — 6 kroków
        </h2>

        <div className="space-y-6 mb-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5 items-start">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#00008B" }}
              >
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold font-[Merriweather] mb-1" style={{ color: "#00008B" }}>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FFFFF0] rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
            Ważne wskazówki
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold">&#9679;</span>
              <span>Złóż wniosek co najmniej 2-3 tygodnie przed planowaną podróżą.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold">&#9679;</span>
              <span>Upewnij się, że paszport jest ważny przez cały okres planowanego pobytu.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold">&#9679;</span>
              <span>Podawaj tylko prawdziwe i dokładne informacje — fałszywe dane mogą skutkować odmową.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold">&#9679;</span>
              <span>Zachowaj numer potwierdzenia wniosku do późniejszego sprawdzenia statusu.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "#B8860B" }} className="font-bold">&#9679;</span>
              <span>eVisitor jest powiązany elektronicznie z paszportem — nie ma naklejki wizowej.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border-2 mb-10" style={{ borderColor: "#00008B" }}>
          <h2 className="text-xl font-bold font-[Merriweather] mb-3" style={{ color: "#00008B" }}>
            Gdzie złożyć wniosek?
          </h2>
          <p className="text-gray-700 mb-4">
            Wniosek o eVisitor można złożyć wyłącznie online za pośrednictwem oficjalnej strony Department of Home Affairs:
          </p>
          <CTAButton href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" external>
            Oficjalna strona eVisitor (651)
          </CTAButton>
        </div>

        <div className="text-center">
          <CTAButton href="/evisitor-info/required-documents/">
            Sprawdź wymagane dokumenty
          </CTAButton>
        </div>
      </div>
    </>
  );
}
