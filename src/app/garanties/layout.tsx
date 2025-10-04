'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('garanties');

    // unmount action
    return () => document.body.classList.remove('garanties');
  }, [])


  return children
}