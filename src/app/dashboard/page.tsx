"use client"

import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

// components-ui
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    Cookie.remove("auth_token")
    router.push('/')
  }

  return (
    <div className="flex min-h-screen bg-slate-900 items-center justify-center">
      <Button onClick={handleLogin} className='bg-red-400'>Logout</Button>
    </div>
  )
}
