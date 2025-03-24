"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "Full-Stack Developer Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/FDC-Certificate.jpg",
    verificationUrl: "https://verify.example.com/cert1",
  },
  {
    title: "Professional React Course",
    issuer: "Codelab",
    date: "2024",
    image: "/certificate-images/Professional React Course.jpg",
    verificationUrl: "https://verify.example.com/cert2",
  },
  {
    title: "Web Design Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/Web Design Certificate.jpg",
    verificationUrl: "https://verify.example.com/cert2",
  },
  {
    title: "Vue + Laravel Full-Stack Course",
    issuer: "Codelab",
    date: "2023",
    image: "/certificate-images/Vue + Laravel.jpg",
    verificationUrl: "https://verify.example.com/cert2",
  },
  {
    title: "BYU Pathway",
    issuer: "BYU Pathway",
    date: "2023",
    image: "/certificate-images/BYU Pathway.JPG",
    verificationUrl: "https://verify.example.com/cert2",
  },
];

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-8">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search certificates..."
            className="pl-8"
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
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-xl">{certificate.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {certificate.date}
                </span>
              </div>
              <p className="text-muted-foreground">
                Issued by: {certificate.issuer}
              </p>
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium hover:underline"
              >
                Verify Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
