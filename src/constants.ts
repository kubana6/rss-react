import { Routes } from "./types";

export const routes: Routes = {
  "/": "Cards",
  "/about-us": "About Us",
  "/form": "Form",
};

export const routesList: (keyof typeof routes)[] = Object.keys(routes);

export enum storageKeys {
  searchValue = "searchValue",
}

export const countries = [
  { value: "AU", label: "Australia" },
  { value: "CA", label: "Canada" },
  { value: "DE", label: "Germany" },
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
];
