import crypto from "crypto";
import { YAYA_API_KEY, YAYA_API_SECRET } from "./env";

interface AuthParams {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  body?: unknown;
}

interface YayaAuthHeaders {
  [key: string]: string;
  "YAYA-API-KEY": string;
  "YAYA-API-TIMESTAMP": string;
  "YAYA-API-SIGN": string;
}

/**
 * Creates YAYA API authentication headers.
 */
export function createYayaAuthHeaders({
  method,
  endpoint,
  body,
}: AuthParams): YayaAuthHeaders {
  const apiKey = YAYA_API_KEY;
  const apiSecret = YAYA_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error(
      "Missing YAYA_API_KEY or YAYA_API_SECRET in environment variables"
    );
  }

  // 1. Create timestamp (in seconds)
  const timestamp = Math.floor(Date.now() / 1000).toString();

  // 2. Prepare pre-hash string: timestamp + method + endpoint + body
  const bodyString = body ? body : "";
  const preHash = `${timestamp}${method.toUpperCase()}${endpoint}${bodyString}`;

  // 3. Create HMAC-SHA256 using API secret
  const hmac = crypto.createHmac("sha256", apiSecret);
  hmac.update(preHash);

  // 4. Base64 encode the HMAC result
  const signature = hmac.digest("base64");

  return {
    "YAYA-API-KEY": apiKey,
    "YAYA-API-TIMESTAMP": timestamp,
    "YAYA-API-SIGN": signature,
  };
}
