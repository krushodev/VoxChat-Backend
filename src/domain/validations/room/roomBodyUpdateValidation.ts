import { z } from 'zod';

import idSchema from '../shared/idValidation.js';
import roomBodySchema from './roomBodyValidation.js';

const roomBodyUpdateSchema = z.object({
  id: idSchema,
  update: roomBodySchema
});

export default roomBodyUpdateSchema;
