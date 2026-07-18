import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { STUDENT_DASHBOARD_ROUTES, TEACHER_DASHBOARD_ROUTES } from '@/lib/dashboard-routes'
import Link from 'next/link'

export function DashboardSidebar({ userType }: { userType: 'TEACHER' | 'STUDENT' }) {
  const routes = userType === 'TEACHER' ? TEACHER_DASHBOARD_ROUTES : STUDENT_DASHBOARD_ROUTES
  return (
    <Sidebar className="bg-background pt-18">
      <SidebarContent>
        <SidebarGroup className="px-4">
          {routes.map((route) => (
            <SidebarMenuItem
              key={route.href}
              className="hover:bg-accent/50 transform transition-all duration-300"
            >
              <Link
                href={route.href}
                className="flex items-center gap-2 w-full py-3 text-2xl capitalize"
              >
                <route.Icon className="h-4 w-4" />
                {route.label}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
