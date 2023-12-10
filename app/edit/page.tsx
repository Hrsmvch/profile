'use client'
import React from 'react'
// import {useSession, signOut, signIn} from 'next-auth/react'
import { redirect } from 'next/navigation'

const Edit = () => {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/hv-admin')
  //   },
  // })

  return (
    <div>Edit 
      {/* {session?.data?.user?.email} */}
    </div>
  )
}

export default Edit