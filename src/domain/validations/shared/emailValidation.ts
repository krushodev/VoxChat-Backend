import { z } from 'zod';

const emailSchema = z.string().email().nonempty().toLowerCase().trim();

export default emailSchema;
