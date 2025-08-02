import "./globals.css"
import { Providers } from "./providers"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SiteHeader />
            <main>
              <div className="flex-1 p-6 lg:p-8 bg-gray-50 overflow-auto">
                <Providers>{children}</Providers>
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}