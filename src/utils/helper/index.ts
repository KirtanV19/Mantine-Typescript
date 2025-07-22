import type { AnyObjectSchema, ValidationError } from "yup";

export interface LogError {
  (error: unknown): void;
}

export const logError: LogError = (error) => {
  console.error("Error:", error);
};

// Yup-Resolver
export type Resolver<T> = (values: T) => Promise<{
  values: Partial<T>;
  errors: Record<keyof T | string, string>;
}>;

export function yupSyncResolver<T>(schema: AnyObjectSchema) {
  return (values: T) => {
    try {
      schema.validateSync(values, { abortEarly: false, stripUnknown: true });
      return {};
    } catch (err) {
      const validationError = err as ValidationError;
      return validationError.inner.reduce(
        (acc: Record<string, string>, curr) => {
          if (curr.path && !acc[curr.path]) {
            acc[curr.path] = curr.message;
          }
          return acc;
        },
        {}
      );
    }
  };
}

// Capitalize
export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// API-handling
export const apiAsyncHandler = async (
  handleTry: () => Promise<unknown>,
  handleCatch?: (error: unknown) => unknown,
  handleFinally?: () => void
) => {
  try {
    const response = await handleTry();
    return response;
  } catch (error) {
    logError(error);
    if (handleCatch && typeof handleCatch === "function") {
      return handleCatch(error);
    }
    return null;
  } finally {
    if (handleFinally && typeof handleFinally === "function") {
      handleFinally();
    }
  }
};

export const errorHandler = (
  handleTry: () => unknown,
  handleCatch?: (error: unknown) => unknown,
  handleFinally?: () => void
) => {
  try {
    const response = handleTry();
    return response;
  } catch (error) {
    logError(error);
    if (handleCatch && typeof handleCatch === "function") {
      return handleCatch(error);
    }
    return null;
  } finally {
    if (handleFinally && typeof handleFinally === "function") {
      handleFinally();
    }
  }
};
