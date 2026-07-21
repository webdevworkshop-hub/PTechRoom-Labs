'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { TeacherCard } from './teacher-card'
import { teachers } from './teachers-data'

export function TeachersCarousel() {
  return (
    <div className="relative px-12 sm:px-14 mt-10">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {teachers.map((teacher, index) => (
            <CarouselItem
              key={teacher.id}
              className="basis-full pl-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <TeacherCard teacher={teacher} priority={index < 2} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 size-10 border-border/60 bg-background shadow-md disabled:opacity-40" />
        <CarouselNext className="right-0 size-10 border-border/60 bg-background shadow-md disabled:opacity-40" />
      </Carousel>
    </div>
  )
}
