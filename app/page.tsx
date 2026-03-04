"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  AlertCircle,
  Moon,
  Sun,
} from "lucide-react";

export default function Page() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jouw-username",
      icon: Github,
      label: "github.com/jouw-username",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jouw-profiel",
      icon: Linkedin,
      label: "linkedin.com/in/jouw-profiel",
    },
    {
      name: "Portfolio",
      url: "https://jouw-portfolio.com",
      icon: Globe,
      label: "jouw-portfolio.com",
    },
    {
      name: "Email",
      url: "mailto:hallo@jouw-email.com",
      icon: Mail,
      label: "hallo@jouw-email.com",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Full-stack web applicaties met React, Next.js en moderne technologieën",
      features: ["Responsive design", "Performance optimized", "SEO friendly"],
    },
    {
      title: "UI/UX Design",
      description:
        "Mooie en gebruikersvriendelijke interfaces met figma en design systems",
      features: ["Design systems", "Prototyping", "User research"],
    },
    {
      title: "Consulting",
      description:
        "Advies voor je digitale transformatie en technische architectuur",
      features: ["Architecture design", "Code review", "Best practices"],
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* Error Banner */}
      <div className="w-full bg-red-50 dark:bg-red-950/20 border-b border-red-200 dark:border-red-900/40 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-red-900 dark:text-red-100 mb-2">
                De website die u probeerde te bereiken staat momenteel niet
                online
              </h1>
              <p className="text-red-800 dark:text-red-200 text-base sm:text-lg leading-relaxed">
                Ik ben aan het werken aan het herstellen van mijn services. Kunt
                u via één van de contactkanalen hieronder contact met mij
                opnemen?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Wie ik ben:
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Hallo, ik ben{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Jouw Naam
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Full-stack developer en designer met passie voor het bouwen van
              prachtige, performante digitale producten.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-10">
            Contacteer mij direct
          </h2>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 sm:p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-md active:scale-95"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {link.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground break-all group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 border-t border-border bg-card/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Wat ik aanbied
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            Dit zijn de diensten die ik normaal aanbied via mijn andere
            websites:
          </p>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-5 sm:p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Heb je een project in gedachten?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Neem gerust contact met me op via een van de kanalen hierboven. Ik
            kijk graag uit naar je bericht!
          </p>
          <a
            href={contactLinks.find((l) => l.name === "Email")?.url || "#"}
            className="inline-block px-6 sm:px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 active:scale-95 text-sm sm:text-base"
          >
            Stuur me een email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 sm:py-10 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Jouw Naam. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4">
              {contactLinks.slice(0, 3).map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
