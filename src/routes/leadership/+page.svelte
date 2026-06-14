<script lang="ts">
	type Leader = {
		name: string;
		role: string;
		roles?: string[];
		initials: string;
		color: string;
		image?: string;
		email?: string;
		website?: string;
	};
	type FormerLeader = {
		name: string;
		years: string;
		roles: string[];
		initials: string;
		color: string;
		image?: string;
		email?: string;
		website?: string;
	};

	const leaders: Leader[] = [
		{
			name: "Lukas Werner",
			role: "President",
			initials: "LW",
			email: "wernerlu@oregonstate.edu",
			color: "#F37420",
			image: "/people/lukas.jpg",
			website: "https://lukaswerner.com",
		},
		{
			name: "Avabella Schroeder",
			role: "Vice-President",
			roles: ["Vice-President", "Community Outreach Officer"],
			initials: "AS",
			color: "#F37420",
			email: "schroeav@oregonstate.edu",
			image: "/people/avabella.jpg",
		},
		{
			name: "Jacob Weiner",
			role: "Treasurer",
			initials: "JW",
			color: "#19C25C",
		},
		{
			name: "William Tu",
			role: "Head Competitive Officer",
			initials: "WT",
			color: "#209FF3",
		},
		{
			name: "Isaac Tucknott",
			role: "Competitive Officer",
			initials: "IT",
			color: "#19C25C",
		},
		{
			name: "Mehul Munankarmi",
			role: "Career Officer",
			initials: "MM",
			color: "#F3C020",
			image: "/people/mehul.jpg",
		},
		{
			name: "Cal Corcoran",
			role: "Graphic Design Officer",
			initials: "CC",
			color: "#19C25C",
		},
		{
			name: "Jak Tynshimov",
			role: "Community Outreach Officer",
			initials: "JT",
			color: "#209FF3",
			image: "/people/jak.jpg",
		},
		{
			name: "Leonidas Sallos",
			role: "Online Officer",
			initials: "LS",
			color: "#F3C020",
		},
	];

	const former_leadership: FormerLeader[] = [
		{
			name: "Oliver Flood",
			roles: ["Vice-President"],
			initials: "OF",
			color: "#209FF3",
			image: "/people/oliver.jpg",
			website: "https://oliverflood.com",
			years: "2025-2026",
		},
		{
			name: "Samuel Jamieson",
			roles: ["Community Outreach Officer"],
			initials: "SJ",
			color: "#209FF3",
			years: "2025-2026",
		},
		{
			name: "Skyelar Bala",
			roles: ["Graphics Design Officer"],
			initials: "SB",
			color: "#19C25C",
			years: "2025-2026",
		},
		{
			name: "Aadarsh Rajput",
			roles: ["Webmaster"],
			initials: "AR",
			color: "#F3C020",
			years: "2025-2026",
		},
		{
			name: "Alex Nguyen",
			roles: ["Online Officer"],
			initials: "AN",
			color: "#F37420",
			years: "2025-2026",
		},
		{
			name: "Will Teyema",
			roles: ["Competitive Programming Officer"],
			initials: "WT",
			image: "/people/will.jpg",
			color: "#209FF3",
			years: "2025-2026",
		},
		{
			name: "Kai Black",
			roles: ["Competitive Programming Officer"],
			initials: "KB",
			color: "#19C25C",
			years: "2025-2026",
		},
		{
			name: "Peter Mora-Stevens",
			roles: ["Career Officer"],
			initials: "PM",
			color: "#F3C020",
			image: "/people/peter.jpg",
			years: "2025-2026",
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
						<span class="flex gap-1 py-1">
							{#if leader.email}
								<a
									href={`mailto:${leader.email}`}
									class="text-black hover:underline"
								>
									<img
										class="h-[1em]"
										src="/mail.svg"
										alt="email icon"
									/>
								</a>
							{/if}
							{#if leader.website}
								<a
									href={leader.website}
									target="_blank"
									rel="noreferrer"
									class="transition"
								>
									<img
										class="h-[1em]"
										src="/globe.svg"
										alt="internet icon"
									/>
								</a>
							{/if}
						</span>
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
