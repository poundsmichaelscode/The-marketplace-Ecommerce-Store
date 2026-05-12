import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject } from 'zod';
export const validate = (schema: AnyZodObject) => (req: Request, _res: Response, next: NextFunction) => {
  const result = schema.safeParse({ body: req.body, query: req.query, params: req.params });
  if (!result.success) return next(Object.assign(new Error(result.error.issues.map(i=>i.message).join(', ')), { statusCode: 400, code: 'VALIDATION_ERROR' }));
  Object.assign(req, result.data);
  next();
};
