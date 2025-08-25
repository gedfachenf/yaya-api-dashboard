import { LucideIcon } from "lucide-react";

export interface ErrorResponse {
  error?: string;
  message: string;
}

export type ActionResponse<T> =
  | { success: true; statusCode?: number; data: T }
  | { success: false; statusCode?: number; data: ErrorResponse };

export interface PaginatedData<T> {
  data: T[];
  lastPage: number;
  total: number;
  perPage: number;
  incomingSum: number;
  outgoingSum: number;
}

export interface SortDescriptor {
  column: string;
  direction: "DESC" | "ASC";
}

export interface APIFilters {
  id?: number;
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: SortDescriptor;
}

export interface LabelValue {
  value: string;
  label: string;
}

export interface TokenDecoded {
  sub: string;
  iat: number;
  exp: number;
}

export interface MenuItemI {
  title: string;
  icon?: LucideIcon;
  description?: string;
  href?: string;
}

export interface NavItemI extends MenuItemI {
  children?: MenuItemI[];
}

export interface SearchParamsI {
  page?: number;
  limit?: number;
  search?: string;
  owned?: "all" | "me";
}

export interface BaseI {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
