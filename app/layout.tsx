import type { Metadata } from 'next'
import './globals.css' 
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import getCookie from '@/utils/getCookieValue';

export const metadata: Metadata = {
  title: 'Harasymovych HV', 
}

export default function RootLayout({children}: { children: React.ReactNode }) { 
  return (
    <html lang="en">
      <body>
        {children} 
      </body>
    </html>
  )
}
