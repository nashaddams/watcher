export const Path = {
  Library: "/library",
  Recent: "/recent",
  Upcoming: "/upcoming",
  Trending: "/trending",
  Settings: "/settings",
} as const;

export type PathType = (typeof Path)[keyof typeof Path];
