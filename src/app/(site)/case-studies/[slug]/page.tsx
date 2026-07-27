import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { caseStudies } from "@/lib/data"
import { MotionWrapper } from "@/components/motion-wrapper"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="bg-secondary/30">
      <MotionWrapper
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="bg-background"
      >
        <div className="container text-center py-16 sm:py-24">
          <MotionWrapper variants={FADE_IN_UP}>
            <p className="text-base font-semibold text-primary mb-2 uppercase tracking-widest">{study.clientName}</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tighter max-w-3xl mx-auto">
              {study.title}
            </h1>
          </MotionWrapper>
        </div>
        <MotionWrapper variants={FADE_IN_UP}>
          <Image
            src={study.imageUrl}
            alt={study.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[500px]"
            data-ai-hint="case study banner"
            priority
          />
        </MotionWrapper>
      </MotionWrapper>

      <div className="py-16 sm:py-20">
        <div className="container">
          <MotionWrapper
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {study.stats.map((stat, index) => (
              <MotionWrapper variants={FADE_IN_UP} key={index}>
                <Card className="text-center p-6 bg-background shadow-lg h-full border-primary/5">
                  <p className="text-4xl sm:text-5xl font-bold font-headline text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
                </Card>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto pb-16 sm:pb-24">
        <MotionWrapper
          tag="article"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <MotionWrapper variants={FADE_IN_UP} className="prose prose-base sm:prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
            <h2 className="text-2xl font-bold">About {study.clientName}</h2>
            <p>{study.clientInfo}</p>
          </MotionWrapper>
          
          <MotionWrapper variants={FADE_IN_UP} className="prose prose-base sm:prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <p>{study.challenge}</p>
          </MotionWrapper>

          <MotionWrapper variants={FADE_IN_UP}>
            <div className="prose prose-base sm:prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
              <h2 className="text-2xl font-bold">Our Solution</h2>
              <p>{study.solution}</p>
            </div>
            <Image
              src={study.emailImageUrl}
              alt={`Email example for ${study.clientName}`}
              width={800}
              height={1200}
              className="mt-8 rounded-lg shadow-xl w-full h-auto border border-primary/5"
              data-ai-hint="email campaign"
            />
          </MotionWrapper>

          <MotionWrapper variants={FADE_IN_UP} className="bg-background p-8 rounded-lg shadow-lg relative border border-primary/5">
            <span className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif leading-none">“</span>
            <blockquote className="text-center text-lg italic font-medium text-foreground relative z-10">
              <p>{study.testimonial.quote}</p>
            </blockquote>
            <p className="text-center mt-4 text-sm font-semibold text-muted-foreground">— {study.testimonial.author}</p>
            <span className="absolute -bottom-8 -right-4 text-6xl text-primary/10 font-serif leading-none">”</span>
          </MotionWrapper>

          <MotionWrapper variants={FADE_IN_UP}>
            <div className="prose prose-base sm:prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
              <h2 className="text-2xl font-bold">The Results</h2>
              <p>{study.results}</p>
              <ul className="list-none p-0">
                {study.stats.map((stat, index) => (
                  <li key={index} className="flex items-start gap-3 mt-4 !p-0">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-base"><strong>{stat.value}</strong> {stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          <MotionWrapper variants={FADE_IN_UP} className="text-center border-t pt-12 mt-12">
            <h3 className="text-xl font-bold font-headline">Ready to get results like {study.clientName}?</h3>
            <p className="text-sm text-muted-foreground mt-2">Let's build your success story together.</p>
            <Button asChild size="lg" className="mt-6 h-12 px-8 rounded-xl">
              <Link href="/#services">Explore Our Services</Link>
            </Button>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </div>
  )
}