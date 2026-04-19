import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

const stats = [
  { value: "Bezpłatna", label: "Opłata za wizę", icon: "" },
  { value: "3-5 dni", label: "Czas rozpatrzenia", icon: "⏱️" },
  { value: "12 miesięcy", label: "Okres ważności", icon: "📅" },
  { value: "90 dni", label: "Maksymalny pobyt", icon: "" },
];

const infoCards = [
  { href: "/evisitor-info/what-is-evisitor/", title: "Czym jest eVisitor?", desc: "Poznaj program eVisitor (subclass 651) i sprawdź, czy spełniasz wymagania." },
  { href: "/evisitor-info/application/", title: "Jak złożyć wniosek?", desc: "Krok po kroku — proces składania wniosku o eVisitor online." },
  { href: "/evisitor-info/fee/", title: "Opłaty", desc: "eVisitor jest całkowicie bezpłatny. Dowiedz się więcej o kosztach." },
  { href: "/evisitor-info/expiration/", title: "Okres ważności", desc: "Ważność 12 miesięcy z możliwością wielokrotnego wjazdu." },
  { href: "/evisitor-info/required-documents/", title: "Wymagane dokumenty", desc: "Lista dokumentów potrzebnych do złożenia wniosku." },
  { href: "/evisitor-info/status-check/", title: "Sprawdź status", desc: "Jak sprawdzić status złożonego wniosku o eVisitor." },
  { href: "/evisitor-info/eta-vs-evisitor/", title: "ETA vs eVisitor", desc: "Porównanie ETA (subclass 601) z eVisitor (subclass 651)." },
  { href: "/evisitor-info/official-australia/", title: "Strona oficjalna", desc: "Oficjalne źródła informacji rządu australijskiego." },
  { href: "/evisitor-info/working-holiday/", title: "Working Holiday", desc: "Informacje o wizie Working Holiday (subclass 417)." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/hero-au.png"
            alt="Parlament Australii w Canberze"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,139,0.7), rgba(0,0,80,0.85))" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-[Merriweather] leading-tight max-w-3xl">
                Australijska wiza <span style={{ color: "#FFD700" }}>eVisitor</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-white/90 max-w-2xl">
                Bezpłatna wiza elektroniczna do Australii dla obywateli polskich (subclass 651)
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/evisitor-info/application/">
                  Jak złożyć wniosek
                </CTAButton>
                <CTAButton href="/evisitor-info/what-is-evisitor/">
                  Dowiedz się więcej
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-bold font-[Merriweather]" style={{ color: "#00008B" }}>
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-[Merriweather] text-center mb-4" style={{ color: "#00008B" }}>
            Czym jest eVisitor (subclass 651)?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            eVisitor to bezpłatna wiza elektroniczna umożliwiająca obywatelom polskim podróżowanie do Australii w celach turystycznych lub biznesowych. Wiza jest ważna przez 12 miesięcy i pozwala na wielokrotny wjazd z pobytem do 90 dni przy każdej wizycie.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {infoCards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 no-underline group"
                style={{ borderLeftColor: "#B8860B" }}
              >
                <h3 className="text-lg font-bold font-[Merriweather] mb-2 group-hover:text-[#00008B] transition-colors text-gray-800">
                  {c.title}
                </h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl p-8 border-2" style={{ borderColor: "#00008B", backgroundColor: "#f0f0ff" }}>
            <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
              Ważna informacja
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span style={{ color: "#B8860B" }} className="font-bold text-xl mt-0.5">&#10003;</span>
                <span>eVisitor (subclass 651) jest <strong>całkowicie bezpłatny</strong> — nie ma opłaty za złożenie wniosku.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#B8860B" }} className="font-bold text-xl mt-0.5">&#10003;</span>
                <span>Polska jest krajem uprawnionym do programu eVisitor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#B8860B" }} className="font-bold text-xl mt-0.5">&#10003;</span>
                <span>Wniosek składa się wyłącznie online przez oficjalną stronę rządu australijskiego.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#B8860B" }} className="font-bold text-xl mt-0.5">&#10003;</span>
                <span>Ta strona jest nieoficjalnym przewodnikiem informacyjnym.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#00008B" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold font-[Merriweather] mb-4">
            Planujesz podróż do Australii?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Sprawdź wszystkie informacje o eVisitor i przygotuj się do złożenia wniosku.
          </p>
          <CTAButton href="/evisitor-info/application/">
            Przejdź do przewodnika po wniosku
          </CTAButton>
        </div>
      </section>
    </>
  );
}
