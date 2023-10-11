import type { NextFunction, Request, Response } from 'express';
import type { ZodError } from 'zod';

const errorHandler = (err: Error | ZodError, req: Request, res: Response, next: NextFunction) => {
  if (err.message.includes('not found')) {
    return res.status(404).send({ status: 'error', error: err.message });
  } else if (err.message.includes('Incorrect' || 'has expired')) {
    return res.status(401).send({ status: 'error', error: err.message });
  } else if (err.message.includes('already exist')) {
    return res.status(400).send({ status: 'error', error: err.message });
  } else if (err?.name.includes('ZodError')) {
    return res.status(400).send({ status: 'error', error: (err as ZodError).issues });
  }

  res.status(500).send({ status: 'error', error: err.message ?? 'Error. Algo salió mal' });
};

export default errorHandler;
