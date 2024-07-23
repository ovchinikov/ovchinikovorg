import UpdateCategory from '@/components/forms/edit-category';

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <UpdateCategory id={id} />;
};

export default Page;
