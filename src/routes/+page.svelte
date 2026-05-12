<script lang="ts">
	import { getPosts } from "$lib/get_posts";
	let about_str =
		"At ACM we prepare the next generation of top tier engineers, builders, and developers";
	let about_str_rendered = "";
	let i = 0;
	let delay = 35;
	function timeoutFn() {
		if (i < about_str.length) {
			i++;
			about_str_rendered = about_str.slice(0, i);
			setTimeout(timeoutFn, delay);
		}
	}
	setTimeout(timeoutFn, delay);

	let posts = getPosts();
	console.log(posts);
	let last3Posts =
		posts.length >= 3 ? posts.slice(0, 4) : posts.slice(0, posts.length);
	console.log(last3Posts);
</script>

<svelte:head>
	<title>acm@osu</title>
</svelte:head>

<div class="h-[40vh] md:h-[60vh] lg:h-[80vh] landing">
	<div class="flex flex-col items-center justify-center relative h-full">
		<p class="lowercase text-3xl lg:text-7xl/[1.3] max-w-[80%] font-mono">
			<span class="bg-black typewriter"
				>{@html about_str_rendered}<span class="cursor animate-pulse"
				></span></span
			>
		</p>

		<div
			class="hidden sm:flex items-center justify-center font-extrabold gap-4 text-4xl absolute bottom-8 left-0 right-0"
		>
			<a href="#learn" class="bg-black text-white hover:text-gray-400"
				>{"{learn}"}</a
			>
			<a href="#icpc" class="bg-black text-white hover:text-gray-400"
				>{"{icpc}"}</a
			>
			<a href="#career" class="bg-black text-white hover:text-gray-400"
				>{"{career}"}</a
			>
		</div>
	</div>
	<!--<video class="video" playsinline autoplay loop muted>
		<source src="/promo.mp4" type="video/mp4" />
	</video>-->
	<img class="video" src="images/8.jpg" />
</div>

<div class="bg-acm-orange lg:flex p-10 gap-8" id="learn">
	<div class="text-white lg:w-1/2">
		<h1
			class="mb-8 whitespace-nowrap font-heading text-[clamp(2.25rem,12vw,6rem)] font-extrabold leading-none"
		>
			{"{learn}"}
		</h1>
		<p class="text-2xl font-mono mb-4">
			acm@osu is a student-run club that fosters a community of passionate
			engineers. We host a number of different events throughout each term
			ranging from career prep to social hours. Additionally, we also
			supplement the learning of many early computer science educations
			with hands-on support.
		</p>
		<h3 class="text-4xl font-heading font-extrabold">
			meetings: <br />thursdays @ 6pm KEC 1001
		</h3>
	</div>
	<!--<div class="lg:w-1/2">
		<div class="w-full p-8 lg:p-0 aspect-video">
			<img src="images/7.jpg" />
		</div>
	</div>-->
	<div class="lg:w-1/2">
		<h3 class="text-white text-6xl font-extrabold mb-8">recent talks</h3>
		<div class="bg-white font-mono text-2xl p-4">
			{#each last3Posts as post}
				<div class="flex items-center gap-2">
					<div>
						<h4>
							<a
								href={post.href}
								class="underline hover:font-bold"
								>{post.title}</a
							>
						</h4>
						<p class="text-xl">
							{post.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="bg-acm-yellow lg:flex p-10 gap-8" id="icpc">
	<div class="text-white lg:w-1/2">
		<div class="p-8 lg:p-0 w-full aspect-video">
			<img src="icpc-images/3.jpg" />
		</div>
	</div>
	<div class="text-white lg:w-1/2">
		<h1
			class="mb-8 whitespace-nowrap font-heading text-[clamp(2.25rem,12vw,6rem)] font-extrabold leading-none"
		>
			{"{icpc}"}
		</h1>
		<p class="text-2xl font-mono mb-4">
			Whether you're an experienced competitive programmer or just wanting
			to improve your coding skills, we've got something for you! We meet
			weekly for casual problem solving practice, with the goal of
			competing at ICPC (International Collegiate Programming Contest).
		</p>
		<h3 class="text-4xl font-heading font-extrabold mt-6">
			meetings: <br />tuesdays @ 6pm KEC 1003
		</h3>
	</div>
</div>

<div class="bg-acm-orange lg:flex p-10 gap-8" id="career">
	<div class="lg:w-1/2 text-white">
		<h1
			class="mb-8 whitespace-nowrap font-heading text-[clamp(2.25rem,12vw,6rem)] font-extrabold leading-none"
		>
			{"{career}"}
		</h1>
		<p class="text-2xl font-mono mb-4">
			One of our goals is to help students get jobs and internships. We
			host resume workshops, teach online assessment (OA) skills, and
			offer mock interview prep.
		</p>
	</div>
	<div class="lg:w-1/2">
		<div class="p-8 lg:p-0 w-full aspect-video">
			<img src="images/9.jpg" class="w-full" />
		</div>
	</div>
</div>

<style>
	.landing {
		position: relative;
		color: white;
		.video {
			background-color: white;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: -1;
			opacity: 0.7;
		}
	}
	.cursor {
		display: inline-block;
		margin-left: 0.2em;
		margin-right: 0.2em;

		height: 0.15em;
		width: 0.7em;

		background-color: white;
		animation: 1s linear infinite blinking-cursor;
	}
	@keyframes blinking-cursor {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
