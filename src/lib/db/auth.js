import { createConnection } from '$lib/db/mysql';
import bcrypt from 'bcrypt';

export let login = async (username, password) => {
	let connection = await createConnection();

	let [users] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);

	if (users.length === 0) {
		return null;
	}

	if (!(await bcrypt.compare(password, users[0].password_hash))) {
		return null;
	}

	const token = crypto.randomUUID();

	let expires = new Date();
	expires.setDate(expires.getDate() + 7);

	let [result] = await connection.execute(
		'UPDATE users SET session_token = ?, session_expiration = ? WHERE id = ?',
		[token, expires, users[0].id]
	);
	if (result.affectedRows === 0) {
		return null;
	}

	return token;
};

export let register = async (email, username, password) => {
	let connection = await createConnection();
	let hashedPassword = await hashPassword(password);

	let [users] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
	if (users.length > 0) {
		return { token: null, message: 'Email already in use' };
	}

	[users] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
	if (users.length > 0) {
		return { token: null, message: 'Username already in use' };
	}

	let [result] = await connection.execute(
		'INSERT INTO users (email, username, password_hash, role) VALUES (?, ?, ?, ?)',
		[email, username, hashedPassword, 'user']
	);

	const token = crypto.randomUUID();

	let expires = new Date();
	expires.setDate(expires.getDate() + 7);

	await connection.query(
		'UPDATE users SET session_token = ?, session_expiration = ? WHERE id = ?',
		[token, expires, result.insertId]
	);

	return {
		token: token,
		message: 'User created'
	};
};

let hashPassword = async (password) => {
	return await bcrypt.hash(password, 12);
};