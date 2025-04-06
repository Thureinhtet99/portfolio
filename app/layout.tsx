import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/theme-toggle";
import { Toaster } from "sonner";
import QueryProvider from "@/components/QueryProvider";

const robotoMono = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thu Rein Htet",
  description: "Thu Rein Htet's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <header className="sticky top-0 left-0 right-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background dark:border-slate-700">
                  <div className="flex items-center gap-2 px-3 flex-1">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />

                    <div className="ml-auto">
                      <ModeToggle />
                    </div>
                  </div>
                </header>
                <main>
                  <div className="container mx-auto p-4">
                    {children}
                    <Toaster />
                  </div>
                </main>
              </SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
