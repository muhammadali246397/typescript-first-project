import dotenv from 'dotenv';
import path from 'path';

// dotenv.config({ path: path.join((process.cwd(), '.env')) });

dotenv.config({ path: path.join(process.cwd(), '.env') });
const pot = process.env.PORT;
console.log(pot);
const ur = process.env.DATABASE_URL;
console.log(ur);

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
