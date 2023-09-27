import { z } from 'zod';

import idSchema from '../shared/idValidation';
import messageBodySchema from './messageBodyValidation';

const roomBodySchema = z.object({
  id: idSchema.optional(),
  name: z.string().nonempty().max(35).trim(),
  topics: z.string().nonempty().max(15).trim().toLowerCase().array(),
  messages: messageBodySchema.array().optional(),
  members: z
    .object({
      user: idSchema
    })
    .array(),
  isPrivate: z.boolean().optional(),
  password: z.string().trim().optional()
});

export default roomBodySchema;
