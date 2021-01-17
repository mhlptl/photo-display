declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: string;
		PGHOST: string;
		PGUSER: string;
		PGDATABASE: string;
		PGPASSWORD: string;
		PGPORT: string;
	}
}
