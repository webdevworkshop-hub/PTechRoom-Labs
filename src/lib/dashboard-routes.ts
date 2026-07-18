import { Book, MessageSquare, Settings, UserRound } from 'lucide-react'

export const TEACHER_DASHBOARD_ROUTES = [
  {
    label: 'My Courses',
    href: '/dashboard/my-courses',
    Icon: Book,
  },
  {
    label: 'blogs',
    href: '/dashboard/blogs',
    Icon: MessageSquare,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    Icon: Settings,
  },
]
export const STUDENT_DASHBOARD_ROUTES = [
  {
    label: 'My Enrollments',
    href: '/dashboard/my-enrollments',
    Icon: Book,
  },
  {
    label: 'My Profile',
    href: '/dashboard/my-profile',
    Icon: UserRound,
  },
]
