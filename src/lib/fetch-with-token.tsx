"use server";

import { isJwtExpired } from "./tools";
import { redirect, RedirectType } from "next/navigation";

/**
 * Retrieves the authentication token from the cookies.
 *
 * @returns The authentication token if available, otherwise `undefined`.
 */
const getToken = async (): Promise<string | undefined> => {
  return "AccessToken";
};

/**
 * Fetches a resource with an authentication token.
 *
 * @param input The URL or the request object to fetch.
 * @param init The request options to use.
 * @returns The response of the request.
 * @throws {Error} If there is no valid authentication token.
 */
export const fetchWithToken = async (
  input: string | URL | Request,
  init?: RequestInit
): Promise<Response> => {
  const bearerToken: string | undefined = await getToken();

  if (!bearerToken) {
    redirect("/log-out", RedirectType.replace);
  }

  if (isJwtExpired(bearerToken)) {
    redirect("/log-out", RedirectType.replace);
  }

  if (!init) {
    return fetch(input);
  }

  // Add the authentication token to the request headers.
  init.headers = {
    ...init.headers,
    Authorization: `Bearer ${bearerToken}`,
  };

  // Perform the request.
  return fetch(input, init);
};
