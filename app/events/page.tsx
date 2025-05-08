import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type Post = {
  title: string;
  slug: string;
};

export default async function AnnouncementsPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        slug: filename.replace(/\.md$/, ''),
      };
    })
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/events/${post.slug}`}
              className="text-xl text-white hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
