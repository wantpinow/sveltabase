import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import type { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		// parse form
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const passwordConfirm = formData.get('passwordConfirm') as string;

		// errors

		// email not found
		if (!email) {
			return fail(400, {
				error: 'Email required.'
			});
		}

		// password not found
		if (!password) {
			return fail(400, {
				error: 'Password required.'
			});
		}

		// password confirm not found
		if (!passwordConfirm) {
			return fail(400, {
				error: 'Password confirmation required.'
			});
		}

		// invalid email
		const emailRegex = new RegExp(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Supplied email is invalid.'
			});
		}

		// passwords don't match
		if (password !== passwordConfirm) {
			return fail(400, {
				error: 'Passwords must match.'
			});
		}

		// password not strong enough (8 characters, one symbol, one letter, one number)
		const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[0-9]).{8,}$/);
		if (!passwordRegex.test(password)) {
			return fail(400, {
				error:
					'Password must contain at least 8 characters, at least one letter, and at least one number.'
			});
		}

		// attempt sign up
		const { error } = await locals.sb.auth.signUp({
			email,
			password
		});

		// throw error
		if (error !== null) {
			return fail(error.status ?? 500, {
				error: error.message
			});
		}

		// redirect home
		throw redirect(303, '/');
	}
};
// test1234
