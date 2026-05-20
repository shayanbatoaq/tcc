export default function SettingsPage() {
  return (
    <section className="grid gap-5">
      {["Logo", "Social links", "SEO defaults", "Contact email"].map((title) => (
        <div key={title} className="border border-[#d8dde5] bg-white p-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <input className="mt-4 w-full border border-[#d8dde5] p-3" placeholder={`Update ${title.toLowerCase()}`} />
        </div>
      ))}
    </section>
  );
}
