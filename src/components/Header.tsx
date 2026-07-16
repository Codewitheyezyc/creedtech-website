"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import PageContainer from "./PageContainer";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "What We Do", href: "/what-we-do" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-md border-b border-steel-blue/20">
      <PageContainer className="h-16 flex items-center justify-between">
        {/* Logo only — brand name lives in the footer (Notion-style) */}
        <Link href="/" className="flex items-center group z-50" aria-label="Creed Tech — Home">
          <Logo className="h-8 w-8 transition-transform group-hover:scale-105 duration-200" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-navy ${
                  isActive ? "text-navy underline underline-offset-4" : "text-slate-gray"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Button href="/start-a-project" size="sm">
            Start a Project →
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 rounded-md focus:outline-none hover:bg-steel-blue/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-16 left-0 w-full bg-paper border-b border-steel-blue/20 shadow-lg md:hidden z-40"
            >
              <nav className="flex flex-col p-6 space-y-6">
                {/* Start a Project Button at the top of the menu */}
                <Button
                  href="/start-a-project"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project →
                </Button>

                {/* Stacked Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-sans text-base font-semibold px-2 py-1.5 rounded transition-all hover:bg-steel-blue/10 ${
                          isActive ? "text-navy bg-steel-blue/10" : "text-slate-gray"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </header>
  );
}
