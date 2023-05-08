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

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<button
	on:click={handleClick}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button
>
