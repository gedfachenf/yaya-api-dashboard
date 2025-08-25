"use server";

import { ActionResponse, APIFilters, PaginatedData } from "@/interfaces/app";
import { API_URL } from "@/lib/env";
import { defaultErrorHandler, handleResponse } from "./utils";
import { toQueryString } from "@/lib/tools";
import { TxnI } from "@/interfaces/txn";
import { createYayaAuthHeaders } from "@/lib/yaya-utils";

export const getTxns = async (
  filter: APIFilters
): Promise<ActionResponse<PaginatedData<TxnI>>> => {
  try {
    if (filter.search) {
      return await getSearchTxns(filter);
    }
    const method = "GET";
    const endpoint = "/api/en/transaction/find-by-user";

    const yayaAuthHeaders = createYayaAuthHeaders({
      method,
      endpoint,
    });

    const res = await fetch(
      `${API_URL}/api/en/transaction/find-by-user?${toQueryString(filter)}`,
      {
        method: method,
        headers: yayaAuthHeaders,
      }
    );

    return await handleResponse<PaginatedData<TxnI>>(res);
  } catch (error) {
    return defaultErrorHandler(error);
  }
};

export const getSearchTxns = async (
  filter: APIFilters
): Promise<ActionResponse<PaginatedData<TxnI>>> => {
  try {
    const method = "POST";
    const endpoint = "/api/en/transaction/search";
    const parsedBody = JSON.stringify({
      query: filter.search,
    });
    const yayaAuthHeaders = createYayaAuthHeaders({
      method,
      endpoint,
      body: parsedBody,
    });

    const res = await fetch(
      `${API_URL}/api/en/transaction/search?${toQueryString(filter)}`,
      {
        method: method,
        headers: yayaAuthHeaders,
        body: parsedBody,
      }
    );

    return await handleResponse<PaginatedData<TxnI>>(res);
  } catch (error) {
    return defaultErrorHandler(error);
  }
};
