<script lang="ts">
	const paths = import.meta.glob("/src/routes/talks/**/*.md", {
		eager: true,
	});

	const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
	const dateFormatter = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	type Post = {
		date: string;
		href: string;
		title: string;
		author: string;
		desc: string;
		video?: string;
	};

	const buckets: { [id: string]: Post[] } = {};

	for (const path in paths) {
		const file: any = paths[path];
		const metadata = file.metadata;

		if (!metadata?.date || !metadata?.title) {
			continue;
		}

		let post = {
			...metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		};
		let date = new Date(metadata.date);
		let month = monthFormatter.format(date);
		let year: Number = date.getFullYear();
		if (Object.hasOwn(buckets, `${month} ${year}`)) {
			buckets[`${month} ${year}`].push(post);
		} else {
			buckets[`${month} ${year}`] = [post];
		}
	}

	for (const key in buckets) {
		buckets[key].sort((a, b): number => {
			let a_date = new Date(a.date);
			let b_date = new Date(b.date);
			return b_date.getTime() - a_date.getTime();
		});
	}

	let keys = Object.keys(buckets).toSorted((a: string, b: string): number => {
		let a_date = new Date(a);
		let b_date = new Date(b);
		return b_date.getTime() - a_date.getTime();
	});
</script>

<svelte:head>
	<title>Talks | acm@osu</title>
	<meta
		name="description"
		content="Talks, workshops, and technical writeups from acm@osu."
	/>
</svelte:head>

<article class="min-h-screen bg-white">
	<header class="bg-acm-yellow px-8 py-16 text-white md:px-12">
		<div class="mx-auto max-w-6xl">
			<p class="mb-3 font-mono text-xl">workshops / talks / writeups</p>
			<h1 class="font-heading text-7xl font-extrabold md:text-8xl">
				{"{talks}"}
			</h1>
			<p class="mt-6 max-w-3xl font-mono text-2xl">
				Catch up on ACM workshops, company talks, career prep, and
				technical sessions.
			</p>
		</div>
	</header>

	<section class="px-8 py-12 md:px-12">
		<div class="mx-auto max-w-6xl">
			{#if keys.length === 0}
				<div class="bg-acm-orange p-6 font-mono text-xl text-white">
					No published talk posts yet.
				</div>
			{/if}

			<div class="space-y-12">
				{#each keys as k}
					<section>
						<h2
							class="mb-6 font-heading text-5xl font-extrabold text-acm-orange"
						>
							{k}
						</h2>
						<div class="grid gap-6 lg:grid-cols-2">
							{#each buckets[k] as post}
								<a
									href={post.href}
									class="block bg-white p-6 transition hover:-translate-y-1 hover:bg-yellow-50"
								>
									<p
										class="font-mono text-sm font-bold text-acm-blue"
									>
										{dateFormatter.format(
											new Date(post.date),
										)}
									</p>
									<h3
										class="mt-2 font-heading text-3xl font-extrabold text-black"
									>
										{post.title}
									</h3>
									{#if post.desc}
										<p
											class="mt-3 font-mono text-lg text-black"
										>
											{post.desc}
										</p>
									{/if}
									{#if post.author}
										<p
											class="mt-4 font-mono text-sm font-bold text-acm-orange"
										>
											By {post.author}
										</p>
									{/if}
								</a>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</section>
</article>
