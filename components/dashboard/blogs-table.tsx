import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getPosts } from '@/lib/data';
import { dateToString } from '@/lib/utils';
import { DeleteBlog, UpdateBlog } from '@/components/dashboard/buttons';

export default async function BlogsTable() {
  const blogs = await getPosts();
  return (
    <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
      <Table>
        <TableCaption>All blogs</TableCaption>
        <TableHeader className='rounded-lg bg-gray-50 p-4'>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className='w-[200px] text-right'>Created</TableHead>
            <TableHead className='w-[200px] text-right'>Updated</TableHead>
            <TableHead className='w-[100px] sr-only'>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-white'>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell className=''>{blog.content}</TableCell>
              <TableCell>{blog.slug}</TableCell>
              <TableCell>{blog.Category?.name}</TableCell>
              <TableCell>{dateToString(blog.createdAt)}</TableCell>
              <TableCell>{dateToString(blog.updatedAt)}</TableCell>
              <TableCell className='flex justify-end gap-3'>
                <UpdateBlog id={blog.id} />
                <DeleteBlog id={blog.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
