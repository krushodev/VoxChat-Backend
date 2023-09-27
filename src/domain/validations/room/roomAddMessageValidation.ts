import { z } from 'zod';
import idSchema from '../shared/idValidation';
import messageBodySchema from './messageBodyValidation';

const roomAddMessageSchema = z.object({
  id: idSchema,
  message: messageBodySchema
});

export default roomAddMessageSchema;
