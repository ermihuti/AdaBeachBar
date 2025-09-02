import { createConnection } from '$lib/db/mysql';

export async function load({ locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute(
		'SELECT p.*, c.name AS categoryName FROM products p LEFT JOIN categories c ON p.category_id = c.id');
	let [categories] = await connection.execute('SELECT * FROM categories');

	return {
		products: rows, 
		categories: categories
	};
}
