import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { getCurrentUser } from '@/lib/auth'

import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  if (!user.role || (user.role !== 'TEACHER' && user.role !== 'STUDENT')) {
    redirect('/login')
  }

  return (
    <div className="flex">
      <SidebarProvider>
        <DashboardSidebar userType={user.role} />
        <main className="flex-1 p-2 md:p-6">{children}</main>
      </SidebarProvider>
    </div>
  )
}
