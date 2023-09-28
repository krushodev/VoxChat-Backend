import { z } from 'zod';

import idSchema from '../shared/idValidation';
import userBodySchema from './userBodyValidation';

const userBodyUpdateSchema = z.object({
  id: idSchema,
  update: userBodySchema
});

export default userBodyUpdateSchema;
