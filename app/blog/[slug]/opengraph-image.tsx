import { getPost } from '@/lib/data';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Blog';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  console.log('post', post);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post?.title}
      </div>
    ),
    {
      ...size,
    },
  );
}
