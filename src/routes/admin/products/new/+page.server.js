import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();

	let [categories] = await connection.execute('SELECT * FROM categories');

	return {
		categories: categories
	};
}

export const actions = {
	createProduct: async ({ request }) => {
		const formData = await request.formData();
        const uploadedImage = formData.get('uploadedImage');
		const { url } = await put('productImages/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN, addRandomSuffix: true});
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO products (name, description, category_id, price, image) VALUES (?, ?, ?, ?, ?)',
			[formData.get('name'), formData.get('description'), formData.get('categoryId'), formData.get('price'), url]
		);
		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	}
};
