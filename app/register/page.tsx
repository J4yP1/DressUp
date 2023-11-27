"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import React from 'react';

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const userInfo = await response.json();
    console.log(userInfo);
    router.push("/login");
  };

  return(
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
      <div className="min-h-screen pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center">
              <Image className='p-4 border-r'
              src="/images/roupa.jpg"
              alt="DressUp"
              width={400}
              height={400}
              />
            </div>
            <div className="w-full py-16 px-12">
              <h2  className="text-3xl font-bold leading-9 tracking-tight text-gray-900 mb-4">Register</h2>
              <p className="mb-4">
                Create your account! Its free and only take a minute.
              </p>
              <form onSubmit={registerUser}>
                <div className="grid grid-cols-2 gap-5">
                <input
                  id="first-name"
                  placeholder='First Name'
                  name="first-name"
                  type="first-name"
                  autoComplete="first-name"
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <input
                  id="Surname"
                  placeholder='Surname'
                  name="Surname"
                  type="first-name"
                  autoComplete="first-name"
                  //required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                </div>
                <div className="mt-5">
                <input
                  id="email"
                  placeholder='E-mail'
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                </div>
                <div className="mt-5">
                <input
                  id="password"
                  placeholder='Password'
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
                <div className="mt-5">
                <input
                  id="country"
                  placeholder='Country'
                  name="country"
                  type="country"
                  autoComplete="country"
                  //required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                </div>
                <div className="mt-5">
                  <button  type="submit" className="w-full rounded bg-purple-500 hover:bg-purple-400 py-3 text-center text-white">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </body>  
  
  );
};

export default Register;
