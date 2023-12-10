'use client'
// import type { Metadata } from 'next'
import './globals.css' 
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import getCookie from '@/utils/getCookieValue';
 
const useAuthentication = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = getCookie('userKey');
    console.log('isAuthenticated: ', isAuthenticated);

    if (!isAuthenticated) {
      router.push('/welcome'); 
    }
  }, [router]);
};

// export const metadata: Metadata = {
//   title: 'Harasymovych HV', 
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use the custom authentication hook
  useAuthentication();

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
