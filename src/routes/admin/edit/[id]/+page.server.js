import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export async function load({ locals, params }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [categories] = await connection.execute('SELECT * FROM categories');
	let [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [params.id]);

	return {
		categories: categories,
		product: product[0]
	};
}

export const actions = {
	editProduct: async ({ request, params }) => {
		const formData = await request.formData();
		const { id } = params;

		let url = null;
		const uploadedImage = formData.get('uploadedImage');
		if (uploadedImage && uploadedImage.size > 0) {
			const uploaded = await put(
				'productImages/' + uploadedImage.name,
				uploadedImage,
				{ access: "public", token: BLOB_READ_WRITE_TOKEN, addRandomSuffix: true }
			);
			url = uploaded.url;
		}

		const connection = await createConnection();
		await connection.execute(
			`UPDATE products 
			 SET name = COALESCE(NULLIF(?, ''), name),
			     description = COALESCE(NULLIF(?, ''), description),
			     category_id = COALESCE(NULLIF(?, ''), category_id),
			     price = COALESCE(NULLIF(?, ''), price),
			     image = COALESCE(?, image)
			 WHERE id = ?`,
			[
				formData.get('name'),
				formData.get('description'),
				formData.get('categoryId'),
				formData.get('price'),
				url,
				id
			]
		);

		redirect(303, '/admin');
	}
};