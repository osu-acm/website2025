<script lang="ts">
	import "../app.css";
	import { InstagramIcon, GithubIcon, MailIcon } from "@lucide/svelte";
	import DiscordIcon from "$lib/DiscordIcon.svelte";
	import { page } from "$app/state";

	let { children } = $props();
	function isActive(path: string): Boolean {
		return (
			page.url.pathname == path ||
			page.url.pathname.startsWith(path + "/")
		);
	}
</script>

<nav
	class="bg-acm-yellow flex place-content-between items-center font-extrabold p-8 gap-2 text-2xl"
>
	<a href="/"
		><img class="h-[3em]" src="/wordmark logo.svg" alt="acm@osu" /></a
	>
	<div class="flex gap-4 font-heading">
		<a
			href="/"
			class="hover:text-orange-800"
			class:text-acm-orange={isActive("/")}>about</a
		>
		<a
			href="/resources"
			class="hover:text-orange-800"
			class:text-acm-orange={isActive("/resources")}>resources</a
		>
		<!--<a
			href="/talks"
			class="hover:text-orange-800"
			class:text-acm-orange={isActive("/talks")}>talks</a
		>-->
		<!--<a
			href="/members"
			class="hover:text-orange-800"
			class:text-acm-orange={isActive("/members")}>members</a
		>-->
	</div>
</nav>

{@render children?.()}

<div class="flex flex-col items-center bg-acm-orange text-white p-8">
	<h2 class="text-3xl mb-4 font-extrabold">Connect with Us</h2>
	<div class="flex gap-4">
		<a href="https://github.com/osu-acm"><GithubIcon size="48" /></a>
		<a href="https://www.instagram.com/osu.acm/"
			><InstagramIcon size="48" /></a
		>
		<a href="mailto:computingmachinery.clubs@oregonstate.edu"
			><MailIcon size="48" /></a
		>
		<a href="https://discord.com/invite/cCtv2RgAJ8"
			><DiscordIcon size="48" /></a
		>
	</div>
</div>
