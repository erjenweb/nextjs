'use client'
import type { Metadata } from 'next'
import {useEffect} from "react";



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.classList.add('collection-page');

    // unmount action
    return () => document.body.classList.remove('collection-page');
  }, [])
  return (
    <>
      {children}
    </>


  )
}
