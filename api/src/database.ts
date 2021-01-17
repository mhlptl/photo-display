import {Pool} from "pg";

const pool: Pool = new Pool({
	user: process.env.PGUSER || 'postgres',
	password: process.env.PGPASSWORD || 'postgres',
	database: 'photodisplay',
	port: parseInt(process.env.PGPORT || '5432'),
	host: process.env.PGHOST || 'localhost'
});

export {pool};
