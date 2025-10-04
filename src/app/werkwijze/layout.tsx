'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('werkwijze');

    // unmount action
    return () => document.body.classList.remove('werkwijze');
  }, [])


  return children
}