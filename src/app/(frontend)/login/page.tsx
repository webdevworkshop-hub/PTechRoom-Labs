import Link from 'next/link'
import { redirect } from 'next/navigation'

import { LoginForm } from '@/components/login/login-form'
import { getCurrentUser } from '@/lib/auth'

export default async function LoginPage() {
  const user = await getCurrentUser()

  if (user?.role === 'TEACHER' || user?.role === 'STUDENT') {
    redirect('/dashboard')
  }

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center px-5 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 size-112 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-accent/80 blur-2xl" />
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <div className="animate-fade-up text-center">
          <Link href="/" className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
            PTechRoom Labs
          </Link>
          <p className=" text-sm text-muted-foreground sm:text-base">
            Welcome back — sign in to your learning space.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  )
}
