<script lang="ts">
	let input = ``;
	let isLoading = false;
	let output = ``;

	const handleClick = async () => {
		isLoading = true;

		const url = `/api`;
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ input })
		})
			.then((res) => res.json())
			.then((res) => res?.result);

		isLoading = false;
		output = response;

		console.log(response);
	};
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
	<form on:submit|preventDefault={handleClick}>
		<div>
			<div class="mt-2">
				<div
					id="tabs-1-panel-1"
					class="-m-0.5 rounded-lg p-0.5"
					aria-labelledby="tabs-1-tab-1"
					role="tabpanel"
					tabindex="0"
				>
					<label for="comment" class="sr-only">Comment</label>
					<div>
						<textarea
							bind:value={input}
							rows="5"
							name="comment"
							id="comment"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Add your comment..."
						/>
					</div>
				</div>

				{#if output && !isLoading}
					<div
						id="tabs-1-panel-2"
						class="-m-0.5 rounded-lg p-0.5"
						aria-labelledby="tabs-1-tab-2"
						role="tabpanel"
						tabindex="0"
					>
						<div class="border-b">
							<div class="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
								{output}
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>

		{#if isLoading}
			<div class="mt-2 flex justify-end">
				<button
					type="button"
					class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					disabled
				>
					<svg
						class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042.546 5.914 1.545 8.545l4.45-1.254z"
						/>
					</svg>
					Loading
				</button>
			</div>
		{:else}
			<div class="mt-2 flex justify-end">
				<button
					type="submit"
					class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Search</button
				>
			</div>
		{/if}
	</form>
</div>
