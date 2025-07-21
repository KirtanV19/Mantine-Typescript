import type { AnyObjectSchema, ValidationError } from "yup";

// 🔧 Define your own Resolver type
export type Resolver<T> = (values: T) => Promise<{
  values: Partial<T>;
  errors: Record<keyof T | string, string>;
}>;

export function yupResolver<T>(schema: AnyObjectSchema): Resolver<T> {
  return async (values: T) => {
    try {
      const parsed = await schema.validate(values, {
        abortEarly: false,
        stripUnknown: true,
      });

      return {
        values: parsed,
        errors: {} as Record<string | keyof T, string>,
      };
    } catch (err) {
      const validationError = err as ValidationError;

      const errors = validationError.inner.reduce(
        (acc: Record<string, string>, curr) => {
          if (curr.path && !acc[curr.path]) {
            acc[curr.path] = curr.message;
          }
          return acc;
        },
        {}
      );

      return {
        values: {} as T,
        errors: errors as Record<string | keyof T, string>,
      };
    }
  };
}

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
