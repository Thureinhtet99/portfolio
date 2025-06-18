"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    title: "Back End Development & APIs",
    issuer: "freeCodeCamp",
    date: "2025",
    verificationUrl:
      "https://www.freecodecamp.org/certification/ThureinHtet/back-end-development-and-apis",
  },
  {
    title: "Full-Stack Developer Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/FDC-Certificate.jpg",
  },
  {
    title: "Professional React Course",
    issuer: "Codelab",
    date: "2024",
    image: "/certificate-images/Professional React Course.jpg",
  },
  {
    title: "Web Design Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/Web Design Certificate.jpg",
  },
  {
    title: "Vue + Laravel Full-Stack Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/Vue + Laravel.jpg",
  },
  {
    title: "BYU Pathway",
    issuer: "BYU Pathway",
    date: "2023",
    image: "/certificate-images/BYU Pathway.JPG",
  },
];

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search certificates with title..."
            className="pl-10 h-11 border-slate-200 dark:border-slate-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCertificates.map((certificate) => (
          <div
            key={certificate.title}
            className="group rounded-lg border dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-colors"
          >
            {certificate.image ? (
              <div className="aspect-[16/9] relative">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ) : (
              <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-6">
                <h2 className="text-xl font-medium text-center">
                  {certificate.title}
                </h2>
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-xl">{certificate.title}</h3>
                <Badge>{certificate.date}</Badge>
              </div>
              <p className="text-muted-foreground">
                Issued by: {certificate.issuer}
              </p>
              {certificate.verificationUrl ? (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium hover:underline"
                >
                  Verify Certificate →
                </a>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground italic">
                  No verification available
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
