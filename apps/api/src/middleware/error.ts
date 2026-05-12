import type { ErrorRequestHandler } from 'express';
import { AppError } from '../utils/AppError.js';
import { logger } from '../config/logger.js';
export const notFound = (req:any, _res:any, next:any) => next(new AppError(404, `Route not found: ${req.method} ${req.originalUrl}`, 'NOT_FOUND'));
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = err instanceof AppError ? err.statusCode : 500;
  if (status >= 500) logger.error(err);
  res.status(status).json({ success: false, message: err.message || 'Internal server error', code: err.code || 'SERVER_ERROR' });
};
