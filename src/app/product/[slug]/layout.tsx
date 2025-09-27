'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('detail-page');

    // unmount action
    return () => document.body.classList.remove('detail-page');
  }, [])


  return children
}