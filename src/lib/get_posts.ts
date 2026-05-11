const paths = import.meta.glob("/src/routes/talks/**/*.md", {
	eager: true,
});

const formatter = new Intl.DateTimeFormat("en-US", { month: "long" });

type Post = {
	date: string;
	href: string;
	title: string;
	author: string;
	desc: string;
	video?: string;
};



export function getPosts(): Post[] {
	const posts: Post[] = [];
	for (const path in paths) {
		const file: any = paths[path];
		const metadata = file.metadata;

		if (!metadata?.date || !metadata?.title) {
			continue;
		}

		let post = {
			...metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		};
		posts.push(post);
	}
	posts.sort((a, b): number => {
		let a_date = new Date(a.date);
		let b_date = new Date(b.date);
		return b_date.getTime() - a_date.getTime();
	});
	return posts

}



export function getPostsByMonth(): Post[][] {

	const posts: Post[] = [];

	const buckets: { [id: string]: Post[] } = {};

	for (const path in paths) {
		const file: any = paths[path];
		const metadata = file.metadata;

		if (!metadata?.date || !metadata?.title) {
			continue;
		}

		let post = {
			...metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		};
		posts.push(post);
		let date = new Date(metadata.date);
		let month = formatter.format(date);
		let year: Number = date.getFullYear();
		if (Object.hasOwn(buckets, `${month} ${year}`)) {
			buckets[`${month} ${year}`].push(post);
		} else {
			buckets[`${month} ${year}`] = [post];
		}
	}

	for (const key in buckets) {
		buckets[key].sort((a, b): number => {
			let a_date = new Date(a.date);
			let b_date = new Date(b.date);
			return b_date.getTime() - a_date.getTime();
		});
	}

	let keys = Object.keys(buckets).toSorted((a: string, b: string): number => {
		let a_date = new Date(a);
		let b_date = new Date(b);
		return b_date.getTime() - a_date.getTime();
	});
	let in_order = [];
	for (const k of keys) {
		in_order.push(buckets[k])
	}

	return in_order;
}



