import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export const actions = {
	editProduct: async ({ request, params }) => {
		const formData = await request.formData();
        const uploadedImage = formData.get('uploadedImage');
		const { url } = await put('productImages/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN, addRandomSuffix: true});
		const { id } = params;
        console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
  'UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?',
  [formData.get('name'), formData.get('description'), formData.get('price'), url, id]
);

		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	}
};
