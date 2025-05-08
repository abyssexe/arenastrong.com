import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkBreaks from 'remark-breaks';
import html from 'remark-html';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'error';

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), 'posts', `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkBreaks) // ✅ supports line breaks
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(data.date).toLocaleDateString('en-US', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <article
        className="prose prose-invert max-w-none
                   [&_h1]:text-white [&_h1]:text-4xl [&_h1]:font-bold
                   [&_h2]:text-white [&_h2]:text-3xl [&_h2]:font-semibold
                   [&_p]:mb-6
                   [&_br]:block [&_br]:h-10"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }));
}
