import Link from "next/link";

export default function CTAButton({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-block font-bold py-3 px-8 rounded-lg text-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 no-underline";
  const style = { backgroundColor: "#B8860B", color: "#1a1a1a" };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}
