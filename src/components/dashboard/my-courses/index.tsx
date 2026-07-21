import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'

import { featuredCourses } from './featured-courses-data'
import { FeaturedCourseCard } from './featured-course-card'
import { cn } from '@/lib/utils'

export default function MyCourses() {
  return (
    <section className="relative border-t border-border overflow-hidden bg-linear-to-b from-accent/60 via-background to-background px-5 py-20">
      <div
        className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-56 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <SparklesIcon className="size-3.5" aria-hidden />
            Curated for you
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Hand-picked programs from expert instructors - build real skills with structured lessons
            and hands-on projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <FeaturedCourseCard key={course.id} course={course} priority={index < 3} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'group h-11 gap-2 px-6 hover:bg-primary/5 hover:text-primary',
            )}
          >
            View all courses
            <ArrowRightIcon
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
