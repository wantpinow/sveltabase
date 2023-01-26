import type { RequestEvent } from '@sveltejs/kit';

const rules = [
	// ./
	(event: RequestEvent) => {
		return event.url.pathname === '/' && false;
	},
	// ./login
	(event: RequestEvent) => {
		return event.url.pathname === '/login' && event.locals.user === null;
	}
];

const authorized = async (event: RequestEvent) => {
	const res = await Promise.all(rules.map((r) => r(event)));
	return res.some((y) => y);
};

export default authorized;
