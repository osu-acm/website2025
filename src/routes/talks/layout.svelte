<script lang="ts">
	import "../../syntax/catpuccin.css";
	import Slides from "$lib/Slides.svelte";
	let { children, title, author, desc, date, video, slides, slidesTitle } = $props();
	let parsedDate = new Date(date);
	let monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let videoEmbedLink = video
		? video.replaceAll(
				"www.youtube.com/watch?v=",
				"www.youtube-nocookie.com/embed/",
			)
		: undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={desc} />
</svelte:head>
<article class="w-full flex flex-col items-center">
	<header
		class="bg-acm-yellow text-white flex flex-col w-full lg:p-10 lg:px-20 p-5"
	>
		{#if video}
			<iframe
				src={videoEmbedLink}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				class="aspect-video w-full"
				allowfullscreen
			></iframe>
		{/if}
		{#if slides}
			<Slides src={slides} title={slidesTitle ?? `${title} slides`} />
		{/if}
		<h1 class="text-5xl font-extrabold mt-8">{title}</h1>
		<h3 class="text-2xl">By: {author}</h3>
		<h3 class="text-2xl">
			{monthNames[parsedDate.getMonth()]}
			{parsedDate.getDate()},
			{parsedDate.getFullYear()}
		</h3>
	</header>
	<div
		class="post-body prose prose-xl max-w-[50em] prose-headings:mt-0 p-5 lg:p-0 lg:py-8"
	>
		{@render children?.()}
	</div>
</article>

<style>
	.post-body:empty {
		display: none;
	}
</style>
