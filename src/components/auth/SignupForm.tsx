import { ISignup, SignupSchema } from '@/schemas/SignupSchema';
import { useSignup } from '@/services/query/auth.query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SignupForm = ({redirectUrl, className}:{redirectUrl:string, className: string}) => {

    
  const { mutateAsync: signup } = useSignup({ redirectUrl:redirectUrl || '/dashboard' })
  const form = useForm<ISignup>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'user'
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data: ISignup) => {
    await signup({...data});
  };

  return (
    <div className={cn('grid gap-6', className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-2  mx-auto mb-0 mt-8  space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel> Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="password" type={showPassword ? 'text' : 'password'} className="input-field" {...field} />
                      <span
                        className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                        onClick={() => {
                          setShowPassword((prev) => !prev);
                        }}>
                        {showPassword ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="mt-4">Sign Up</Button>
        </form>
      </Form>

      <p className="tracking-[0.1rem] leading-6 text-center mt-5 max-sm:text-sm ">
      If Already have an Account?
      <Link to="/login" className="text-lg text-center text-alternate hover:scale-105">
        &nbsp;Login
        </Link>
      </p>
    </div>
  );
};

export default SignupForm