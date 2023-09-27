import { z } from 'zod';

const idSchema = z.string().nonempty().uuid().trim();

export default idSchema;
