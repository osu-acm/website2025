<script lang="ts">
	const paths = import.meta.glob("/src/routes/talks/**/*.md", {
		eager: true,
	});
	const posts = [];
	for (const path in paths) {
		const file: any = paths[path];
		posts.push({
			...file.metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		});
	}
	posts.sort((a, b): number => {
		let a_date = new Date(a.date);
		let b_date = new Date(b.date);
		if (a_date.getDate() == b_date.getDate()) {
			return 0;
		} else if (a_date.getDate() < b_date.getDate()) {
			// b is newer therefore return positive
			return 1;
		} else {
			// a is newer therefore return negative
			return -1;
		}
	});
</script>

<div class="p-8">
	<h1 class="text-8xl">{"{talks}"}</h1>
	{#each posts as post}
		<p>{post.date} - <a href={post.href}>{post.title}</a></p>
	{/each}
</div>
