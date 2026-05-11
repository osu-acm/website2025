<script lang="ts">
	import "../app.css";
	import {
		InstagramIcon,
		GithubIcon,
		MailIcon,
		MenuIcon,
		XIcon,
	} from "@lucide/svelte";
	import DiscordIcon from "$lib/DiscordIcon.svelte";
	import { page } from "$app/state";

	let { children } = $props();
	let menuOpen = $state(false);

	function isActive(path: string): Boolean {
		return (
			page.url.pathname == path ||
			page.url.pathname.startsWith(path + "/")
		);
	}
</script>

<nav class="bg-acm-yellow font-extrabold text-2xl">
	<div class="flex place-content-between items-center gap-2 p-6 md:p-8">
		<a href="/" onclick={() => (menuOpen = false)}
			><img class="h-[2.5em] md:h-[3em]" src="/wordmark logo.svg" alt="acm@osu" /></a
		>

		<button
			class="md:hidden"
			aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<XIcon size="40" />
			{:else}
				<MenuIcon size="40" />
			{/if}
		</button>

		<div class="hidden gap-4 font-heading md:flex">
			<a href="/" class="hover:text-orange-800" class:text-acm-orange={isActive("/")}>about</a>
			<a
				href="/resources"
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/resources")}>resources</a
			>
			<a
				href="/projects"
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/projects")}>projects</a
			>
			<a
				href="/talks"
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/talks")}>talks</a
			>
			<a
				href="/leadership"
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/leadership")}>leadership</a
			>
		</div>
	</div>

	{#if menuOpen}
		<div class="flex flex-col gap-4 px-6 pb-6 font-heading md:hidden">
			<a href="/" onclick={() => (menuOpen = false)} class="hover:text-orange-800" class:text-acm-orange={isActive("/")}>about</a>
			<a
				href="/resources"
				onclick={() => (menuOpen = false)}
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/resources")}>resources</a
			>
			<a
				href="/projects"
				onclick={() => (menuOpen = false)}
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/projects")}>projects</a
			>
			<a
				href="/talks"
				onclick={() => (menuOpen = false)}
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/talks")}>talks</a
			>
			<a
				href="/leadership"
				onclick={() => (menuOpen = false)}
				class="hover:text-orange-800"
				class:text-acm-orange={isActive("/leadership")}>leadership</a
			>
		</div>
	{/if}
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
