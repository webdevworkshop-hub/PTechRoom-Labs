'use client'

import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/15 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-primary"
        >
          PTechRoom <span className="text-primary/70">Labs</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className={cn(buttonVariants({ size: 'sm' }), 'ml-2')}
          >
            Get started
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-primary">
                PTechRoom Labs
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'w-full justify-start',
                      )}
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={
                  <Link
                    href="/admin"
                    className={cn(buttonVariants(), 'mt-2 w-full')}
                  />
                }
              >
                Get started
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
