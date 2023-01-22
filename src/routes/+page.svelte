<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="text-3xl font-bold underline mb-2">Hi {data.user?.email ?? 'there'}!</h1>
<p>
	This is a minimal Svelte + Supabase + Tailwind starter template. Just add a .env file and you're
	ready to go.
</p>
