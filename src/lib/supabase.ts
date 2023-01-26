import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_PRODUCTION,
	PUBLIC_SUPABASE_URL
} from '$env/static/public';
import { createClient } from '@supabase/auth-helpers-sveltekit';

let api_url;
let anon_key;
if (PUBLIC_SUPABASE_PRODUCTION === 'true') {
	api_url = PUBLIC_SUPABASE_URL;
	anon_key = PUBLIC_SUPABASE_ANON_KEY;
} else {
	api_url = 'http://localhost:54321';
	anon_key =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs';
}

export const sb = createClient(api_url, anon_key);
