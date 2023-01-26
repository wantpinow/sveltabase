// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import type { Session, User } from '@supabase/supabase-js';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
			user: User | null;
		}
		// interface PageData {}
		// interface Platform {}

		interface Database {
			public: {
				Tables: {
					foobar: {
						Row: {
							id: string;
							created_at: string | null;
							foobar: string | null;
						};
						Insert: {
							id: string;
							created_at?: string | null;
							foobar?: string | null;
						};
						Update: {
							id?: string;
							created_at?: string | null;
							foobar?: string | null;
						};
					};
				};
				Views: {
					[_ in never]: never;
				};
				Functions: {
					delete_claim: {
						Args: { uid: string; claim: string };
						Returns: string;
					};
					get_all_users: {
						Args: Record<PropertyKey, never>;
						Returns: unknown;
					};
					get_claim: {
						Args: { uid: string; claim: string };
						Returns: Json;
					};
					get_claims: {
						Args: { uid: string };
						Returns: Json;
					};
					get_my_claim: {
						Args: { claim: string };
						Returns: Json;
					};
					get_my_claims: {
						Args: Record<PropertyKey, never>;
						Returns: Json;
					};
					is_claims_admin: {
						Args: Record<PropertyKey, never>;
						Returns: boolean;
					};
					set_claim: {
						Args: { uid: string; claim: string; value: Json };
						Returns: string;
					};
				};
				Enums: {
					[_ in never]: never;
				};
			};
		}
	}
}

export {};
