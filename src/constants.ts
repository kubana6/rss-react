import { Routes } from "./types";

export const routes: Routes = {
  "/": "Cards",
  "/about-us": "About Us",
};

export const routesList: (keyof typeof routes)[] = Object.keys(routes);

export enum storageKeys {
  searchValue = "searchValue",
}

export const posts = [
  {
    id: 1,
    title: "10 простых упражнений для утренней зарядки",
    image: "https://picsum.photos/id/237/300/200",
    views: 1024,
    likes: 256,
  },
  {
    id: 2,
    title: "Рецепт идеальной пиццы",
    image: "https://picsum.photos/id/238/300/200",
    views: 512,
    likes: 128,
  },
  {
    id: 3,
    title: "Как правильно выбрать обувь для бега",
    image: "https://picsum.photos/id/239/300/200",
    views: 256,
    likes: 64,
  },
  {
    id: 4,
    title: "Как готовить вкусный рис",
    image: "https://picsum.photos/id/240/300/200",
    views: 128,
    likes: 32,
  },
  {
    id: 5,
    title: "Как улучшить свои навыки вязания",
    image: "https://picsum.photos/id/241/300/200",
    views: 64,
    likes: 16,
  },
  {
    id: 6,
    title: "Как выбрать подходящий подарок для ребенка",
    image: "https://picsum.photos/id/242/300/200",
    views: 32,
    likes: 8,
  },
  {
    id: 7,
    title: "Подборка лучших рецептов на завтрак",
    image: "https://picsum.photos/id/243/300/200",
    views: 16,
    likes: 4,
  },
  {
    id: 8,
    title: "Как выбрать подходящую диету",
    image: "https://picsum.photos/id/244/300/200",
    views: 8,
    likes: 2,
  },
];
