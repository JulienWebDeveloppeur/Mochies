export const NavigationItem = {
  HOME: { key: "home", label: "Home", path: "/" },
  OVERVIEW: {
    key: "overview",
    label: "Overview",
    path: "overview",
  },
} as const;

export declare type NavigationItemType = ValueOf<typeof NavigationItem>;
