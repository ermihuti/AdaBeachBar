import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export const actions = {
	createProduct: async ({ request }) => {
		const formData = await request.formData();
        const uploadedImage = formData.get('uploadedImage');
		const { url } = await put('productImages/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN});
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
			[formData.get('name'), formData.get('description'), formData.get('price'), url]
		);
		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	}
};
