import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Oficjalne strony rządu Australii — eVisitor informacje",
  description: "Lista oficjalnych stron rządu australijskiego dotyczących wiz, imigracji i programu eVisitor (subclass 651).",
};

const officialLinks = [
  {
    title: "Department of Home Affairs — eVisitor (651)",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
    desc: "Oficjalna strona wizy eVisitor. Tutaj znajdziesz pełne informacje i formularz wniosku.",
  },
  {
    title: "ImmiAccount — Logowanie",
    url: "https://online.immi.gov.au/lusc/login",
    desc: "System do składania wniosków wizowych online i sprawdzania statusu.",
  },
  {
    title: "VEVO — Sprawdź uprawnienia wizowe",
    url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online",
    desc: "Narzędzie do weryfikacji statusu wizy i warunków pobytu.",
  },
  {
    title: "Ambasada Australii w Warszawie",
    url: "https://poland.embassy.gov.au/",
    desc: "Oficjalna strona ambasady australijskiej w Polsce.",
  },
  {
    title: "Smart Traveller — Porady podróżne",
    url: "https://www.smartraveller.gov.au/",
    desc: "Oficjalne porady podróżne rządu australijskiego.",
  },
  {
    title: "Australian Border Force",
    url: "https://www.abf.gov.au/",
    desc: "Australijska Straż Graniczna — informacje o procedurach granicznych.",
  },
];

export default function OfficialAustraliaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Strona oficjalna" }]} />
      <PageHead title="Oficjalne strony rządu Australii" subtitle="Zweryfikowane źródła informacji o wizach i imigracji" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#FFFFF0] rounded-xl p-6 border border-gray-200 mb-10">
          <p className="text-gray-700">
            Zawsze korzystaj z oficjalnych stron rządu australijskiego przy składaniu wniosku o wizę. Poniżej znajdziesz listę zweryfikowanych źródeł informacji.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {officialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 no-underline group"
              style={{ borderLeftColor: "#00008B" }}
            >
              <h3 className="text-lg font-bold font-[Merriweather] mb-2 group-hover:text-[#00008B] transition-colors text-gray-800">
                {link.title}
                <span className="text-sm font-normal text-gray-400 ml-2">&#8599;</span>
              </h3>
              <p className="text-gray-600 text-sm mb-2">{link.desc}</p>
              <p className="text-xs text-blue-600 break-all">{link.url}</p>
            </a>
          ))}
        </div>

        <div className="bg-red-50 rounded-xl p-8 border border-red-200 mb-10">
          <h2 className="text-xl font-bold font-[Merriweather] mb-4 text-red-800">
            Jak rozpoznać oficjalną stronę?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }} className="font-bold">&#10003;</span>
              <span>Adres kończy się na <strong>.gov.au</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }} className="font-bold">&#10003;</span>
              <span>Strona używa protokołu <strong>HTTPS</strong> (kłódka w pasku adresu)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">&#10007;</span>
              <span>Strony z domenami .com, .net, .org <strong>nie są</strong> oficjalnymi stronami rządu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">&#10007;</span>
              <span>Unikaj stron żądających opłaty za &ldquo;pomoc&rdquo; w złożeniu wniosku o eVisitor</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <CTAButton href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" external>
            Przejdź do oficjalnej strony eVisitor
          </CTAButton>
        </div>
      </div>
    </>
  );
}
