import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DressUp',
  description: '',
}

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
};

export default RootLayout;
