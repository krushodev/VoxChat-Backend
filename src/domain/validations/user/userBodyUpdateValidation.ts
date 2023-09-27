import { z } from 'zod';

import idSchema from '../shared/idValidation.js';
import userBodySchema from './userBodyValidation.js';

const userBodyUpdateSchema = z.object({
  id: idSchema,
  update: userBodySchema
});

export default userBodyUpdateSchema;
