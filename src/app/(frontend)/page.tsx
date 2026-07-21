import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import MyCourses from '@/components/dashboard/my-courses'
import Teachers from '@/components/dashboard/teachers'
import FAQ from '@/components/dashboard/faq'

export default function HomePage() {
  return (
    <>
      <section className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        <div className="mx-auto flex w-full max-w-xl flex-col justify-center px-5 py-12 lg:ml-auto lg:mr-0 lg:max-w-lg lg:px-8 lg:py-16 xl:max-w-xl">
          <p className="animate-fade-up font-heading text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            PTechRoom Labs
          </p>
          <h1 className="mt-4 animate-[fade-up_0.7s_ease_0.1s_both] font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Learn skills that move your career forward.
          </h1>
          <p className="mt-4 max-w-md animate-[fade-up_0.7s_ease_0.2s_both] text-base text-muted-foreground">
            Practical courses, downloadable guides, and a learning path built for students and
            working professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-[fade-up_0.7s_ease_0.32s_both]">
            <Link href="#courses" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
              Browse courses
            </Link>
            <Link
              href="/admin"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'h-11 px-5')}
            >
              Teach with us
            </Link>
          </div>
        </div>

        <div className="relative min-h-[48vh] animate-fade-in overflow-hidden bg-accent lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Students collaborating while learning together"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover motion-safe:animate-image-drift"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/60 to-primary/20"
            aria-hidden
          />
        </div>
      </section>
      <MyCourses />
      <Teachers />
      <FAQ />
      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to start learning?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join PTechRoom Labs and take the next step with confidence.
          </p>
          <Link
            href="/admin"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-6 inline-flex h-11 px-5')}
          >
            Get started
          </Link>
        </div>
      </section>

      <footer className="border-t border-primary/15 px-5 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} PTechRoom Labs</p>
      </footer>
    </>
  )
}
