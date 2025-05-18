"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { HardDriveDownload } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const resumePath = "/resume/CV.pdf";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
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
      url: "https://www.facebook.com/profile.php?id=100010238821531",
      icon: <FaFacebook className="h-4 w-4 mr-2" />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/thureinhtet99/",
      icon: <FaLinkedin className="h-4 w-4 mr-2" />,
    },
    {
      title: "Github",
      url: "https://github.com/Thureinhtet99",
      icon: <FaGithub className="h-4 w-4 mr-2" />,
    },
    {
      title: "Download CV",
      url: resumePath,
      icon: <HardDriveDownload className="h-4 w-4 mr-2" />,
      download: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu className="flex justify-center">
          <SidebarMenuItem className="w-full max-w-[250px]">
            <SidebarMenuButton size="lg" asChild>
              <Link
                href="/"
                className="w-full flex justify-center items-center"
              >
                <span className="font-semibold text-center">
                  Thu Rein Htet&apos;s Portfolio
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="flex flex-col items-center gap-2 p-4">
            {data.navMain.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="w-full max-w-[200px]"
              >
                <SidebarMenuButton
                  asChild
                  className={`w-full py-3 px-4 rounded-lg hover:text-blue-400 transition-colors ${
                    pathname === item.url
                      ? "bg-accent text-blue-400"
                      : "hover:bg-accent"
                  }`}
                >
                  <Link
                    href={item.url}
                    className="font-medium text-lg text-center block"
                  >
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <div className="mx-auto w-[80%] h-px bg-border/50 my-2" />

        <SidebarGroup>
          <SidebarMenu className="flex flex-col items-center p-4">
            {data.navSecondary.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="w-full max-w-[200px]"
              >
                <SidebarMenuButton
                  asChild
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    pathname === item.url
                      ? "bg-accent/50 text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  <Link
                    href={item.url}
                    className="font-medium text-base text-start flex items-center justify-start"
                    target={item.download ? "_self" : "_blank"}
                    rel={item.download ? undefined : "noopener noreferrer"}
                    download={item.download}
                  >
                    {item.icon}
                    {item.title}
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
