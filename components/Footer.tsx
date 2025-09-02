import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socailLinks = [
    {
      title: "Github",
      url: "https://github.com/Thureinhtet99",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/thureinhtet99/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100056964217962",
      icon: <FaFacebook className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div
        className="mx-auto p-4"
      >
        <div className="flex flex-col items-center space-y-2">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socailLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                {link.icon}
                {/* <FaGithub className="w-5 h-5" /> */}
              </Link>
            ))}
          </div>

          <Separator className="max-w-xs" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Thu Rein Htet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
