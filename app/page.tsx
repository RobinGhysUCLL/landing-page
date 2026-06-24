"use client";

import { useState, useEffect, Suspense } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  AlertCircle,
  Moon,
  Sun,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function PageContent() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [siteName, setSiteName] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
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
  }, [searchParams]);

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
      <div className="w-full border-b border-red-200/80 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 px-4 py-4 shadow-sm dark:border-red-900/60 dark:from-red-950/30 dark:via-orange-950/20 dark:to-red-950/30 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-red-200/70 bg-white/70 shadow-sm backdrop-blur-sm dark:border-red-900/50 dark:bg-red-950/15">
            <div className="h-1 w-full bg-gradient-to-r from-red-400 via-orange-400 to-red-400" />
            <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 lg:p-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="self-start rounded-full bg-red-100 p-2 flex-shrink-0 dark:bg-red-900/40 sm:p-2.5">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 sm:h-5 sm:w-5" />
                </div>
                <h1 className="text-lg font-extrabold leading-tight text-red-950 dark:text-red-50 sm:text-xl lg:text-2xl">
                  {siteName
                    ? `${siteName} is tijdelijk niet bereikbaar`
                    : "Deze website is momenteel niet bereikbaar"}
                </h1>
              </div>
              <div className="flex-1 pl-0 sm:pl-[3.5rem] lg:pl-[3.75rem]">
                <p className="mb-3 text-xs leading-relaxed text-red-900 dark:text-red-100 sm:text-sm">
                  De service die je probeert te bereiken is tijdelijk offline.
                  We werken eraan om dit zo snel mogelijk op te lossen.
                </p>
                <div className="grid gap-3 sm:grid-cols-[auto,1fr] sm:items-center sm:gap-4">
                  <button
                    onClick={() => router.push(`https://${siteName}`)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-red-300 bg-gradient-to-r from-red-200 to-orange-100 px-4 py-2 text-xs font-semibold text-red-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400 hover:from-red-300 hover:to-orange-200 hover:shadow-md active:translate-y-0 sm:w-auto sm:text-sm"
                  >
                    Terug naar {siteName}
                  </button>
                  <div className="rounded-lg border border-red-200/80 bg-red-50/70 px-3 py-2 text-[11px] text-red-800 shadow-sm dark:border-red-900/60 dark:bg-red-950/20 dark:text-red-200 sm:text-right sm:text-xs">
                    <span className="block font-semibold">Hulp nodig?</span>
                    <span className="block">Contacteer me via een van onderstaande kanalen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                Wie ik ben:
              </p>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Hallo, ik ben{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Robin Ghys
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                Full-stack developer en designer met passie voor het bouwen van
                prachtige, performante digitale producten.
              </p>
            </div>

            {/* Photo - Organic blob shape */}
            <div className="flex-shrink-0">
              <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
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
                        src="/picture-robin.png"
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
      <section className="w-full border-t border-border px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-10 sm:text-3xl lg:text-4xl">
            Contacteer mij direct
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-md active:scale-[0.98] sm:p-6"
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
      <section className="w-full border-t border-border bg-card/50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl lg:text-4xl">
            Wat ik aanbied
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
            Dit zijn de diensten die ik normaal aanbied via mijn andere
            websites:
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/50 sm:p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground sm:mb-3 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
      <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center shadow-sm sm:p-8 lg:p-10">
          <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground sm:mb-4 sm:text-3xl lg:text-4xl">
            Heb je een project in gedachten?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
            Neem gerust contact met me op via een van de kanalen. Ik kijk graag
            uit naar je bericht!
          </p>
          <p className="mx-auto mb-6 max-w-2xl text-base font-bold leading-relaxed sm:mb-8 sm:text-lg">
            Contacteer me
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {contactLinks.slice(0, 3).map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-3 font-bold transition-all duration-300 hover:bg-white hover:text-black sm:p-4"
                  aria-label={link.name}
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
            <p className="text-xs text-muted-foreground sm:text-sm">
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

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PageContent />
    </Suspense>
  );
}
