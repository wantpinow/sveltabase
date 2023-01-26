<!--  -->
<script lang="ts">
	import { sb } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	const updateUserAdmin = async (userId: string, value: string) => {
		if (value === 'true') {
			await sb.rpc('set_claim', {
				uid: userId,
				claim: 'claims_admin',
				value: true
			});
		} else {
			await sb.rpc('delete_claim', {
				uid: userId,
				claim: 'claims_admin'
			});
		}
	};
</script>

<h1 class="text-2xl font-bold underline mb-2">Manage Users</h1>
{#each data.users as user}
	<div class="flex justify-between">
		<p>{user.email}</p>
		<select
			value={user.raw_app_meta_data?.claims_admin ? 'true' : 'false'}
			disabled={user.email === data.user?.email}
			on:input={(e) => updateUserAdmin(user.id, e.currentTarget.value)}
		>
			<option value="true">Admin</option>
			<option value="false">User</option>
		</select>
	</div>
{/each}
