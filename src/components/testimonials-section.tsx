import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"
import { MotionWrapper } from "./motion-wrapper"
import { FADE_IN_UP, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, STAGGER_CONTAINER } from "@/lib/animations"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 relative overflow-x-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base light blue/grey background tint */}
        <div className="absolute inset-0 bg-slate-50" />
        
        {/* The "Blue Splash" - Elevated above the base color but below content */}
        {/* Main Central Glow - Increased size and saturation for light background visibility */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/30 rounded-full blur-[120px] opacity-70" />
        
        {/* Secondary Supporting Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/25 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 relative z-10">
        <MotionWrapper variants={FADE_IN_UP} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight text-slate-900 uppercase mb-6 text-center">
            Loved by Marketers Worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 font-medium text-lg leading-relaxed text-center">
            Don't just take our word for it. Join the growing list of brands fueling their momentum with our proven retention systems.
          </p>
        </MotionWrapper>

        <MotionWrapper 
          variants={STAGGER_CONTAINER} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const animationVariant = 
              index === 0 ? SLIDE_IN_LEFT :
              index === 1 ? FADE_IN_UP :
              SLIDE_IN_RIGHT;
            
            return (
              <MotionWrapper variants={animationVariant} key={testimonial.id}>
                <Card className="h-full flex flex-col justify-between p-8 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-slate-200/50 group rounded-2xl">
                  <CardContent className="p-0">
                    <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <div className="flex items-center gap-4 mt-8">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        onError={(e) => {
                          console.log("Image failed:", testimonial.avatarUrl);
                        }}
                      />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-slate-900 text-base">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 font-medium">{testimonial.title}</p>
                    </div>
                  </div>
                </Card>
              </MotionWrapper>
            )
          })}
        </MotionWrapper>
      </div>
    </section>
  )
}
