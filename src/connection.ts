import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://postgres:2080@localhost:5432/hospitalscans");
