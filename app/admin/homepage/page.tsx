import { GripVertical } from "lucide-react";
import { posts } from "@/lib/content";

export default function HomepagePage() {
  return (
    <section className="grid gap-5">
      <div className="border border-[#d8dde5] bg-white p-5">
        <h2 className="text-2xl font-semibold">Homepage control</h2>
        <p className="mt-2 text-sm text-[#697386]">Choose hero story, featured stories, and section order.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="border border-[#d8dde5] bg-white p-5">
          <label className="text-sm font-medium">Hero story</label>
          <select className="mt-2 w-full border border-[#d8dde5] p-3">
            {posts.map((post) => (
              <option key={post.id}>{post.title}</option>
            ))}
          </select>
        </div>
        <div className="border border-[#d8dde5] bg-white p-5">
          <h3 className="font-semibold">Section order</h3>
          {["Featured stories", "Latest insights", "Coverage categories", "Editorial integrity", "Get Featured CTA"].map((item) => (
            <div key={item} className="mt-3 flex items-center gap-3 border border-[#e5e8ee] p-3">
              <GripVertical size={17} className="text-[#697386]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
