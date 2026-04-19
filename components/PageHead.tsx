export default function PageHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ backgroundColor: "#00008B" }} className="text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-[Merriweather]">{title}</h1>
        {subtitle && <p className="mt-3 text-white/80 text-lg max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
}
