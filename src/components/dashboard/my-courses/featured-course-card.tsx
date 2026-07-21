import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, ClockIcon, UsersIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { FeaturedCourse } from './featured-courses-data'
import { Badge } from '@/components/ui/badge'


function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

type FeaturedCourseCardProps = {
  course: FeaturedCourse
  priority?: boolean
}

export function FeaturedCourseCard({ course, priority = false }: FeaturedCourseCardProps) {
  return (
    <Card className="group/card h-full gap-0 overflow-hidden border-0 py-0 shadow-sm ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/25">
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        <Image
          src={course.image}
          alt={course.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
          aria-hidden
        />
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 px-4 pt-4 pb-2">
        <div className="space-y-3">
          <h3 className="font-heading line-clamp-2 text-lg leading-snug font-semibold tracking-tight text-foreground transition-colors group-hover/card:text-primary">
            {course.name}
          </h3>

          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-[11px] font-bold tracking-wide text-primary ring-2 ring-primary/10">
                {getInitials(course.instructor)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{course.instructor}</p>
                <p className="text-xs text-muted-foreground">Instructor</p>
              </div>
            </div>
            <Badge variant="outline" className="text-primary text-sm h-7">
              {course.category}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex border border-primary/20 items-center gap-2 rounded-lg bg-muted/60 px-2.5 py-2 text-xs text-muted-foreground">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-background text-primary shadow-sm">
              <UsersIcon className="size-3.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-medium text-foreground">{course.students}</p>
              <p className="truncate">Students</p>
            </div>
          </div>
          <div className="flex border border-primary/20 items-center gap-2 rounded-lg bg-muted/60 px-2.5 py-2 text-xs text-muted-foreground">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-background text-primary shadow-sm">
              <ClockIcon className="size-3.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-medium text-foreground">{course.duration}</p>
              <p className="truncate">Duration</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between gap-3 border-t border-border/50 bg-linear-to-r from-muted/40 to-muted/20 px-4 py-3.5">
        <div>
          <p className="text-xs text-muted-foreground">Price</p>
          <p className="font-heading text-xl font-semibold text-foreground">₹ {course.price}</p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ size: 'sm' }), 'h-9 px-4 font-medium shadow-sm')}
        >
          Enroll now
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </CardFooter>
    </Card>
  )
}
