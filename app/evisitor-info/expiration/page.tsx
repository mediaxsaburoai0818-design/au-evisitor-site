import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Okres ważności eVisitor — 12 miesięcy, pobyt do 90 dni",
  description: "Informacje o okresie ważności wizy eVisitor (subclass 651). Ważna przez 12 miesięcy z możliwością wielokrotnego wjazdu i pobytem do 90 dni.",
};

export default function ExpirationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Okres ważności" }]} />
      <PageHead title="Okres ważności eVisitor" subtitle="Wszystko, co musisz wiedzieć o ważności i warunkach pobytu" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl p-8 text-center shadow-lg" style={{ backgroundColor: "#FFFFF0", border: "2px solid #B8860B" }}>
            <p className="text-sm text-gray-500 mb-2">Okres ważności wizy</p>
            <p className="text-5xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>12</p>
            <p className="text-xl font-bold" style={{ color: "#00008B" }}>miesięcy</p>
            <p className="text-sm text-gray-500 mt-2">od daty przyznania</p>
          </div>
          <div className="rounded-xl p-8 text-center shadow-lg" style={{ backgroundColor: "#FFFFF0", border: "2px solid #B8860B" }}>
            <p className="text-sm text-gray-500 mb-2">Maksymalny pobyt</p>
            <p className="text-5xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>90</p>
            <p className="text-xl font-bold" style={{ color: "#00008B" }}>dni</p>
            <p className="text-sm text-gray-500 mt-2">na każdą wizytę</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
          Jak działa okres ważności?
        </h2>
        <div className="space-y-4 text-gray-700 mb-10">
          <p>
            eVisitor jest ważny przez <strong>12 miesięcy</strong> od daty przyznania. W tym okresie możesz wielokrotnie wjeżdżać i wyjeżdżać z Australii, pod warunkiem że każdy pobyt nie przekracza <strong>90 dni</strong>.
          </p>
          <p>
            Okres 90 dni jest liczony od daty wjazdu do Australii. Jeśli wyjedziesz z Australii i ponownie wjedziesz w okresie ważności wizy, okres 90 dni jest liczony od nowa.
          </p>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
          Przykładowy scenariusz
        </h2>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-10">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#00008B" }}>1</div>
              <div>
                <p className="font-bold">1 czerwca 2026 — eVisitor przyznany</p>
                <p className="text-gray-600 text-sm">Wiza ważna do 1 czerwca 2027</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#00008B" }}>2</div>
              <div>
                <p className="font-bold">15 lipca 2026 — Wjazd do Australii</p>
                <p className="text-gray-600 text-sm">Możesz przebywać do 13 października 2026 (90 dni)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#00008B" }}>3</div>
              <div>
                <p className="font-bold">1 września 2026 — Wyjazd z Australii</p>
                <p className="text-gray-600 text-sm">Wykorzystano 48 dni z 90</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#00008B" }}>4</div>
              <div>
                <p className="font-bold">1 grudnia 2026 — Ponowny wjazd</p>
                <p className="text-gray-600 text-sm">Nowy okres 90 dni (do 1 marca 2027). Wiza nadal ważna.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>Co zrobić po wygaśnięciu?</h2>
        <p className="text-gray-700 mb-6">
          Po wygaśnięciu wizy eVisitor możesz złożyć nowy wniosek. Proces jest taki sam jak za pierwszym razem i jest nadal bezpłatny.
        </p>

        <div className="bg-[#FFFFF0] rounded-xl p-6 border border-gray-200 mb-10">
          <h3 className="font-bold font-[Merriweather] mb-3" style={{ color: "#00008B" }}>Ważne uwagi</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Jeśli zmienisz paszport w trakcie ważności wizy, musisz złożyć nowy wniosek o eVisitor.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Przekroczenie 90 dni pobytu jest naruszeniem warunków wizy i może skutkować deportacją.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Nie można przedłużyć pobytu ponad 90 dni na wizie eVisitor.</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <CTAButton href="/evisitor-info/application/">
            Złóż wniosek o eVisitor
          </CTAButton>
        </div>
      </div>
    </>
  );
}
