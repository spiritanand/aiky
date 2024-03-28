import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

const pool = new Pool({
  connectionString: "postgres://postgres:admin@0.0.0.0:5432/postgres",
});

const db = drizzle(pool, { schema });

export default db;
