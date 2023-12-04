'use client';
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, FormEvent } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {
        ...data,
        redirect: false,
    });
    router.push("/dashboard");
  }
  return (
    
      <body>
        <div style={{
          zIndex:-1,
          position:'fixed',
          width:"100vw",
          height:"100vh"
        }}>
          <Image
            src="/images/background.jpg"
            alt="DressUp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className='pl-20 mt-5'
              src="/images/logoPreto1.png"
              alt="DressUp"
              height={280}
              width={280}
            />
            <h2 className="mt-6 text-center pb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account!
            </h2>
          </div>
          <div className="mt-5 p-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" onSubmit={loginUser}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-800 hover:text-indigo-600">
                      Forgot password?
                    </a>
                  </div>  
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-5 text-center text-sm">
              Not a member?{' '}
              <Link href="/register" className="font-semibold leading-6 text-indigo-800 hover:text-indigo-600">
                Register Here!
              </Link>
            </p>
          </div>
          <div>
          </div>
          <footer className="mt-20 pt-4 text-sm text-body-secondary border-t d-flex text-center">
                  IPVC ESTG - Cristiano Fonseca - João Cerqueira &copy; - 2023-2024
              </footer>
        </div>
      </body>
    );
};

export default Login;
