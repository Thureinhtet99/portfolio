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
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";


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
      url: "https://www.facebook.com/profile.php?id=100056964217962",
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
        <motion.div 
          className="flex flex-col items-center py-6 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="h-25 w-25 shadow">
              <AvatarImage src="/me.jpg" alt="Profile" className="object-cover"/>
              <AvatarFallback>TH</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h3 
            className="text-lg font-semibold mt-3 mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Thu Rein Htet
          </motion.h3>
          
          <motion.p 
            className="text-sm text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Web Developer
          </motion.p>
          
          <Separator className="w-full" />
        </motion.div>
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
