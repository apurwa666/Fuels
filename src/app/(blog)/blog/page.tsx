import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionWrapper } from "@/components/motion-wrapper"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations"

export default function BlogPage() {
  return (
    <div className="container pt-32 pb-12 sm:pt-36 sm:pb-16">
      <MotionWrapper variants={FADE_IN_UP} className="text-center mb-12">
        <h1 className="font-headline font-extrabold leading-[1.04] text-primary mb-4 sm:mb-6 text-[clamp(2rem,5vw,4rem)] tracking-tight text-center lg:text-center">
                                <span>The FuelMails</span><span className="italic text-accent drop-shadow-[0_0_25px_rgba(108,124,240,0.8)] whitespace-nowrap"> Blog</span>
                            </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
          Your source for email marketing insights, design inspiration, and growth strategies.
        </p>
      </MotionWrapper>
      <MotionWrapper variants={STAGGER_CONTAINER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <MotionWrapper variants={FADE_IN_UP} key={post.id}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                    data-ai-hint="blog post"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <p className="text-xs text-muted-foreground">{post.author} &bull; {post.date}</p>
                </CardFooter>
              </Card>
            </Link>
          </MotionWrapper>
        ))}
      </MotionWrapper>
    </div>
  )
}