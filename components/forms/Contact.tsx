'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContacForm = () => {
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    console.log(e.currentTarget);
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || '';
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
    const publickey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
    console.log(serviceID, templateID, publickey);
    emailjs.init({
      publicKey: publickey,
    });

    emailjs.sendForm(serviceID, templateID, e.currentTarget).then(
      (result) => {
        setStateMessage('Message sent!');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
      (error) => {
        console.error(error);
        setStateMessage('Something went wrong, please try again later');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
    );

    // Clears the form after sending the email
    e.currentTarget.reset();
  };
  return (
    <form
      action=''
      onSubmit={sendEmail}
      className='flex justify-center items-center'
    >
      <div className='grid grid-cols-1 gap-4'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='user_name'
            name='from_name'
            required
            className='mt-2'
            placeholder='Your name'
          />
        </div>
        <div>
          <Label htmlFor='phone'>Phone </Label>
          <Input
            type='tel'
            id='phone'
            name='phone'
            placeholder='Your Phone No.'
            required
            className='mt-2'
          />
        </div>
        <div>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            cols={30}
            rows={10}
            id='message'
            name='message'
            placeholder='Type your message here...'
            className='mt-2'
            required
          />
        </div>

        <Button
          type='submit'
          disabled={isSubmitting}
          className='bg-indigo-500 hover:bg-indigo-600 rounded-full'
        >
          Submit
        </Button>
        {stateMessage && (
          <div className='text-center text-green-500'>{stateMessage}</div>
        )}
      </div>
    </form>
  );
};

export default ContacForm;
