import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server' 
 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; 

  const isPublicPath = path === '/welcome';
  const isPrivatePath = path === '/edit';
  
  const userKey = request.cookies.get('userKey')?.value == process.env.NEXT_PUBLIC_USER_KEY;  
  const adminKey =  request.cookies.get('adminKey')?.value == process.env.NEXT_PUBLIC_ADMIN_KEY; 

  // if(userKey && isPublicPath){ 
  //   return NextResponse.redirect(new URL('/', request.url))
  // } 

  // if(!userKey && !isPublicPath){ 
  //   return NextResponse.redirect(new URL('/welcome', request.url))
  // }

  // if(!adminKey && isPrivatePath){
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
}
   
export const config = {
  matcher: ['/', '/about', '/blog/:path*', '/projects/:path*', '/settings', '/edit/:path*', '/hv-admin', '/welcome'], 
}