'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { faqItems } from './faq-data'

export default function FAQ() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-linear-to-b from-accent/60 via-background to-background px-5 py-20">
      <div
        className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-56 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Get answers to your questions about PTechRoom Labs and our courses.
          </p>
        </div>

        <Accordion
          defaultValue={[faqItems[0].id]}
          className="mt-10 overflow-hidden rounded-xl border border-primary/40 bg-card/60 px-5 shadow-sm ring-1 ring-foreground/5"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="py-4 hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
