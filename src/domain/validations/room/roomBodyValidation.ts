import { z } from 'zod';

import idSchema from '../shared/idValidation';
import messageBodySchema from './messageBodyValidation';
import passwordSchema from '../shared/passwordValidation';

const roomBodySchema = z.object({
  id: idSchema.optional(),
  name: z.string().nonempty().max(40).trim(),
  topics: z.string().nonempty().max(15).trim().toLowerCase().array(),
  messages: messageBodySchema.array().optional().default([]),
  members: z
    .object({
      user: idSchema
    })
    .array(),
  owner: idSchema,
  isPrivate: z.boolean().optional().default(false),
  password: passwordSchema.optional().or(z.null()).default(null)
});

export default roomBodySchema;
