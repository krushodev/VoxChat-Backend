import { z } from 'zod';

import emailSchema from '../shared/emailValidation';
import idSchema from '../shared/idValidation';
import passwordSchema from '../shared/passwordValidation';

const userBodySchema = z.object({
  id: idSchema.optional(),
  username: z.string().nonempty().max(35).trim(),
  email: emailSchema,
  image: z.string().trim().or(z.null()).optional().default(null),
  password: passwordSchema,
  rooms: z
    .object({
      room: idSchema,
      isOwner: z.boolean()
    })
    .array()
    .default([])
});

export default userBodySchema;
