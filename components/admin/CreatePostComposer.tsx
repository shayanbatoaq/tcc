"use client";

import dynamic from "next/dynamic";
import { Calendar, Eye, ImagePlus, Send, Upload } from "lucide-react";
import { categories, authors } from "@/lib/content";
import { MotionDiv } from "@/components/public/Motion";

const RichTextEditor = dynamic(() => import("@/components/admin/RichTextEditor").then((mod) => mod.RichTextEditor), {
  ssr: false,
  loading: () => <div className="h-80 animate-pulse border border-[#d8dde5] bg-white" />,
});

export function CreatePostComposer() {
  return (
    <MotionDiv initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl">
      <div className="mb-5 border border-[#d8dde5] bg-white p-5 shadow-sm">
        <p className="text-sm text-[#697386]">What do you want to publish today?</p>
        <input
          className="mt-3 w-full text-3xl font-semibold outline-none placeholder:text-[#b5bdc9]"
          placeholder="Write a strong corporate headline..."
        />
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
        <section className="grid gap-5">
          <div className="border border-[#d8dde5] bg-white p-5">
            <label className="text-sm font-medium">Excerpt</label>
            <textarea className="mt-2 min-h-28 w-full border border-[#d8dde5] bg-[#f8fafc] p-4 outline-none focus:border-[#c9a96a]" />
          </div>
          <div className="border border-[#d8dde5] bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">Cover image</span>
              <Upload size={17} className="text-[#8a6a34]" />
            </div>
            <div className="grid min-h-52 place-items-center border border-dashed border-[#c5ccd7] bg-[#f8fafc] text-center">
              <div>
                <ImagePlus className="mx-auto mb-3 text-[#8a6a34]" />
                <p className="text-sm font-medium">Upload or choose from media library</p>
                <p className="mt-1 text-xs text-[#697386]">Recommended 1800 x 1050</p>
              </div>
            </div>
          </div>
          <RichTextEditor />
          <div className="border border-[#d8dde5] bg-white p-5">
            <span className="text-sm font-medium">Gallery / media</span>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="grid aspect-square place-items-center border border-dashed border-[#c5ccd7] bg-[#f8fafc]">
                  <ImagePlus size={20} className="text-[#8a6a34]" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <aside className="grid content-start gap-5">
          <div className="border border-[#d8dde5] bg-white p-5">
            <label className="text-sm font-medium">Category</label>
            <select className="mt-2 w-full border border-[#d8dde5] bg-white p-3">
              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
            <label className="mt-4 block text-sm font-medium">Author</label>
            <select className="mt-2 w-full border border-[#d8dde5] bg-white p-3">
              {authors.map((author) => (
                <option key={author.id}>{author.name}</option>
              ))}
            </select>
            <label className="mt-4 block text-sm font-medium">Status</label>
            <select className="mt-2 w-full border border-[#d8dde5] bg-white p-3">
              <option>draft</option>
              <option>pending review</option>
              <option>published</option>
              <option>scheduled</option>
              <option>archived</option>
            </select>
            <label className="mt-4 block text-sm font-medium">Tags</label>
            <input className="mt-2 w-full border border-[#d8dde5] bg-white p-3" placeholder="leadership, banking, milestone" />
          </div>
          <div className="grid gap-3 border border-[#d8dde5] bg-white p-5">
            <button className="flex items-center justify-center gap-2 border border-[#d8dde5] px-4 py-3 font-medium">
              <Calendar size={17} />
              Save Draft
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#d8dde5] px-4 py-3 font-medium">
              <Eye size={17} />
              Preview
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#07111f] px-4 py-3 font-semibold text-white">
              <Send size={17} />
              Publish
            </button>
          </div>
        </aside>
      </div>
    </MotionDiv>
  );
}
