import { createClient } from '@/utils/supabase/server'
import Mic from '@/components/Mic'
import { cookies } from 'next/headers'
import React from 'react'
import List from '@/components/List'


export default function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          {isSupabaseConnected && <button />}
        </div>
      </nav>

        <main className="flex-1 flex flex-col">
          <Mic />
        </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://spillt.co/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase & Spillt
          </a>
        </p>
      </footer>
    </div>
  )
}
