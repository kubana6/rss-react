export interface GetCardsParams {
  name: string;
  [key: string]: string;
}

export interface CardsResponse {
  info: CardsResponseInfo;
  results: Card[] | [];
}

export interface CardsResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Card {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  episode: string[];
}
