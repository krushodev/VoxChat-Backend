import { z } from 'zod';

import emailSchema from '../shared/emailValidation';
import passwordSchema from '../shared/passwordValidation';

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});

export default loginSchema;
