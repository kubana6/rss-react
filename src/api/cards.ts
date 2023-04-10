import { toQueryString } from "../helpers/qs";
import { getResponse } from "./response";
import { CardsResponse, GetCardsParams } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

export class CardsService {
  static getCards = (params: GetCardsParams) =>
    getResponse<CardsResponse>(`${BASE_URL}?${toQueryString(params)}`);
}
