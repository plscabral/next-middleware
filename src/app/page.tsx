"use client"

import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

// components-ui
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    Cookie.set("auth_token", "be5400c3-5ecb-4ac1-b7f6-3bb431096c33")
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-slate-900 items-center justify-center">
      <Button onClick={handleLogin} className='bg-green-400'>Login</Button>
    </div>
  )
}
