import Link from "next/link";

const footerLinks = [
  { href: "/about/", label: "O nas" },
  { href: "/contact/", label: "Kontakt" },
  { href: "/privacy-policy/", label: "Polityka prywatności" },
  { href: "/agreement/", label: "Regulamin" },
  { href: "/faq/", label: "FAQ" },
  { href: "/sitemap-page/", label: "Mapa strony" },
];

const infoLinks = [
  { href: "/evisitor-info/what-is-evisitor/", label: "Czym jest eVisitor" },
  { href: "/evisitor-info/application/", label: "Jak złożyć wniosek" },
  { href: "/evisitor-info/fee/", label: "Opłaty" },
  { href: "/evisitor-info/expiration/", label: "Okres ważności" },
  { href: "/evisitor-info/status-check/", label: "Sprawdź status" },
  { href: "/evisitor-info/required-documents/", label: "Wymagane dokumenty" },
  { href: "/evisitor-info/official-australia/", label: "Strona oficjalna" },
  { href: "/evisitor-info/eta-vs-evisitor/", label: "ETA vs eVisitor" },
  { href: "/evisitor-info/working-holiday/", label: "Working Holiday" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000050" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 font-[Merriweather]">
            <span style={{ color: "#FFD700" }}>AU</span> eVisitor Polska
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Nieoficjalny przewodnik informacyjny dotyczący australijskiego programu eVisitor (subclass 651) dla obywateli polskich.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "#FFD700" }}>
            Informacje o eVisitor
          </h4>
          <ul className="space-y-2">
            {infoLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-[#FFD700] text-sm no-underline transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "#FFD700" }}>
            Informacje o stronie
          </h4>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-[#FFD700] text-sm no-underline transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; 2026 AU eVisitor Polska. Wszelkie prawa zastrzeżone.</p>
          <p>Ta strona nie jest oficjalną stroną rządu Australii.</p>
        </div>
      </div>
    </footer>
  );
}
