'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('over-ons');

    // unmount action
    return () => document.body.classList.remove('over-ons');
  }, [])


  return children
}