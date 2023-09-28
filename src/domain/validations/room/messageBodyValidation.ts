import { z } from 'zod';

import idSchema from '../shared/idValidation';

const messageBodySchema = z.object({
  id: idSchema.optional(),
  text: z.string().trim().nonempty(),
  user: idSchema,
  date: z.date().optional().default(new Date())
});

export default messageBodySchema;
