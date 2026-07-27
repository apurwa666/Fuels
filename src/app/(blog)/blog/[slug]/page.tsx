import { notFound } from "next/navigation"
import Image from "next/image"
import { blogPosts } from "@/lib/data"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "This blog post could not be found.",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug:string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const PostContent = post.content

  return (
    <div className="container max-w-4xl mx-auto py-12 sm:py-16">
      <article
        className="bg-background rounded-lg shadow-lg p-6 md:p-10"
      >
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-headline tracking-tighter mb-4">
            {post.title}
          </h1>
          <div className="text-xs text-muted-foreground uppercase tracking-widest">
            <span>By {post.author}</span> &bull; <span>{post.date}</span>
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover aspect-video"
            data-ai-hint="blog banner"
            priority
          />
        </div>

        <div
          className="prose prose-base sm:prose-lg dark:prose-invert max-w-none 
                     prose-p:my-6 prose-headings:my-8 prose-li:my-3 
                     prose-h2:font-bold prose-h2:text-2xl 
                     prose-h3:font-bold prose-h3:text-xl"
        >
          <PostContent />
        </div>
      </article>
    </div>
  )
}