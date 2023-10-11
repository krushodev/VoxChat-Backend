import { z } from 'zod';
import idSchema from '../shared/idValidation';

const updateUserImageSchema = z.object({
  id: idSchema,
  image: z.string().nonempty().min(15)
});

export default updateUserImageSchema;
