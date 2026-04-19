"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

const faqs = [
  {
    q: "Czym jest eVisitor (subclass 651)?",
    a: "eVisitor to bezptatna wiza elektroniczna wydawana przez rzad Australii, przeznaczona dla obywateli krajow europejskich, w tym Polski. Umozliwia podrozowanie do Australii w celach turystycznych lub biznesowych na okres do 90 dni.",
  },
  {
    q: "Ile kosztuje eVisitor?",
    a: "eVisitor jest calkowicie bezplatny. Nie ma zadnej oplaty rzadowej za zlozenie wniosku. Unikaj stron internetowych pobierajacych oplaty za pomoc w skladaniu wniosku \u2014 oficjalna oplata wynosi AUD $0.",
  },
  {
    q: "Jak dlugo jest wazny eVisitor?",
    a: "eVisitor jest wazny przez 12 miesiecy od daty przyznania. W tym okresie mozesz wielokrotnie wjezdzac i wyjezdzac z Australii.",
  },
  {
    q: "Jak dlugo moge przebywac w Australii na eVisitor?",
    a: "Kazdy pobyt w Australii moze trwac maksymalnie 90 dni. Przy ponownym wjezdzie w okresie waznosci wizy, okres 90 dni jest liczony od nowa.",
  },
  {
    q: "Jak dlugo trwa rozpatrywanie wniosku o eVisitor?",
    a: "Wiekszosc wnioskow jest rozpatrywana w ciagu 3-5 dni roboczych. W niektorych przypadkach proces moze trwac dluzej, na przyklad gdy wymagane sa dodatkowe dokumenty lub kontrola bezpieczenstwa.",
  },
  {
    q: "Czy moge pracowac w Australii na eVisitor?",
    a: "Nie. eVisitor nie uprawnia do podejmowania pracy zarobkowej w Australii. Jesli chcesz pracowac, rozwaz wize Working Holiday (subclass 417) lub inny odpowiedni typ wizy.",
  },
  {
    q: "Jaka jest roznica miedzy ETA (601) a eVisitor (651)?",
    a: "ETA (subclass 601) kosztuje AUD $20 i jest przeznaczona glownie dla obywateli krajow azjatyckich, USA i Kanady. eVisitor (subclass 651) jest bezplatna i przeznaczona dla obywateli krajow europejskich, w tym Polski.",
  },
  {
    q: "Jakie dokumenty sa potrzebne do zlozenia wniosku?",
    a: "Potrzebujesz waznego paszportu (minimum 6 miesiecy waznosci), adresu e-mail oraz danych osobowych. W niektorych przypadkach moga byc wymagane dodatkowe dokumenty, takie jak dowod srodkow finansowych.",
  },
  {
    q: "Gdzie moge zlozyc wniosek o eVisitor?",
    a: "Wniosek o eVisitor mozna zlozyc wylacznie online za posrednictwem oficjalnej strony Department of Home Affairs pod adresem immi.homeaffairs.gov.au.",
  },
  {
    q: "Czy eVisitor jest powiazany z paszportem?",
    a: "Tak. eVisitor jest powiazany elektronicznie z numerem paszportu. Nie ma fizycznej naklejki wizowej. Jesli zmienisz paszport, musisz zlozyc nowy wniosek o eVisitor.",
  },
  {
    q: "Co zrobic, jesli moj wniosek zostanie odrzucony?",
    a: "Jesli wniosek zostanie odrzucony, otrzymasz informacje o powodach odmowy. Mozesz zlozyc nowy wniosek po usunieciu przyczyny odmowy lub skonsultowac sie z licencjonowanym agentem migracyjnym.",
  },
  {
    q: "Czy moge studiowac w Australii na eVisitor?",
    a: "Na eVisitor mozesz uczestniczyc w krotkoterminowych kursach trwajacych do 3 miesiecy. Dluzsze studia wymagaja wizy studenckiej.",
  },
  {
    q: "Czy ta strona jest oficjalna strona rzadu Australii?",
    a: "Nie. AU eVisitor Polska to nieoficjalny przewodnik informacyjny. Oficjalna strona rzadu australijskiego jest immi.homeaffairs.gov.au.",
  },
  {
    q: "Czy moge przedluzyc pobyt ponad 90 dni?",
    a: "Nie. Na wizie eVisitor nie mozna przedluzyc pobytu ponad 90 dni. Przekroczenie tego limitu jest naruszeniem warunkow wizy i moze skutkowac powaznymi konsekwencjami.",
  },
  {
    q: "Czy potrzebuje ubezpieczenia podroznego?",
    a: "Ubezpieczenie podrozne nie jest oficjalnie wymagane do uzyskania eVisitor, ale jest zdecydowanie zalecane. Australia nie ma umowy o ubezpieczeniu zdrowotnym z Polska, wiec koszty leczenia moga byc bardzo wysokie.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold font-[Merriweather] text-gray-800 pr-4">{q}</span>
        <span className="text-2xl flex-shrink-0" style={{ color: "#00008B" }}>
          {open ? "\u2212" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <PageHead title="Najcz\u0119\u015Bciej zadawane pytania" subtitle="Odpowiedzi na 15 najpopularniejszych pyta\u0144 o eVisitor" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </>
  );
}
