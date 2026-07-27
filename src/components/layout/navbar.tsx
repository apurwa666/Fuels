
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "../logo-icon"
import { navLinks } from "@/lib/data"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState<string | null>(null)
  const [isHeaderHovered, setIsHeaderHovered] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 20)
    if (!mobileMenuOpen && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const isVisible = !mounted || !hidden || isHeaderHovered || mobileMenuOpen

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div 
        className="absolute top-0 left-0 w-full h-4 pointer-events-auto"
        onMouseEnter={() => setIsHeaderHovered(true)}
      />

      <motion.div 
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
        className={cn(
          "w-full transition-all duration-300 h-16 md:h-20 flex items-center relative z-50",
          scrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
            : "bg-background/30 backdrop-blur-md border-b border-transparent"
        )}>
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 flex items-center justify-between h-full">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 shrink-0 group">
              <LogoIcon className="h-8 w-8 md:h-10 md:w-10" imageUrl="/images/logo.png" />
              <span className="font-bold text-lg sm:text-xl md:text-2xl font-headline tracking-tighter group-hover:text-primary transition-colors">FuelMails</span>
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-12">
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative py-4"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.children ? (
                    <div className="flex items-center gap-1 cursor-default text-sm lg:text-base font-semibold text-foreground/90 hover:text-primary transition-colors">
                      {link.label}
                      <ChevronDown className={cn("w-3 h-3 sm:w-4 sm:h-4 transition-transform", hoveredLink === link.label && "rotate-180")} />
                      
                      <AnimatePresence>
                        {mounted && hoveredLink === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 w-48 sm:w-56 bg-card/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl py-2 z-50"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-2 text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      className="text-sm lg:text-base font-semibold text-foreground/90 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button asChild className="hidden sm:flex rounded-full px-6 md:px-8 shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all font-bold text-sm">
                <Link href="/#schedule">Book Audit</Link>
              </Button>
              <button 
                className="md:hidden p-2 text-foreground relative z-50" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mounted && mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-0 z-40 bg-background md:hidden overflow-hidden"
            >
              <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 flex flex-col space-y-8 pt-24 overflow-y-auto h-full pb-24 text-center">
                {navLinks.map((link) => (
                  <div key={link.label} className="flex flex-col space-y-4">
                    {link.children ? (
                      <div className="flex flex-col space-y-4">
                        <button
                          onClick={() => toggleMobileSubMenu(link.label)}
                          className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tight w-full"
                        >
                          {link.label}
                          <ChevronDown className={cn("w-6 h-6 transition-transform", mobileSubMenuOpen === link.label && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {mobileSubMenuOpen === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col space-y-4 overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-bold tracking-tight"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button asChild size="lg" className="w-full rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] font-bold h-14">
                    <Link href="/#schedule" onClick={() => setMobileMenuOpen(false)}>Book Your Audit</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
