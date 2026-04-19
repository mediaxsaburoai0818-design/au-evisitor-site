import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "O nas — AU eVisitor Polska",
  description: "Informacje o stronie AU eVisitor Polska — nieoficjalny przewodnik informacyjny dotyczący australijskiej wizy eVisitor (subclass 651).",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O nas" }]} />
      <PageHead title="O nas" subtitle="Kim jesteśmy i dlaczego stworzyliśmy tę stronę" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Nasza misja
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          AU eVisitor Polska to nieoficjalny przewodnik informacyjny stworzony z myślą o polskich podróżnych planujących wizytę w Australii. Naszym celem jest dostarczenie rzetelnych, aktualnych i łatwo dostępnych informacji na temat australijskiej wizy eVisitor (subclass 651) w języku polskim.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Wiemy, że proces ubiegania się o wizę może być skomplikowany, szczególnie gdy oficjalne źródła są dostępne głównie w języku angielskim. Dlatego stworzyliśmy ten przewodnik, aby pomóc polskim obywatelom zrozumieć wymagania, procedury i warunki programu eVisitor.
        </p>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Co oferujemy
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { title: "Informacje w języku polskim", desc: "Wszystkie treści są w pełni przetłumaczone i dostosowane do potrzeb polskich podróżnych." },
            { title: "Aktualne dane", desc: "Regularnie aktualizujemy informacje, aby odzwierciedlały najnowsze wymagania i procedury." },
            { title: "Przewodnik krok po kroku", desc: "Szczegółowe instrukcje dotyczące procesu składania wniosku o eVisitor." },
            { title: "Porównania i FAQ", desc: "Odpowiedzi na najczęściej zadawane pytania i porównania różnych typów wiz." },
          ].map((item) => (
            <div key={item.title} className="bg-[#FFFFF0] rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold font-[Merriweather] mb-2" style={{ color: "#00008B" }}>{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="font-bold font-[Merriweather] mb-3 text-red-800">Ważne zastrzeżenie</h3>
          <p className="text-gray-700">
            Ta strona <strong>nie jest</strong> oficjalną stroną rządu Australii ani żadnej instytucji rządowej. Nie składamy wniosków wizowych w imieniu użytkowników ani nie pobieramy żadnych opłat. Zawsze kierujemy użytkowników do oficjalnych źródeł rządu australijskiego (domeny .gov.au) w celu złożenia wniosku.
          </p>
        </div>
      </div>
    </>
  );
}
