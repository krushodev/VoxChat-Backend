import { z } from 'zod';

import emailSchema from '../shared/emailValidation';
import idSchema from '../shared/idValidation';
import passwordSchema from '../shared/passwordValidation';

const userBodySchema = z.object({
  id: idSchema.optional(),
  username: z.string().nonempty().max(35).trim(),
  email: emailSchema,
  password: passwordSchema
});

export default userBodySchema;