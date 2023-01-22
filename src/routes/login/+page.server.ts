import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		// parse form
		const { request } = event;
		const { supabaseClient } = await getSupabase(event);
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		// attempt sign in
		const { error } = await supabaseClient.auth.signInWithPassword({
			email,
			password
		});

		// invalid credentials error
		if (error?.status === 400) {
			return fail(400, {
				error: 'Invalid credentials.',
				values: {
					email
				}
			});
		}

		// any other error
		if (error !== null) {
			return fail(500, {
				error: 'Server error. Try again later.',
				values: {
					email
				}
			});
		}

		// redirect home
		throw redirect(303, '/');
	}
};
