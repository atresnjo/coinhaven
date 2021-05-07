<script lang="ts">
	import Hero from '$lib/Hero/index.svelte';
	import Charts from '$lib/Charts/index.svelte';
	import Services from '$lib/Services/index.svelte';
	import Advantage from '$lib/Advantage/index.svelte';
	import Roadmap from '$lib/Roadmap/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Hero />
	<Charts />
	<Services />
	<Advantage />
	<Roadmap />
</section>

<style style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
