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
---
# Hello Internet!
```

Be sure to update the arguments in the `---` front matter section. Now you can
write the blog post content in markdown format after the second `---` section.

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
