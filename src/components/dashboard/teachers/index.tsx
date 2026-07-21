import { TeachersCarousel } from './teachers-carousel'

export default function Teachers() {
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
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Know your Teachers
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Meet the expert instructors who are passionate about teaching and sharing their
            knowledge.
          </p>
        </div>
        <TeachersCarousel />
      </div>
    </section>
  )
}
