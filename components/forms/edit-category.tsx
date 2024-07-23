import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { updateCategory } from '@/lib/action';
import { getCategoryById } from '@/lib/data';

interface UpdateCategoryParams {
  id: string;
}

const UpdateCategory = async ({ id }: UpdateCategoryParams) => {
  const category = await getCategoryById(id);
  const updateCategoryWithId = updateCategory.bind(null, id);
  return (
    <div>
      <Card className='bg-gray-50 border-none rounded-lg'>
        <CardHeader>
          <CardTitle>Add Category</CardTitle>
          <CardDescription>Edit Category for your blogs</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={updateCategoryWithId}>
            <div className='flex flex-col space-y-5'>
              <Label htmlFor='category'>Name</Label>
              <Input
                type='text'
                id='category'
                name='category'
                defaultValue={category?.name}
              />
            </div>
            <CardFooter className='flex justify-end items-center gap-2 mt-6'>
              <Link
                href='/dashboard/category'
                className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
              >
                Cancel
              </Link>
              <Button type='submit'>Edit Category</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateCategory;
