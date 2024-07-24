import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { authenticate } from '@/lib/action';

const LoginForm = () => {
  return (
    <form action={authenticate}>
      <Card className='w-full bg-gray-50 rounded-md border-none'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please login to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-5'>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                className='mt-2 w-full'
              />
            </div>

            <div>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                placeholder='Password'
                className='mt-2 w-full'
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
