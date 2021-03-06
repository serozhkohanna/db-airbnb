import { ParamsInterfaces } from "./params.interfaces";

export interface FiltersInterface {
  property_type?: ParamsInterfaces;
  cancellation_policy?: ParamsInterfaces;
  price: number;
  isHighScored: boolean;
}