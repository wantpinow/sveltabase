import '$lib/supabase';
// import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';
import authorized from './auth';

export const handle: Handle = async ({ event, resolve }) => {
	// const { session, supabaseClient } = await getSupabase(event);

	// event.locals.sb = supabaseClient;
	// event.locals.session = session;
	// event.locals.user = session?.user ?? null;

	// check authorization rules
	const allowed = await authorized(event);
	if (!allowed) {
		return Response.redirect(`${event.url.origin}/login`, 301);
	}

	console.log(event);
	return resolve(event);
};
