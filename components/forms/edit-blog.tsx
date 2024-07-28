'use client';

import JoditEditor from 'jodit-react';
import { useRef, useMemo, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Link from 'next/link';
import { UpdateBlog } from '@/lib/action';

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  name: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UpdateBlogProps {
  categories: Category[] | undefined;
  blog: Blog | undefined;
}

interface Blog {
  id: string;
  title: string;
  Category: Category | null;
  User?: User | null;
  content: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const EditBlog = ({ categories, blog }: UpdateBlogProps) => {
  const [content, setContent] = useState(blog?.content || '');
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    [],
  );

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const dataWithContent = UpdateBlog.bind(null, blog?.id || '', content);

  return (
    <form action={dataWithContent}>
      <Card className='border-none bg-gray-50 shadow-sm rounded-lg'>
        <CardHeader>
          <CardTitle>Update Blog</CardTitle>
          <CardDescription>Update your blogs here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-5'>
            <div>
              <Label htmlFor='title'>Title</Label>
              <Input
                type='text'
                placeholder='Title'
                name='title'
                id='title'
                className='mt-2 w-full'
                defaultValue={blog?.title}
              />
            </div>
            <div className='flex flex-col space-y-5'>
              <Label htmlFor='category'>Category</Label>

              <Select name='category' defaultValue={blog?.Category?.name}>
                <SelectTrigger>
                  <SelectValue placeholder='Category' />
                </SelectTrigger>
                <SelectContent defaultValue={blog?.Category?.name}>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='flex flex-col space-y-5'>
              <Label htmlFor='content'>Content</Label>
              <JoditEditor
                value={content}
                ref={editor}
                config={config}
                className='mt-2 w-full'
                onChange={handleContentChange}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex gap-2 justify-end mt-6'>
          <Link
            href='/dashboard'
            className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
          >
            Cancel
          </Link>
          <Button type='submit' className='bg-indigo-500 hover:bg-indigo-600'>
            Edit Blog
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditBlog;
