"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Consultations", href: "/consultations" },
    { name: "Prescriptions", href: "/prescriptions" },
    { name: "Pharmacies", href: "/pharmacies" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-brand-blue text-white py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+265 1 234 567</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>info@telemedicine.mw</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-white/20"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-md bg-brand-blue">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">T</div>
            </div>
            <span className="font-bold text-xl">
              <span className="text-brand-red">Tele</span>Medicine
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary border-b-2 border-brand-red" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90">Get started</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden p-4 pt-0 bg-background border-b">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-2 py-1 text-sm font-medium rounded-md",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90 w-full">Get started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
