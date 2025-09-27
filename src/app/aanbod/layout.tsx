import type { Metadata } from 'next'


export const metadata = {
  title: 'My Child Link Page',
  description: 'This is the description for my child link page.',
  openGraph: {
    title: 'My Open Graph Title',
    description: 'My Open Graph Description',
    url: 'https://example.com/your-page',
    type: 'website',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>


  )
}
