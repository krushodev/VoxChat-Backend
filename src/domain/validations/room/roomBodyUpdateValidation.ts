import { z } from 'zod';

import idSchema from '../shared/idValidation.js';
import userBodySchema from '../user/userBodyValidation.js';

const roomBodyUpdateSchema = z.object({
  id: idSchema,
  update: userBodySchema
});

export default roomBodyUpdateSchema;
