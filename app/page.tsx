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
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [siteName, setSiteName] = useState<string | null>(null);
  const searchParams = useSearchParams();

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

    // Haal 'site' parameter uit URL (bijv. ?site=portfolio)
    const site = searchParams.get("site");
    if (site) {
      setSiteName(site);
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
      url: "https://github.com/RobinGhysUCLL",
      icon: Github,
      label: "github.com/RobinGhysUCLL",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/robin-ghys-a225a817a/",
      icon: Linkedin,
      label: "linkedin.com/in/robin-ghys-a225a817a/",
    },
    {
      name: "Portfolio",
      url: "https://portfolio.robinghys.com",
      icon: Globe,
      label: "portfolio.robinghys.com",
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
      <div className="w-full bg-gradient-to-r from-red-50 via-orange-50 to-red-50 dark:from-red-950/30 dark:via-orange-950/20 dark:to-red-950/30 border-b-2 border-red-300 dark:border-red-800 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/40 flex-shrink-0">
              <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-red-950 dark:text-red-50 mb-3 leading-tight">
                {siteName
                  ? `${siteName} is tijdelijk niet bereikbaar`
                  : "Deze website is momenteel niet bereikbaar"}
              </h1>
              <p className="text-base sm:text-lg text-red-900 dark:text-red-100 leading-relaxed mb-4">
                De service die je probeert te bereiken is tijdelijk offline. We
                werken eraan om dit zo snel mogelijk op te lossen.
              </p>
              <div className="flex items-center gap-2 text-sm text-red-800 dark:text-red-200">
                <span className="font-semibold">Hulp nodig?</span>
                <span>Contacteer me via een van onderstaande kanalen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Wie ik ben:
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Hallo, ik ben{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Robin Ghys
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed lg:mx-0 mx-auto">
                Full-stack developer en designer met passie voor het bouwen van
                prachtige, performante digitale producten.
              </p>
            </div>

            {/* Photo - Organic blob shape */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                {/* Soft background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-2xl" />

                <div className="relative w-full h-full">
                  {/* Blob shape container */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1.5"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    }}
                  >
                    <div
                      className="w-full h-full bg-background p-2.5"
                      style={{
                        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      }}
                    >
                      <img
                        src="/placeholder.svg"
                        alt="Robin Ghys"
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Static decorative dots */}
                  <div className="absolute -top-3 -right-3 w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-primary/60 rounded-full" />
                  <div className="absolute top-1/4 -left-5 w-2.5 h-2.5 bg-primary/40 rounded-full" />
                </div>
              </div>
            </div>
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
            Neem gerust contact met me op via een van de kanalen. Ik kijk graag
            uit naar je bericht!
          </p>
          <p className="text-base font-bold sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Contacteer me
          </p>
          <div className="flex items-center gap-4 justify-center">
            {contactLinks.slice(0, 3).map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-black hover:bg-white transition-colors p-4 rounded-xl transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon className="h-10 w-10" />
                </a>
              );
            })}
          </div>

          {/* <a
            href={contactLinks.find((l) => l.name === "Email")?.url || "#"}
            className="inline-block px-6 sm:px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 active:scale-95 text-sm sm:text-base"
          >
            Stuur me een email
          </a> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 sm:py-10 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Robin Ghys. Alle rechten
              voorbehouden.
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
