import { z } from 'zod';

import idSchema from '../shared/idValidation';
import roomBodySchema from './roomBodyValidation';

const roomBodyUpdateSchema = z.object({
  id: idSchema,
  update: roomBodySchema
});

export default roomBodyUpdateSchema;
