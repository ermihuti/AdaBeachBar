import { createConnection } from '$lib/db/mysql';

export async function load({ locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM products');

	return {
		products: rows
	};
}
