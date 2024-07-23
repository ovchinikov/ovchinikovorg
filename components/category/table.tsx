import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getCategories } from '@/lib/data';
import { dateToString } from '@/lib/utils';
import { DeleteCategory, UpdateCategory } from '@/components/category/buttons';

const CategoryTable = async () => {
  const categories = await getCategories();
  return (
    <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
      <Table>
        <TableCaption>All categories</TableCaption>
        <TableHeader className='rounded-lg bg-gray-50 p-4'>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className='w-[200px]'>Created</TableHead>
            <TableHead className='w-[200px]'>Updated</TableHead>
            <TableHead className='w-[100px] sr-only'>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-white'>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{dateToString(category.createdAt)}</TableCell>
              <TableCell>{dateToString(category.updatedAt)}</TableCell>
              <TableCell className='flex justify-end gap-3'>
                <UpdateCategory id={category.id} />
                <DeleteCategory id={category.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryTable;
