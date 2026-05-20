import Image from "next/image";
import { Eye, Search, Star } from "lucide-react";
import { categories, formatDate, posts } from "@/lib/content";

export default function PostsPage() {
  return (
    <section className="border border-[#d8dde5] bg-white">
      <div className="flex flex-col gap-3 border-b border-[#e5e8ee] p-5 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold">Posts manager</h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 border border-[#d8dde5] px-3">
            <Search size={16} />
            <input className="h-10 outline-none" placeholder="Search posts" />
          </div>
          <select className="border border-[#d8dde5] px-3">
            <option>All statuses</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </div>
      <div className="divide-y divide-[#e5e8ee]">
        {posts.map((post) => {
          const category = categories.find((item) => item.id === post.categoryId);
          return (
            <div key={post.id} className="grid gap-4 p-5 md:grid-cols-[96px_1fr_auto] md:items-center">
              <div className="relative aspect-video overflow-hidden bg-[#07111f] md:aspect-square">
                <Image src={post.coverImageUrl} alt={post.title} fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-[#697386]">
                  <span>{category?.name}</span>
                  <span>{post.status}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              </div>
              <div className="flex gap-2">
                <button className="grid size-10 place-items-center border border-[#d8dde5]" title="Preview">
                  <Eye size={17} />
                </button>
                <button className="grid size-10 place-items-center border border-[#d8dde5]" title="Toggle featured">
                  <Star size={17} className={post.isFeatured ? "fill-[#c9a96a] text-[#c9a96a]" : ""} />
                </button>
                <button className="border border-[#d8dde5] px-4 text-sm">Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
