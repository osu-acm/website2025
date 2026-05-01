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
		let post = {
			...file.metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		};
		posts.push(post);
	}
	posts.sort((a, b): number => {
		let a_date = new Date(a.date);
		let b_date = new Date(b.date);
		if (a_date.getDate() == b_date.getDate()) {
			return 0;
		} else if (a_date.getDate() < b_date.getDate()) {
			// b is newer therefore return positive
			return 1;
		} else {
			// a is newer therefore return negative
			return -1;
		}
	});
	return posts

}



export function getPostsByMonth(): Post[][] {

	const posts: Post[] = [];

	const buckets: { [id: string]: Post[] } = {};

	for (const path in paths) {
		const file: any = paths[path];
		let post = {
			...file.metadata,
			href: path.replaceAll("+page.md", "").replaceAll("/src/routes", ""),
		};
		posts.push(post);
		let date = new Date(file.metadata.date);
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
			if (a_date.getDate() == b_date.getDate()) {
				return 0;
			} else if (a_date.getDate() < b_date.getDate()) {
				// b is newer therefore return positive
				return 1;
			} else {
				// a is newer therefore return negative
				return -1;
			}
		});
	}

	let keys = Object.keys(buckets).toSorted((a: string, b: string): number => {
		let a_date = new Date(a);
		let b_date = new Date(b);
		if (a_date.getDate() == b_date.getDate()) {
			return 0;
		} else if (a_date.getDate() < b_date.getDate()) {
			// b is newer therefore return positive
			return 1;
		} else {
			// a is newer therefore return negative
			return -1;
		}
	});
	let in_order = [];
	for (const k of keys) {
		in_order.push(buckets[k])
	}

	return in_order;
}



