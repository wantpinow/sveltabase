import { sb } from '$lib/supabase';
import type { PageLoad } from './$types';

export const load = (async () => {
	const usersResponse = await sb.rpc('get_all_users', {});
	const users = usersResponse.data ?? [];
	return {
		users: users
	};
}) satisfies PageLoad;
