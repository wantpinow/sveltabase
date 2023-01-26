<script lang="ts">
	import type { ActionData, PageData } from './$types';
	export let form: ActionData;
</script>

<form method="POST" class="grid grid-cols-1 gap-4">
	{#if form?.error}
		<p class="text-center text-red-600">{form?.error}</p>
	{/if}
	<input name="email" class="block" type="email" placeholder="Email" />
	<input name="password" class="block" type="password" placeholder="Password" />
	<button type="submit" class="block"> Login </button>
</form>
