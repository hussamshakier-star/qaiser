"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Services", href: "#services" },
  { label: "Hosting", href: "#hosting" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
]

export function SiteNav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false)

  const isDark = variant === "dark"
  const textColor = isDark ? "text-background" : "text-foreground"
  const borderColor = isDark ? "border-background/15" : "border-foreground/15"

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50",
        "px-6 md:px-10 py-5 md:py-6",
        textColor,
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 tracking-tight" aria-label="Iraqi Technology System home">
          <Image
            src="/its-logo.png"
            alt=""
            width={40}
            height={40}
            className="size-9 rounded-md object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl">Iraqi Technology System</span>
            <span className="text-[10px] uppercase tracking-[0.25em] opacity-70 mt-1">ITS</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className={cn(
            "hidden md:inline-flex items-center rounded-full border px-5 py-2 text-sm transition-colors",
            borderColor,
            isDark
              ? "hover:bg-background hover:text-foreground"
              : "hover:bg-foreground hover:text-background",
          )}
        >
          Start a project
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center size-10 -mr-2"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          className={cn(
            "md:hidden mt-4 rounded-md border p-6",
            isDark ? "bg-foreground/95 border-background/10" : "bg-background border-border",
          )}
        >
          <ul className="flex flex-col gap-4 text-base">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full border border-current px-5 py-2 text-sm mt-2"
              >
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
