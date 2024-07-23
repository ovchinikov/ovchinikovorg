import LoginForm from '@/components/forms/login-form';

const Page = async () => {
  return (
    <>
      <div className='mx-auto flex flex-col justify-center items-center mt-8'>
        <LoginForm />
      </div>
    </>
  );
};

export default Page;
