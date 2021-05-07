<script lang="ts">
	import type { ChartData } from '../../dtos';
	export let chart: ChartData;
</script>

<div class="bg-[#323362] p-6 pt-0 w-full rounded-lg">
	<div class="flex pl-1 p-7">
		<div class="flex flex-col flex-grow w-full text-white rounded-lg">
			<div class="flex w-full flex-grow ">
				<div class="flex">
					<span class="font-semibold">{chart?.name}</span>
				</div>
				<div class="justify-end flex-grow flex">
					<span class="text-green-400 font-bold">+{chart?.change}</span>
				</div>
			</div>
			<h2 class="pt-1 text-2xl font-semibold">{chart?.price}</h2>
			<h2 class="pt-1 text-md text-gray-300 ">Volume: {chart?.volume}</h2>
		</div>
		<div class="flex-1" />
	</div>
</div>
