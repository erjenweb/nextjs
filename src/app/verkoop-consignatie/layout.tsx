'use client'

import { useEffect } from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    document.body.classList.add('verkoop-consignatie');

    // unmount action
    return () => document.body.classList.remove('verkoop-consignatie');
  }, [])


  return children
}