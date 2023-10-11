import { z } from 'zod';

import idSchema from '../shared/idValidation';

const messageBodySchema = z.object({
  id: idSchema,
  text: z.string().trim().nonempty(),
  user: idSchema,
  date: z.coerce.date().optional().default(new Date())
});

export default messageBodySchema;
