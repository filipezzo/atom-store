import { ReactNode } from "react";

export type ICategories = {
  id: string;
  img: string;
  text: string;
  category: string;
};

export type IProduct = {
  id: number;
  img: string;
  text: string;
  category: string;
  price?: number;
  desc?: string;
  quantity?: number;
};

export type IQuality = {
  id: number;
  title: string;
  text: string;
  icon?: ReactNode;
};
