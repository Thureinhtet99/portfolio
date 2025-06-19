"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search certificates..."
            className="pl-10 h-10 border-slate-200 dark:border-slate-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredCertificates.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group rounded-lg border dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
            >
              {certificate.image ? (
                <div className="aspect-[16/9] relative">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-6">
                  <h2 className="text-lg sm:text-xl font-medium text-center line-clamp-3 px-2">
                    {certificate.title}
                  </h2>
                </div>
              )}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl line-clamp-2">
                    {certificate.title}
                  </h3>
                  <Badge className="whitespace-nowrap flex-shrink-0">
                    {certificate.date}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Issued by: {certificate.issuer}
                </p>
                <div className="mt-auto pt-4">
                  {certificate.verificationUrl ? (
                    <Link
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Verify Certificate →
                    </Link>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      No verification available
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 sm:py-20 text-center">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 sm:p-6 mb-4">
            <Search className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            No certificates found
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base px-4">
            No certificates matching your search query "{searchQuery}". Try
            adjusting your search.
          </p>
        </div>
      )}
    </div>
  );
}
