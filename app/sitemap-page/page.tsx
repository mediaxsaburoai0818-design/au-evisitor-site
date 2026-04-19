import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Mapa strony — AU eVisitor Polska",
  description: "Mapa strony AU eVisitor Polska — przegląd wszystkich dostępnych stron i sekcji.",
};

const sections = [
  {
    title: "Strona główna",
    links: [{ href: "/", label: "Strona główna" }],
  },
  {
    title: "Informacje o eVisitor",
    links: [
      { href: "/evisitor-info/what-is-evisitor/", label: "Czym jest eVisitor (subclass 651)" },
      { href: "/evisitor-info/application/", label: "Jak złożyć wniosek" },
      { href: "/evisitor-info/fee/", label: "Opłaty" },
      { href: "/evisitor-info/expiration/", label: "Okres ważności" },
      { href: "/evisitor-info/status-check/", label: "Sprawdź status wniosku" },
      { href: "/evisitor-info/required-documents/", label: "Wymagane dokumenty" },
      { href: "/evisitor-info/official-australia/", label: "Oficjalne strony rządu Australii" },
      { href: "/evisitor-info/eta-vs-evisitor/", label: "ETA (601) vs eVisitor (651)" },
      { href: "/evisitor-info/working-holiday/", label: "Working Holiday Visa (417)" },
    ],
  },
  {
    title: "Informacje o stronie",
    links: [
      { href: "/about/", label: "O nas" },
      { href: "/contact/", label: "Kontakt" },
      { href: "/privacy-policy/", label: "Polityka prywatności" },
      { href: "/agreement/", label: "Regulamin" },
      { href: "/faq/", label: "Najczęściej zadawane pytania (FAQ)" },
      { href: "/sitemap-page/", label: "Mapa strony" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Mapa strony" }]} />
      <PageHead title="Mapa strony" subtitle="Przegląd wszystkich dostępnych stron" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold font-[Merriweather] mb-4 pb-2 border-b-2" style={{ color: "#00008B", borderBottomColor: "#B8860B" }}>
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#00008B] no-underline transition-colors flex items-center gap-2"
                    >
                      <span style={{ color: "#B8860B" }}>&#8250;</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
