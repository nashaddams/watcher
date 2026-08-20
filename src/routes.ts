export const Route = {
  Library: { path: "/library", title: "Library", nav: true, optional: false },
  Recent: { path: "/recent", title: "Recent", nav: true, optional: true },
  Upcoming: { path: "/upcoming", title: "Upcoming", nav: true, optional: true },
  Trending: { path: "/trending", title: "Trending", nav: true, optional: true },
  Settings: {
    path: "/settings",
    title: "Settings",
    nav: true,
    optional: false,
  },
  Show: { path: "/show/:id", nav: false, optional: false },
  Movie: { path: "/movie/:id", nav: false, optional: false },
  Person: { path: "/person/:id", nav: false, optional: false },
  F1: { path: "/f1/:id", nav: false, optional: false },
} as const;

export type NavRoute =
  (typeof Route[keyof typeof Route] & { nav: true })["path"];

export type OptionalRoute =
  (typeof Route[keyof typeof Route] & { optional: true })["path"];
