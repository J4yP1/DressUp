'use client';

import { useSession, signOut } from "next-auth/react";
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar'
import HeroSection from "@/components/HeroSection";

const Home = () => {
    const { data: session } = useSession();
    console.log(session?.user?.email);
  return (
    <body>
      <div><Navbar></Navbar></div>
      <div style={{
        zIndex:-1,
        position:'fixed',
        width:"100vw",
        height:"100vh"
      }}>
        <Image
          src="/images/bg-teste1.jpg"
          alt="DressUp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div><HeroSection></HeroSection></div>
      
    </body>  
  )
}

export default Home;