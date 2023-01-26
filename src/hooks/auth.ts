import type { RequestEvent } from '@sveltejs/kit';

const rules = [
	// ./
	(event: RequestEvent) => {
		return event.url.pathname === '/';
	},
	// ./login
	(event: RequestEvent) => {
		return event.url.pathname === '/login' && event.locals.user === null;
	},
	// ./register
	(event: RequestEvent) => {
		return event.url.pathname === '/register' && event.locals.user === null;
	},
	// ./admin/users
	(event: RequestEvent) => {
		return event.url.pathname === '/admin/users' && event.locals.user?.app_metadata?.claims_admin;
	}
];

const authorized = async (event: RequestEvent) => {
	const res = await Promise.all(rules.map((r) => r(event)));
	return res.some((y) => y);
};

export default authorized;
