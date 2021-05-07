<script lang="ts">
	import TwitterSocial from '$lib/TwitterSocial/index.svelte';
</script>

<footer class=" text-white bg-[#23244B] border-t ">
	<div
		class="container flex  flex-row flex-wrap p-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap "
	>
		<div class="flex p-11 flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left ">
			<div class="w-full px-4 ">
				<nav class="mb-10 text-gray-400 list-none flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-20">
					<a>Country name</a>
					<a>Team</a>
					<a>About Us</a>
					<a>Contact us</a>
				</nav>
			</div>
			<div class="w-full px-4 lg:w-1/3 md:w-1/2">
				<a href="#" class="text-2xl font-bold text-white"> Coinhaven </a>
				<div class="flex flex-row pt-1 space-x-3">
					<TwitterSocial />
					<TwitterSocial />
					<TwitterSocial />
					<TwitterSocial />
					<TwitterSocial />
				</div>
			</div>
		</div>
	</div>

	<div class="items-center justify-center self-center text-center bg-[#141534]  mt-10 px-5 py-6">
		<p class="text-sm text-center text-gray-600 ">© 2021 coinhaven.com All rights reserved</p>
	</div>
</footer>
