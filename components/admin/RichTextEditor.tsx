"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Heading2, Italic, List } from "lucide-react";

export function RichTextEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write the story with context, credibility, and editorial polish...",
      }),
    ],
    content: "<p></p>",
    editorProps: {
      attributes: {
        class: "tiptap rounded-none bg-white px-4 py-4 text-base leading-8",
      },
    },
  });

  return (
    <div className="overflow-hidden border border-[#d8dde5] bg-white">
      <div className="flex flex-wrap gap-2 border-b border-[#e5e8ee] bg-[#f8fafc] p-2">
        <button type="button" className="grid size-9 place-items-center border border-[#d8dde5]" onClick={() => editor?.chain().focus().toggleBold().run()} title="Bold">
          <Bold size={16} />
        </button>
        <button type="button" className="grid size-9 place-items-center border border-[#d8dde5]" onClick={() => editor?.chain().focus().toggleItalic().run()} title="Italic">
          <Italic size={16} />
        </button>
        <button type="button" className="grid size-9 place-items-center border border-[#d8dde5]" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading">
          <Heading2 size={16} />
        </button>
        <button type="button" className="grid size-9 place-items-center border border-[#d8dde5]" onClick={() => editor?.chain().focus().toggleBulletList().run()} title="List">
          <List size={16} />
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
