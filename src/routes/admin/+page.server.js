import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
    const { id } = params;
	let [rows] = await connection.execute(
		'SELECT p.*, c.name AS categoryName FROM products p LEFT JOIN categories c ON p.category_id = c.id'
	);
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
