import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FileText, Star, UploadCloud, Users } from "lucide-react";
import { posts, submissions } from "@/lib/content";

export default function AdminPage() {
  const stats: { label: string; value: number; Icon: LucideIcon }[] = [
    { label: "Total posts", value: posts.length, Icon: FileText },
    { label: "Drafts", value: 2, Icon: UploadCloud },
    { label: "Published articles", value: posts.filter((post) => post.status === "published").length, Icon: FileText },
    { label: "Pending submissions", value: submissions.filter((item) => item.status === "pending").length, Icon: Users },
    { label: "Featured stories", value: posts.filter((post) => post.isFeatured).length, Icon: Star },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-5">
        {stats.map(({ label, value, Icon }) => (
          <div key={label} className="border border-[#d8dde5] bg-white p-5">
            <Icon size={20} className="text-[#8a6a34]" />
            <p className="mt-5 text-3xl font-semibold">{value}</p>
            <p className="mt-1 text-sm text-[#697386]">{label}</p>
          </div>
        ))}
      </div>
      <Link href="/admin/create" className="border border-[#d8dde5] bg-white p-6 transition hover:border-[#c9a96a]">
        <p className="text-sm text-[#697386]">Quick publish</p>
        <h2 className="mt-2 text-2xl font-semibold">What do you want to publish today?</h2>
      </Link>
    </div>
  );
}
