<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { supabaseClient } from '$lib/db';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';

	onMount(() => {
		// subscribe to supabase client auth changes
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	// page data
	export let data: PageData;

	const logout = async () => {
		await supabaseClient.auth.signOut();
		goto('/');
	};
</script>

<div class="p-4">
	<nav class="flex justify-between border-b p-2 mb-4">
		<a href="/">sveltabase</a>
		{#if data.user}
			<p class="cursor-pointer" on:click={logout} on:keydown={logout}>logout</p>
		{:else}
			<a href="/login">login</a>
		{/if}
	</nav>
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
