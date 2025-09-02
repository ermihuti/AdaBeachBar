import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM categories');

	return {
		categories: rows
	};
}

export const actions = {
	createCategory: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute('INSERT INTO categories (name) VALUES (?)', [
			formData.get('name')
		]);
		if (result.affectedRows) {
			redirect(303, '/admin/categories');
		}
	}
};
