import Image from 'next/image'

import { cn } from '@/lib/utils'

import type { Teacher } from './teachers-data'

function TeacherArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-full w-full', className)}
      aria-hidden
    >
      <path d="M24 280V130C24 78 108 32 120 32C132 32 216 78 216 130V280H24Z" fill="#FEF9C3" />
      <path
        d="M40 280V138C40 92 108 52 120 52C132 52 200 92 200 138V280H40Z"
        stroke="#FDE68A"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M56 280V146C56 106 108 72 120 72C132 72 184 106 184 146V280H56Z"
        stroke="#FDE68A"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M72 280V154C72 120 108 92 120 92C132 92 168 120 168 154V280H72Z"
        stroke="#FDE68A"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M88 280V162C88 134 108 112 120 112C132 112 152 134 152 162V280H88Z"
        stroke="#FDE68A"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

type TeacherCardProps = {
  teacher: Teacher
  priority?: boolean
}

export function TeacherCard({ teacher, priority = false }: TeacherCardProps) {
  return (
    <article className="flex h-full flex-col items-center">
      <div className="relative mx-auto w-full pt-6 pb-2">
        <div className="absolute inset-x-6 top-10 bottom-24">
          <TeacherArch />
        </div>

        <div className="relative z-10 flex justify-center px-4 pt-2">
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={teacher.image}
              alt={teacher.name}
              fill
              priority={priority}
              sizes="260px"
              className="object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-background to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative z-20 -mt-5 mx-1 rounded-2xl bg-card px-2 border border-primary py-3 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-foreground/5">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {teacher.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{teacher.subject}</p>
        </div>
      </div>
    </article>
  )
}
