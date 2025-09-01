import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {

	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM products');

	return {
		products: rows
	};
}

export const actions = {
	deleteProduct: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		try {
			await connection.execute('DELETE FROM products WHERE id = ?', [id]);
		} catch (e) {
			console.error(e);
			return {
				success: false,
				message: 'Deletion not possible!'
			};
		}
	}
};
