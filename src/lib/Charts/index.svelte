<script lang="ts">
	import ChartsItem from '$lib/ChartsItem/index.svelte';
	import { chartData } from '../../stores/charts';	
</script>

<div class="md:pl-60 items-center  justify-center flex">
	<div class="md:absolute flex items-center justify-center">
		<div class="md:grid md:grid-cols-5 md:gap-4 space-y-4 md:space-y-0 mt-4">
			{#each $chartData as chart}
				<ChartsItem {chart} />
			{/each}
		</div>
	</div>
</div>
