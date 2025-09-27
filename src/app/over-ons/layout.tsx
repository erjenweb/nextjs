'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('contact-page');

    // unmount action
    return () => document.body.classList.remove('contact-page');
  }, [])


  return children
}