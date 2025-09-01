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
import { Footer } from "@/components/Footer";

const robotoMono = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thu Rein Htet - A Developer form Myanmar",
    template: "%s | Thu Rein Htet Portfolio",
  },
  description:
    "Full-Stack Next.js Developer specializing in React, TypeScript, and modern web applications. Building scalable solutions with clean code and exceptional user experiences.",
  keywords: [
    "Thu Rein Htet",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Frontend",
    "Backend",
    "Myanmar Developer",
  ],
  authors: [{ name: "Thu Rein Htet" }],
  creator: "Thu Rein Htet",
  publisher: "Thu Rein Htet",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://thureinhtet.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Thu Rein Htet - Full-Stack Next.js Developer",
    description:
      "Full-Stack Next.js Developer specializing in React, TypeScript, and modern web applications.",
    siteName: "Thu Rein Htet Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Thu Rein Htet - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thu Rein Htet - Full-Stack Next.js Developer",
    description:
      "Full-Stack Next.js Developer specializing in React, TypeScript, and modern web applications.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={false}>
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
                <main className="min-h-screen mx-auto px-4 md:px-6 lg:px-8">
                  {children}
                  <Toaster />
                </main>
                <Footer />
              </SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
