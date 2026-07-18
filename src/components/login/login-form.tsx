'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { GraduationCapIcon, Loader2Icon, PresentationIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Link from 'next/link'

const loginSchema = z.object({
  role: z.enum(['TEACHER', 'STUDENT'], {
    error: 'Select whether you are a teacher or a student.',
  }),
  email: z.email('Enter a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
})

type LoginValues = z.infer<typeof loginSchema>

const roles = [
  {
    id: 'STUDENT' as const,
    title: 'Student',
    description: 'Access courses, enrollments, and your learning progress.',
    Icon: GraduationCapIcon,
  },
  {
    id: 'TEACHER' as const,
    title: 'Teacher',
    description: 'Manage courses, content, and your teaching dashboard.',
    Icon: PresentationIcon,
  },
]

export function LoginForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: 'STUDENT',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginValues) {
    setServerError(null)

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })

      const result = (await response.json()) as {
        user?: { role?: string | null }
        errors?: Array<{ message?: string }>
        message?: string
      }

      if (!response.ok) {
        setServerError(
          result.errors?.[0]?.message || result.message || 'Invalid email or password.',
        )
        return
      }

      if (result.user?.role !== data.role) {
        await fetch('/api/users/logout', {
          method: 'POST',
          credentials: 'include',
        })
        setServerError(
          data.role === 'TEACHER'
            ? 'This account is not registered as a teacher.'
            : 'This account is not registered as a student.',
        )
        return
      }

      router.push('/dashboard')
      router.refresh()
    } catch {
      setServerError('Something went wrong. Please try again.')
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Card className="w-full animate-fade-up border-none shadow-none ring-1 ring-primary/15 sm:max-w-md">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-semibold tracking-tight">
          Sign in
        </CardTitle>
        <CardDescription>
          Choose your role, then enter your credentials to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <FieldGroup className="gap-3">
            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet>
                  <FieldLegend variant="label">I am a</FieldLegend>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid grid-cols-2 gap-3"
                  >
                    {roles.map((role) => (
                      <FieldLabel
                        key={role.id}
                        htmlFor={`login-role-${role.id}`}
                        className="w-full cursor-pointer"
                      >
                        <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                          <role.Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                          <FieldContent>
                            <FieldTitle>{role.title}</FieldTitle>
                            <FieldDescription className="text-xs">
                              {role.description}
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value={role.id}
                            id={`login-role-${role.id}`}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={fieldState.invalid}
                    className="h-10"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="login-password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    aria-invalid={fieldState.invalid}
                    className="h-10"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {serverError && <FieldError role="alert">{serverError}</FieldError>}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t-0 bg-transparent flex flex-col gap-2 p-0 pb-3">
        <Button
          type="submit"
          form="login-form"
          size="lg"
          className="h-11 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2Icon className="animate-spin" />
              Signing in…
            </>
          ) : (
            'Sign in'
          )}
        </Button>
        {form.watch('role') === 'STUDENT' && (
          <p className="text-sm text-muted-foreground">
            Don't have an account? <Link href="/register">Register</Link>
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
