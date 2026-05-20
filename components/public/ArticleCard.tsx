import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionArticle } from "@/components/public/Motion";
import { categories, formatDate, getAuthor } from "@/lib/content";
import type { Post } from "@/lib/types";

export function ArticleCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  const category = categories.find((item) => item.id === post.categoryId);
  const author = getAuthor(post.authorId);

  return (
    <MotionArticle
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden border border-[#d8cfbd] bg-white"
    >
      <Link href={`/articles/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#07111f]">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-92 transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 bg-[#07111f]/85 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#eadfc8]">
            {category?.name}
          </div>
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-[#6c7280]">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h3 className="text-xl font-semibold leading-tight text-[#10151f] transition group-hover:text-[#92713a]">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#5b626f]">{post.excerpt}</p>
          <div className="mt-5 flex items-center justify-between border-t border-[#eee7da] pt-4 text-sm">
            <span className="text-[#5b626f]">{author.name}</span>
            <ArrowUpRight size={17} className="text-[#c9a96a]" />
          </div>
        </div>
      </Link>
    </MotionArticle>
  );
}
