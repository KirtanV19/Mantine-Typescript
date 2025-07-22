import type { AnyObjectSchema, ValidationError } from "yup";

// 🔧 Define your own Resolver type
export type Resolver<T> = (values: T) => Promise<{
  values: Partial<T>;
  errors: Record<keyof T | string, string>;
}>;

export function yupResolver<T>(schema: AnyObjectSchema) {
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

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
