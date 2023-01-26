<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let url: URL;
</script>

{#key url}
	<div in:fade={{ duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
		<slot />
	</div>
{/key}
