import Image from "next/image";
import { authors } from "@/lib/content";

export default function AuthorsPage() {
  return (
    <section className="grid gap-5">
      <div className="border border-[#d8dde5] bg-white p-5">
        <h2 className="text-2xl font-semibold">Authors</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {authors.map((author) => (
          <div key={author.id} className="flex gap-4 border border-[#d8dde5] bg-white p-5">
            <div className="relative size-20 shrink-0 overflow-hidden">
              <Image src={author.imageUrl} alt={author.name} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{author.name}</h3>
              <p className="text-sm text-[#8a6a34]">{author.role}</p>
              <p className="mt-3 text-sm leading-6 text-[#697386]">{author.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
