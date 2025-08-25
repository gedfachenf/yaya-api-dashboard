import { ActionResponse, ErrorResponse } from "@/interfaces/app";

export const handleResponse = async <T>(
  res: Response
): Promise<ActionResponse<T>> => {
  const data = await res.json();
  if (!res.ok) {
    return {
      success: false,
      statusCode: res.status,
      data,
    };
  }
  return {
    success: true,
    statusCode: res.status,
    data,
  };
};

export const defaultErrorHandler = <T>(error: unknown): ActionResponse<T> => {
  if (error instanceof Error && error.message === "NEXT_REDIRECT") {
    throw error;
  }

  return {
    success: false as const,
    statusCode: 700,
    data: error as ErrorResponse,
  };
};
