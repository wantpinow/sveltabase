<script>
	import { page } from '$app/stores';
</script>

<div class="text-red-500 text-center text-lg">Error: {$page.error?.message}</div>
