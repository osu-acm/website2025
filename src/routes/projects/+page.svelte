<svelte:head>
	<title>Projects: acm@osu</title>
	<meta name="description" content="" />
	<meta property="og:title" content="" />
	<meta property="og:type" content="article" />
	<meta property="og:description" content="" />
</svelte:head>
<article class="w-full flex flex-col items-center">
	<header class="bg-acm-yellow px-8 py-16 text-white md:px-12 w-full">
		<div class="mx-auto max-w-6xl">
			<p class="mb-3 font-mono text-xl">
				member work / tools / experiments
			</p>
			<h1 class="font-heading text-7xl font-extrabold md:text-8xl">
				{"{projects}"}
			</h1>
			<p class="mt-6 max-w-3xl font-mono text-2xl">
				Explore what acm@osu members are building and find projects to
				learn from or contribute to.
			</p>
		</div>
	</header>
	<div
		class="prose prose-xl max-w-[50em] prose-headings:mt-0 p-5 lg:p-0 lg:py-8"
	>
		<p>
			Many acm@osu members are always working on projects. In an effort to
			promote what they are working on this is a list of we're up to. If
			any of these projects peak your interest, reach out to see how you
			can contribute.
		</p>

		<hr />

		<h3><a href="https://formacv.org/">FormaCV - Resume Builder</a></h3>
		<h4>Peter Mora-Stevens</h4>
		<p>
			Want to get hired fast? FormaCV helps you make your resume quickly
			and intuitively. Although not currently looking for more
			contributors, FormaCV is built with React and ReactPDF.
		</p>

		<h3>
			<a href="https://github.com/lukasmwerner/mark"
				>Mark - Distributed Bookmarking</a
			>
		</h3>
		<h4>Lukas Werner</h4>
		<p>
			A basic decentralized bookmarking service with local full text
			search and automatic machine learning tagging. Built using Golang,
			Web Technologies, CRDTs, and SQLite, never lose your bookmarks
			again.
		</p>

		<h3>
			<a href="https://github.com/oliverflood/atmoscope"
				>Atmoscope - End to End ML Project</a
			>
		</h3>
		<h4>Oliver Flood</h4>
		<p>
			An end-to-end ml classification project using the NASA CLOUD GAZE
			dataset with high-quality labels and more realistic cloud images.
			The goal is to create an open-source cloud identification app that
			improves upon existing solutions like CloudSpotter.
		</p>
	</div>
</article>
