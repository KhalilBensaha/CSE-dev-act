'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-primary-foreground p-8 hidden lg:flex items-center justify-center">
        <Image
          src="https://drive.google.com/file/d/16ASliLRNv6yjlvZUd_NWIUvonTsLmUy0/view?usp=drive_link"
          alt="Financial Planning"
          width={600}
          height={600}
          className="rounded-2xl"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input type="email" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-primary">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full" asChild>
                <Link href="/wallet">Sign In</Link>
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary">
                  Create Account
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}