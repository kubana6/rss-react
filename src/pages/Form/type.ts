export interface errorsForm {
  firstName: string[] | [];
  lastName: string[] | [];
  birthDay: string[] | [];
  country: string[] | [];
  gender: string[] | [];
  avatar: string[] | [];
  accept: string[] | [];
}

export interface CardsForm {
  id: number;
  firstName: string;
  lastName: string;
  birthDay: string;
  country: string;
  gender: string;
  avatar: string;
}

export interface State {
  cards: CardsForm[] | [];
  errors: errorsForm;
  isActiveMessage: boolean;
}
