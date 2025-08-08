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

    // Reset pending state after a short delay
    // setTimeout(() => {
    //   setPendingPath(null);
    // }, 500);
  };

  const handleExternalClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarContent className="flex flex-col pt-6">
        <SidebarGroup className="flex-1 ">
          <SidebarMenu className="space-y-2">
            {data.navMain.map((item) => (
              <div key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className={`w-full px-4 group relative overflow-hidden transition-all duration-200 ${
                      pathname === item.url && "text-primary font-medium"
                    } ${
                      isPending && pendingPath !== item.url
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center justify-start h-10 text-base font-medium relative z-10"
                      onClick={(e) => handleNavClick(item.url, e)}
                    >
                      {pathname === item.url && (
                        <div className="absolute inset-0 rounded-md" />
                      )}
                      {/* {pendingPath === item.url && isPending && (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        )} */}
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <div className="mx-4 h-px bg-sidebar-border my-4" />

        <SidebarGroup>
          <SidebarMenu className="px-3 pb-4 space-y-1">
            {data.navSecondary.map((item) => (
              <div key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className={`w-full hover:bg-primary/5 hover:text-primary dark:hover:bg-blue-800/10 dark:hover:text-primary transition-all duration-200 group ${
                      isPending ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center justify-start h-10 text-sm font-medium gap-3"
                      target={item.download ? "_self" : "_blank"}
                      rel={item.download ? undefined : "noopener noreferrer"}
                      download={item.download}
                      onClick={!item.download ? handleExternalClick : undefined}
                    >
                      <span className="text-muted-foreground hover:text-primary transition-colors">
                        {item.icon}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
