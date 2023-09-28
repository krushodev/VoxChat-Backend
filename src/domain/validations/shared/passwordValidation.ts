import { z } from 'zod';

const passwordSchema = z.string().nonempty().trim();

export default passwordSchema;
