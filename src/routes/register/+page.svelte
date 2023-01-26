<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<form method="POST" class="grid grid-cols-1 gap-4">
	{#if form?.error}
		<p class="text-center text-red-600">{form?.error}</p>
	{/if}
	<input name="email" class="block" type="email" placeholder="Email" />
	<input name="password" class="block" type="password" placeholder="Password" />
	<input name="passwordConfirm" class="block" type="password" placeholder="Confirm Password" />
	<button type="submit" class="block"> Register </button>
</form>
