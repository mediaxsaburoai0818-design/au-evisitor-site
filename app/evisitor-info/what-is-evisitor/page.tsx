import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Czym jest eVisitor (subclass 651)? — Australijska wiza elektroniczna",
  description: "Dowiedz się, czym jest australijski eVisitor (subclass 651), kto może się ubiegać i jakie są warunki tej bezpłatnej wizy elektronicznej.",
};

export default function WhatIsEvisitor() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Czym jest eVisitor" }]} />
      <PageHead title="Czym jest eVisitor (subclass 651)?" subtitle="Kompletny przewodnik po australijskiej wizie elektronicznej dla obywateli polskich" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Definicja eVisitor</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            eVisitor (subclass 651) to bezpłatna wiza elektroniczna wydawana przez rząd Australii, przeznaczona dla obywateli krajów europejskich, w tym Polski. Umożliwia podróżowanie do Australii w celach turystycznych, odwiedzin rodziny, lub krótkoterminowych wizyt biznesowych.
          </p>

          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Główne cechy eVisitor</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Bezpłatna", desc: "Złożenie wniosku o eVisitor nie wiąże się z żadnymi opłatami (AUD $0)." },
              { title: "Wielokrotny wjazd", desc: "Możliwość wielokrotnego wjazdu do Australii w okresie ważności wizy." },
              { title: "12 miesięcy ważności", desc: "Wiza jest ważna przez 12 miesięcy od daty przyznania." },
              { title: "Pobyt do 90 dni", desc: "Każdy pobyt w Australii może trwać maksymalnie 90 dni." },
            ].map((item) => (
              <div key={item.title} className="bg-[#FFFFF0] rounded-lg p-5 border border-gray-200">
                <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#00008B" }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Kto może ubiegać się o eVisitor?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O eVisitor mogą ubiegać się obywatele wielu krajów europejskich, w tym:
          </p>
          <ul className="list-none space-y-2 mb-6">
            {["Polska", "Niemcy", "Francja", "Włochy", "Hiszpania", "Holandia", "Belgia", "Austria", "Szwecja", "Dania", "Finlandia", "Norwegia", "Szwajcaria", "Czechy", "Węgry", "Portugalia", "Grecja", "Irlandia", "Wielka Brytania"].map((c) => (
              <li key={c} className="flex items-center gap-2 text-gray-700">
                <span style={{ color: "#B8860B" }}>&#9679;</span> {c}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm italic mb-6">
            *To nie jest pełna lista. Sprawdź oficjalną stronę rządu australijskiego, aby zobaczyć pełną listę krajów uprawnionych.
          </p>

          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Cele podróży dozwolone na eVisitor</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-5 border-2" style={{ borderColor: "#00008B" }}>
              <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#00008B" }}>Turystyka</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Zwiedzanie i wakacje</li>
                <li>Odwiedziny rodziny i przyjaciół</li>
                <li>Rejsy wycieczkowe</li>
                <li>Zajęcia rekreacyjne</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 border-2" style={{ borderColor: "#00008B" }}>
              <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#00008B" }}>Biznes</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Spotkania biznesowe i negocjacje</li>
                <li>Konferencje i targi</li>
                <li>Eksploracja możliwości biznesowych</li>
                <li>Nawiązywanie kontaktów handlowych</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Czego NIE można robić na eVisitor?</h2>
          <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-8">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&#10007;</span>
                <span>Pracować zarobkowo w Australii</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&#10007;</span>
                <span>Studiować dłużej niż 3 miesiące</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&#10007;</span>
                <span>Sprzedawać towary lub usługi bezpośrednio społeczeństwu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&#10007;</span>
                <span>Przebywać dłużej niż 90 dni podczas jednej wizyty</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/evisitor-info/application/">
              Dowiedz się, jak złożyć wniosek
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}
