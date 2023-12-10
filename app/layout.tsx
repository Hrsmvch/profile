'use client' 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import getCookie from '@/utils/getCookieValue';
import './globals.css' 
 
const useAuthentication = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = getCookie('userKey');

    if (!isAuthenticated) {
      router.push('/welcome'); 
    }
  }, [router]);
};
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useAuthentication();

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
