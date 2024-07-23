import { getPosts } from '@/lib/data';
import Link from 'next/link';

const Page = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h1>Blogs</h1>

      <div>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <h2>{post.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
