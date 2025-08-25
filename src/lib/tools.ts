import { APIFilters, TokenDecoded } from "@/interfaces/app";
import { decodeJwt } from "jose";

export const isJwtExpired = (token?: string) => {
  if (!token) return true;
  const decoded: TokenDecoded = decodeJwt(token);
  return decoded?.exp !== undefined && decoded.exp < Date.now() / 1000;
};

export function toQueryString(filters: APIFilters): string {
  const combinedFilters = {
    p: filters.page,
    limit: filters.limit,
    search: filters.search,
  };

  const params = new URLSearchParams();

  Object.entries(combinedFilters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === "object") {
        params.set(key, JSON.stringify(value)); // Handle nested objects as JSON strings
      } else {
        params.set(key, value.toString());
      }
    }
  });

  return params.toString();
}

export const parseToNumber = (value?: unknown) => {
  if (typeof value === "string") {
    const parsedValue = Number(value);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }
  return value;
};

export function parseNumber(value: unknown): number | undefined {
  if (value === undefined || value === null) return undefined;

  // If it's already a number
  if (typeof value === "number") return value;

  // Handle string input (either JSON or single value)
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      if (typeof parsed === "number") {
        return parsed;
      }
    } catch {
      const parsed = Number(value);
      if (isNaN(parsed)) return undefined;
      return parsed;
    }
  }

  // Handle single number case
  const parsed = Number(value);
  if (isNaN(parsed)) return undefined;
  return parsed;
}

// Utility: format number with commas
export const formatPrice = (value: number) => value.toLocaleString();

// Utility: remove commas and convert to number
export const parsePrice = (value: string) =>
  Number(value.replace(/,/g, "").replace(/[^\d]/g, ""));

export function humanizeEnumValue(value: string): string {
  return value
    .split("_") // Split by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join with spaces
}

export function textEllipsis(
  text: string,
  maxLength: number,
  position: "start" | "end" | "center" = "center"
) {
  if (text.length <= maxLength) return text;

  const ellipsis = "...";
  const ellipsisLen = ellipsis.length;

  if (maxLength <= ellipsisLen) {
    // Not enough room for text + ellipsis
    return text.slice(0, maxLength);
  }

  if (position === "start") {
    return ellipsis + text.slice(text.length - (maxLength - ellipsisLen));
  }

  if (position === "end") {
    return text.slice(0, maxLength - ellipsisLen) + ellipsis;
  }

  // position === "center"
  const keepChars = maxLength - ellipsisLen;
  const startLen = Math.ceil(keepChars / 2);
  const endLen = Math.floor(keepChars / 2);

  return text.slice(0, startLen) + ellipsis + text.slice(text.length - endLen);
}

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delay: number
) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}
