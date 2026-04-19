import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#FFFFF0] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#00008B] no-underline transition-colors">
              Strona główna
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="mx-1">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#00008B] no-underline transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#00008B] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
