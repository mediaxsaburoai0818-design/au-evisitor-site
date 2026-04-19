import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHead from "@/components/PageHead";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Sprawdź status wniosku o eVisitor — VEVO i ImmiAccount",
  description: "Jak sprawdzić status wniosku o eVisitor za pomocą systemu VEVO lub konta ImmiAccount. Przewodnik krok po kroku.",
};

export default function StatusCheckPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Informacje o eVisitor", href: "/evisitor-info/what-is-evisitor/" }, { label: "Sprawdź status" }]} />
      <PageHead title="Sprawdź status wniosku" subtitle="Jak sprawdzić status wniosku o eVisitor online" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Dwie metody sprawdzania statusu
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4" style={{ borderTopColor: "#00008B" }}>
            <h3 className="text-xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
              1. ImmiAccount
            </h3>
            <p className="text-gray-600 mb-4">
              Zaloguj się do swojego konta ImmiAccount, którego użyłeś do złożenia wniosku. Status wizy jest widoczny na stronie głównej konta.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Zaloguj się na immi.homeaffairs.gov.au</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Przejdź do &ldquo;My applications&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Sprawdź status przy odpowiednim wniosku</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4" style={{ borderTopColor: "#B8860B" }}>
            <h3 className="text-xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
              2. System VEVO
            </h3>
            <p className="text-gray-600 mb-4">
              VEVO (Visa Entitlement Verification Online) pozwala sprawdzić aktualny status wizy za pomocą numeru paszportu.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Odwiedź stronę VEVO</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Wprowadź dane paszportu</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#B8860B" }}>&#9679;</span>
                <span>Wyświetl uprawnienia wizowe</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-6" style={{ color: "#00008B" }}>
          Możliwe statusy wniosku
        </h2>
        <div className="space-y-4 mb-10">
          {[
            { status: "Received", pl: "Otrzymany", desc: "Wniosek został otrzymany i oczekuje na rozpatrzenie.", color: "#3B82F6" },
            { status: "In Progress", pl: "W trakcie rozpatrywania", desc: "Wniosek jest aktualnie rozpatrywany przez urząd imigracyjny.", color: "#F59E0B" },
            { status: "Approved / Granted", pl: "Zatwierdzony", desc: "Wiza została przyznana. Możesz podróżować do Australii.", color: "#10B981" },
            { status: "Refused", pl: "Odrzucony", desc: "Wniosek został odrzucony. Sprawdź powód odmowy i możliwość odwołania.", color: "#EF4444" },
          ].map((s) => (
            <div key={s.status} className="flex items-start gap-4 bg-white rounded-lg p-5 shadow border-l-4" style={{ borderLeftColor: s.color }}>
              <div>
                <p className="font-bold font-[Merriweather]">
                  {s.status} — <span className="text-gray-600">{s.pl}</span>
                </p>
                <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-[Merriweather] mb-4" style={{ color: "#00008B" }}>
          Czas oczekiwania
        </h2>
        <div className="bg-[#FFFFF0] rounded-xl p-6 border border-gray-200 mb-10">
          <p className="text-gray-700 mb-3">
            Większość wniosków o eVisitor jest rozpatrywana w ciągu <strong>3-5 dni roboczych</strong>. W niektórych przypadkach proces może trwać dłużej:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Konieczność dostarczenia dodatkowych dokumentów</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Kontrola bezpieczeństwa (security checks)</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#B8860B" }}>&#9679;</span>
              <span>Okres wzmożonego ruchu (sezon wakacyjny)</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <CTAButton href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" external>
            Sprawdź status na oficjalnej stronie
          </CTAButton>
        </div>
      </div>
    </>
  );
}
