import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/services/query/auth.query';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { ILogin, loginSchema } from '@/schemas/LoginSchema';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';



const LoginForm = ({redirectUrl, className}:{redirectUrl:string, className: string}) => {

  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync: loginMutation } = useLogin( { redirectUrl: redirectUrl || '/dashboard' } );

  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: ILogin) => {
    
    loginMutation({...data});
    
  };

  return (
    <div className={cn('grid gap-6', className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-2  mx-auto mb-0 mt-8  space-y-2">
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
          <Button type="submit" className="mt-4">Login</Button>
        </form>
      </Form>

      <p className="tracking-[0.1rem] leading-6 text-center mt-5 max-sm:text-sm">
        Don’t have an Account?
        <Link to="/signup" className="text-lg text-center text-alternate hover:scale-105">
          &nbsp;Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
