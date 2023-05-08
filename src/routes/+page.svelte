<script lang="ts">
	const handleClick = async () => {
		const url = `/api`;
		const what = await fetch(url, {
			method: 'POST'
		})
			.then((res) => res.json())
			.then((data) => console.log(data));

		console.log('what: ', what);
	};
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
	<form action="#">
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
							rows="5"
							name="comment"
							id="comment"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Add your comment..."
						/>
					</div>
				</div>
				<div
					id="tabs-1-panel-2"
					class="-m-0.5 rounded-lg p-0.5"
					aria-labelledby="tabs-1-tab-2"
					role="tabpanel"
					tabindex="0"
				>
					<div class="border-b">
						<div class="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
							Preview content will render here.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-2 flex justify-end">
			<button
				type="submit"
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Search</button
			>
		</div>
	</form>
</div>
