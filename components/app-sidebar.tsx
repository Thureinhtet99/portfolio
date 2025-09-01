"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { HardDriveDownload } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const resumePath = "/resume/CV.pdf";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Timelines",
      url: "/timelines",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Certificates",
      url: "/certificates",
    },

    {
      title: "Contact",
      url: "/contact",
    },
  ],
  navSecondary: [
    {
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100056964217962",
      icon: <FaFacebook className="h-4 w-4" />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/thureinhtet99/",
      icon: <FaLinkedin className="h-4 w-4" />,
    },
    {
      title: "Github",
      url: "https://github.com/Thureinhtet99",
      icon: <FaGithub className="h-4 w-4" />,
    },
    {
      title: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=thureinhtet653@gmail.com",
      icon: <IoIosMail className="h-4 w-4" />,
    },

    {
      title: "Download CV",
      url: resumePath,
      icon: <HardDriveDownload className="h-4 w-4" />,
      download: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobile, setOpenMobile } = useSidebar();
  const [isPending, startTransition] = React.useTransition();
  const [pendingPath, setPendingPath] = React.useState<string | null>(null);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === href) {
      if (isMobile) {
        setOpenMobile(false);
      }
      return;
    }

    setPendingPath(href);
    startTransition(() => {
      router.push(href);
      if (isMobile) {
        setOpenMobile(false);
      }
    });
  };

  const handleExternalClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarContent className="flex flex-col pt-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Header Section */}
        <div className="px-6 pb-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">TH</span>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-sm">Thu Rein Htet</h3>
              <p className="text-xs text-muted-foreground">
                Web Developer
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <SidebarGroup className="flex-1 px-3 py-4">
          <SidebarMenu className="space-y-1">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`w-full px-4 py-3 group relative overflow-hidden transition-all duration-300 rounded-lg ${
                    pathname === item.url
                      ? "bg-primary/10 text-primary font-semibold"
                      : "hover:bg-muted/50 hover:text-foreground"
                  } ${
                    isPending && pendingPath !== item.url
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  <Link
                    href={item.url}
                    className="flex items-center justify-start h-auto text-sm font-medium relative z-10"
                    onClick={(e) => handleNavClick(item.url, e)}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        pathname === item.url ? "ml-2" : "ml-0"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <div className="mx-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <SidebarGroup className="px-3 py-4">
          <div className="mb-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3">
              Connect
            </p>
          </div>
          <SidebarMenu className="space-y-1">
            {data.navSecondary.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="w-full px-3 py-2.5 hover:bg-muted/50 hover:text-primary transition-all duration-300 rounded-lg group"
                >
                  <Link
                    href={item.url}
                    className="flex items-center justify-start h-auto text-sm font-medium gap-3"
                    target={item.download ? "_self" : "_blank"}
                    rel={item.download ? undefined : "noopener noreferrer"}
                    download={item.download}
                    onClick={!item.download ? handleExternalClick : undefined}
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="truncate group-hover:text-foreground transition-colors duration-300">
                      {item.title}
                    </span>
                    {!item.download && (
                      <svg
                        className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors duration-300 ml-auto opacity-0 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
