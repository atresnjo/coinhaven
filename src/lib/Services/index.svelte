<script>
	import Logo from './first_logo.svg';
	import BtcLogo from './second_logo.svg';
</script>

<div class="flex container pt-52 flex-col">
	<h2 class="mb-1 text-4xl pr-20 font-bold text-[#070751] ">Services</h2>
	<section class="text-gray-700 ">
		<div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
			<div
				class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 "
			>
				<h1
					class="mb-8 text-2xl font-semibold tracking-tighter text-left text-black lg:text-4xl title-font"
				>
					Crypto exchange
				</h1>
				<div class="flex-grow">
					<h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-400 w-full title-font">
						Trade and swap crypto assets with ease.
					</h2>
				</div>
			</div>
			<div class="w-full p-4 lg:w-5/6 ">
				<form
					class="text-gray-400 w-full space-y-6 flex-col flex-colm-4 bg-gradient-to-b from-[#C0DAFD] to-[#EFFDFE] p-10 flex"
				>
					<div class="flex space-y-1 flex-col">
						<span class="">I have</span>
						<input
							class="rounded-l-lg bg-gray-100 p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200"
							placeholder="Enter amount"
						/>
					</div>
					<div class="flex space-y-1 flex-col">
						<span>I get</span>
						<input
							class="rounded-l-lg bg-gray-100 p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 "
							placeholder="Enter amount"
						/>
					</div>
					<div class="flex justify-center items-center flex-">
						<button
							class="uppercase w-3/6  bg-[#4E51FF] hover:bg-blue-700 text-white font-bold py-3 shadow shadow-lg px-4 rounded"
						>
							Exchange
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
	<section class="text-gray-700 ">
		<div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
			<div
				class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 "
			>
				<img height="400" width="400" src={Logo} />
			</div>
			<div
				class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 "
			>
				<h1
					class="mb-8 text-2xl font-semibold tracking-tighter text-left text-black lg:text-4xl title-font"
				>
					EURO wallet and debit card.
				</h1>
				<h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-400 w-full title-font">
					Get your personalized IBAN wallet + a Debit card.
				</h2>
			</div>
		</div>
	</section>
	<section class="text-gray-700 ">
		<div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
			<div
				class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 "
			>
				<h1
					class="mb-8 text-2xl font-semibold tracking-tighter text-left text-black lg:text-4xl title-font"
				>
					Wallets
				</h1>
				<h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-400 w-full title-font">
					Operate your very own Coinhaven FIAT and cryptocurreny wallets.
				</h2>
			</div>
			<div
				class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 "
			>
				<img height="540000" width="400" src={BtcLogo} />
			</div>
		</div>
	</section>
</div>
