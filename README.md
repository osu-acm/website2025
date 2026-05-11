# acm@osu 2025 website


## Writing Posts
First create a folder chain in the `/src/routes/talks/` representing the day of
the publish. e.g. `/src/routes/talks/2025/Oct/2/`
Next make a `+page.md` file.
Copy the following post boilerplate into the markdown file:
```markdown
---
title: Display Title
author: Benny Beaver
desc: This is what will be used for the page description on google search
date: 2025/10/2
# Optional: render media above the post body
video: https://www.youtube.com/watch?v=VIDEO_ID
slides: /slides/2025-10-02-display-title.pdf
slidesTitle: Display Title slides
---
# Hello Internet!
```

Be sure to update the arguments in the `---` front matter section. Now you can
write the blog post content in markdown format after the second `---` section.

### Adding slides
To render slides directly on a talk page, export/download the deck as a PDF and
place it in `static/slides/`, for example:

```text
static/slides/2025-10-02-display-title.pdf
```

Then add this to the talk front matter to render one deck at the top of the page:

```yaml
slides: /slides/2025-10-02-display-title.pdf
slidesTitle: Display Title slides
```

For pages with multiple decks, such as lightning talks, import and use the
slides component in the markdown body:

```md
<script>
	import Slides from "$lib/Slides.svelte";
</script>

<Slides src="/slides/lightning-talk-1.pdf" title="Lightning Talk 1" />
<Slides src="/slides/lightning-talk-2.pdf" title="Lightning Talk 2" />
```

Files in `static/` are served from the site root, so
`static/slides/example.pdf` is available at `/slides/example.pdf`.

You can publish the website as long as you have access to the `acmwww` group
on the engineering servers. It is *highly* recommended that you setup your
`~/.ssh/config` file to include your ssh key for flip. e.g. 

```sshconfig
Host flip
	User onid-username
	HostName flip.engr.oregonstate.edu
	IdentityFile ~/.ssh/oregonstate_ed25519.key

```

First run `npm run build` (or whatever package manager you like to use) then run
`./ship.sh` to copy the files over and ensure proper permissions are set. (this
will output a ton of known junk into your terminal)
