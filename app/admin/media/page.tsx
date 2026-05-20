import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { posts } from "@/lib/content";

export default function MediaPage() {
  return (
    <section className="grid gap-5">
      <div className="grid min-h-48 place-items-center border border-dashed border-[#c5ccd7] bg-white">
        <div className="text-center">
          <ImagePlus className="mx-auto mb-3 text-[#8a6a34]" />
          <p className="font-semibold">Upload images to Supabase Storage</p>
          <p className="mt-1 text-sm text-[#697386]">Reuse media across posts and homepage placements.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} className="relative aspect-[4/3] overflow-hidden border border-[#d8dde5] bg-white">
            <Image src={post.coverImageUrl} alt={post.title} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
