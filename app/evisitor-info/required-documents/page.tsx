import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Wymagane dokumenty do eVisitor — Lista dokumentów",
  description: "Kompletna lista dokumentów wymaganych do złożenia wniosku o australijską wizę eVisitor (subclass 651).",
};

export default function RequiredDocumentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Wymagane dokumenty" }]} />
      <PageHead title="Wymagane dokumenty" subtitle="Lista dokumentów potrzebnych do złożenia wniosku o eVisitor" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Dokumenty obowiązkowe
        </h2>
        <div className="space-y-4 mb-10">
          {[
            { title: "Ważny paszport", desc: "Paszport musi być ważny przez co najmniej 6 miesięcy od daty planowanego wjazdu do Australii. Paszport musi być wydany przez kraj uprawniony do programu eVisitor (w tym Polska)." },
            { title: "Adres e-mail", desc: "Aktywny adres e-mail do komunikacji z urzędem imigracyjnym i otrzymania decyzji o wizie." },
            { title: "Dane osobowe", desc: "Imię i nazwisko (dokładnie jak w paszporcie), data urodzenia, miejsce urodzenia, obywatelstwo." },
            { title: "Historia podróży", desc: "Informacje o wcześniejszych podróżach do Australii lub innych krajów (jeśli dotyczy)." },
          ].map((doc) => (
            <div key={doc.title} className="bg-white rounded-lg p-6 shadow-md border-l-4" style={{ borderLeftColor: "#00008B" }}>
              <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#00008B" }}>{doc.title}</h3>
              <p className="text-gray-600">{doc.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Dokumenty dodatkowe (mogą być wymagane)
        </h2>
        <div className="space-y-4 mb-10">
          {[
            { title: "Dowód posiadania środków finansowych", desc: "Wyciąg bankowy lub potwierdzenie posiadania wystarczających środków na pobyt w Australii." },
            { title: "Plan podróży", desc: "Rezerwacja lotu powrotnego lub plan podróży potwierdzający zamiar opuszczenia Australii." },
            { title: "Ubezpieczenie podróżne", desc: "Choć nie jest obowiązkowe, zaleca się posiadanie ubezpieczenia zdrowotnego na czas pobytu." },
            { title: "Zaproszenie od osoby w Australii", desc: "Jeśli odwiedzasz rodzinę lub przyjaciół, list zapraszający może być pomocny." },
            { title: "Dokumenty biznesowe", desc: "W przypadku wyjazdu służbowego — zaproszenie na konferencję, list od partnera biznesowego itp." },
          ].map((doc) => (
            <div key={doc.title} className="bg-[#FFFFF0] rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#B8860B" }}>{doc.title}</h3>
              <p className="text-gray-600">{doc.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 border-2 mb-10" style={{ borderColor: "#00008B" }}>
          <h2 className="text-xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
            Wymagania dotyczące skanów dokumentów
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Format: PDF, JPG lub PNG</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Rozmiar: maksymalnie 5 MB na dokument</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Jakość: czytelna kopia w kolorze</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Tłumaczenie: dokumenty w języku innym niż angielski muszą być przetłumaczone przez tłumacza przysięgłego</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <CTAButton href="/evisitor-info/application/">
            Przejdź do wniosku
          </CTAButton>
        </div>
      </div>
    </>
  );
}
