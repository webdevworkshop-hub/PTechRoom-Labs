import Link from 'next/link'
import { GraduationCapIcon, MailIcon, SparklesIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const exploreLinks = [
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const platformLinks = [
  { href: '/login', label: 'Sign in' },
  { href: '/register', label: 'Register' },
  { href: '/admin', label: 'Teach with us' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/15 bg-linear-to-b from-accent/50 via-background to-background">
      <div
        className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-48 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex font-heading text-2xl font-semibold tracking-tight text-primary"
            >
              PTechRoom <span className="text-primary/70">Labs</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Practical courses, expert instructors, and structured learning paths for students and
              professionals ready to grow.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <SparklesIcon className="size-3.5" aria-hidden />
              Learn. Build. Advance.
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Get started
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Join thousands of learners building real-world skills with guided courses and teacher
              support.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/login" className={cn(buttonVariants({ size: 'sm' }), 'h-9 px-4')}>
                <GraduationCapIcon className="size-4" aria-hidden />
                Start learning
              </Link>
              <Link
                href="mailto:hello@ptechroom.com"
                className={cn(buttonVariants({ size: 'sm', variant: 'outline' }), 'h-9 px-4')}
              >
                <MailIcon className="size-4" aria-hidden />
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} PTechRoom Labs. All rights reserved.</p>
          <p>Built for learners and educators.</p>
        </div>
      </div>
    </footer>
  )
}
