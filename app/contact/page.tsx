import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='p-2 md:container md:mx-auto mt-10'>
      <div className='mt-6 flex flex-col sm:flex-row gap-4 items-center'>
        <div className='flex-1 flex gap-4 flex-col'>
          <h1 className={`${lusitana.className} text-3xl font-bold`}>
            Ready to grow your business?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            modi ipsa tenetur qui, facilis harum, doloribus nulla nemo eveniet,
            voluptas eos aliquam nisi assumenda! Aliquam voluptates animi culpa
            delectus hic!
          </p>
        </div>
        <div className='flex-1 flex justify-center items-center p-6'>
          <Image
            src='/contact.webp'
            alt='vinokov tech co contact us page image'
            width={1000}
            height={667}
            className='hidden sm:block'
          />
        </div>
      </div>
      <div className='mt-6'>
        <h2
          className={`${lusitana.className} text-2xl text-center font-bold mb-4`}
        >
          Contact Us
        </h2>
        <form action='' className='flex justify-center items-center'>
          <div className='grid grid-cols-1 gap-4'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input type='text' id='name' className='mt-2' />
            </div>
            <div>
              <Label htmlFor='phone'>Phone </Label>
              <Input type='tel' id='phone' className='mt-2' />
            </div>
            <div>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                cols={30}
                rows={10}
                id='message'
                placeholder='Type your message here...'
                className='mt-2'
              />
            </div>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
