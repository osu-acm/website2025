<script lang="ts">
	let { src, title = "Slides" } = $props<{
		src: string;
		title?: string;
	}>();
</script>

<div class="not-prose my-8 w-full overflow-hidden bg-white shadow-xl">
	<div
		class="flex flex-col gap-3 bg-acm-blue p-4 font-mono text-white md:flex-row md:items-center md:justify-between"
	>
		<p class="text-lg font-bold">{title}</p>
		<a
			href={src}
			target="_blank"
			rel="noreferrer"
			class="bg-acm-orange px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-black"
		>
			Open slides
		</a>
	</div>
	<iframe src={src} title={title} class="aspect-video w-full bg-white"></iframe>
</div>
