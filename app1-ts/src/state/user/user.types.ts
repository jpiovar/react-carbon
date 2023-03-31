export interface UserType {
  name: string;
  surname: string;
  age: number;
}

export type UserTypeEmpty = Record<symbol, never> | never;

export type UserTypeAny = { user: UserTypeEmpty }