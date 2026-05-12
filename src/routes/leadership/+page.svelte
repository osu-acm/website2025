<script lang="ts">
	type Leader = {
		name: string;
		role: string;
		initials: string;
		color: string;
		image?: string;
		website?: string;
	};

	const leaders: Leader[] = [
		{
			name: "Lukas Werner",
			role: "President",
			initials: "LW",
			color: "#F37420",
			image: "/people/lukas.jpg",
			website: "https://lukaswerner.com",
		},
		{
			name: "Oliver Flood",
			role: "Vice-President",
			initials: "OF",
			color: "#209FF3",
			image: "/people/oliver.jpg",
			website: "https://oliverflood.com",
		},
		{
			name: "Jacob Weiner",
			role: "Treasurer",
			initials: "JW",
			color: "#19C25C",
		},
		{
			name: "Aadarsh Rajput",
			role: "Webmaster",
			initials: "AR",
			color: "#F3C020",
		},
		{
			name: "Alex Nguyen",
			role: "Online Officer",
			initials: "AN",
			color: "#F37420",
		},
		{
			name: "Will Teyema",
			role: "Competitive Programming Officer",
			initials: "WT",
			color: "#209FF3",
		},
		{
			name: "Kai Black",
			role: "Competitive Programming Officer",
			initials: "KB",
			color: "#19C25C",
		},
		{
			name: "Peter Mora-Stevens",
			role: "Career Officer",
			initials: "PM",
			color: "#F3C020",
			image: "/people/peter.jpg",
		},
		{
			name: "Avabella Schroeder",
			role: "Community Outreach Officer",
			initials: "AS",
			color: "#F37420",
		},
		{
			name: "Samuel Jamieson",
			role: "Community Outreach Officer",
			initials: "SJ",
			color: "#209FF3",
		},
		{
			name: "Skyelar Bala",
			role: "Graphics Design Officer",
			initials: "SB",
			color: "#19C25C",
		},
	];

	function avatar({ initials, color }: Leader) {
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
			<rect width="400" height="400" fill="${color}"/>
			<circle cx="315" cy="75" r="95" fill="rgba(255,255,255,0.18)"/>
			<circle cx="80" cy="330" r="120" fill="rgba(0,0,0,0.12)"/>
			<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Avenir Next, Arial, sans-serif" font-size="112" font-weight="800">${initials}</text>
		</svg>`;

		return `data:image/svg+xml,${encodeURIComponent(svg)}`;
	}
</script>

<svelte:head>
	<title>Leadership | acm@osu</title>
	<meta name="description" content="Meet the acm@osu club leadership team." />
</svelte:head>

<section class="bg-acm-orange px-8 py-16 text-white md:px-12">
	<div class="mx-auto max-w-6xl">
		<h1
			class="mb-4 whitespace-nowrap font-heading text-[clamp(2.25rem,12vw,4.5rem)] font-extrabold leading-none md:text-8xl"
		>
			{"{leadership}"}
		</h1>
		<p class="max-w-3xl font-mono text-2xl">
			Meet the students organizing events, running programs, and building
			the acm@osu community.
		</p>
	</div>
</section>

<section class="bg-acm-yellow px-8 py-12 md:px-12">
	<div class="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each leaders as leader}
			<article class="overflow-hidden bg-white shadow-lg">
				<img
					class="aspect-square w-full object-cover"
					src={leader.image ?? avatar(leader)}
					alt={`${leader.name}, ${leader.role}`}
				/>
				<div class="p-6">
					<h2 class="font-heading text-3xl font-extrabold text-black">
						{#if leader.website}
							<a
								href={leader.website}
								target="_blank"
								rel="noreferrer"
								class="transition hover:text-acm-orange"
							>
								{leader.name}
							</a>
						{:else}
							{leader.name}
						{/if}
					</h2>
					<p class="mt-2 font-mono text-xl text-acm-orange">
						{leader.role}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
