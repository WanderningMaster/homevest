import Button from 'components/common/button/button';
import { Input } from 'components/common/input/input';
import { PasswordInput } from 'components/common/input/password-input';
import { Typography } from 'components/common/typography/typography';
import { AuthLayout } from 'components/layouts/auth-layout/auth-layout';
import React from 'react';

const SignUpPage: React.FC = () => {

  return (
    <AuthLayout>
      <Typography type="h2">
        Sign up
      </Typography>
      <Typography type="body" className="mt-4 text-green-pressed">
        Fill in the fields to create your account
      </Typography>
      <Input name="firstName" placeholder="First name" className="w-102.5 mt-8" />
      <Input name="secondName" placeholder="Second name" className="w-102.5 mt-6" />
      <Input name="email" placeholder="Email address" className="w-102.5 mt-6" type="email" />
      <PasswordInput name="password" placeholder="Password" className="w-102.5 mt-6" type="password" />
      <PasswordInput name="confirmPassword" placeholder="Confirm password" className="w-102.5 mt-6" type="password" />
      <Typography type="body-semibold" className="mt-6 text-green-pressed">
        Already have an account?
        <a className="text-green ml-1" href="/sign-in">Sign in</a>
      </Typography>
      <div className="w-102.5 flex mt-10">
        <Button nameBtn="primary" className="w-48 h-12 box-border">
          Sign up as developer
        </Button>
        <Button nameBtn="primary" className="w-48 h-12 box-border ml-6.5">
          Sign up as investor
        </Button>
      </div>
      <div className="flex items-center content-center mt-10">
        <div className="border border-bottom border-light-grey flex-1"></div>
        <div>
          <Typography type="body-medium" className="text-green mx-4">
            or
          </Typography>
        </div>
        <div className="border border-bottom border-light-grey flex-1"></div>
      </div>
      <Button nameBtn="google" className="w-102.5 mt-10">
        Sign up with Google
      </Button>
    </AuthLayout>
  )
}

export default SignUpPage;