import Footer from '@/components/footer'
import Header from '@/components/header'
import HelloWorld from '@/components/helloworld'
import Page from '@/components/page'
import { menu, homepage, footer } from '@/lib/cms'
import { Suspense } from 'react'

export default async function Home() {
  // const menudata = menu()
  // const homepagedata = homepage()
  // const footerdata = footer()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* 
        <Suspense fallback={<div>Loading header...</div>}> 
          <Header data={menudata} /> 
        </Suspense>
      */}
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Page data={homepagedata} />
      </Suspense> */}
      <HelloWorld />
      {/* <Suspense fallback={<div>Loading footer...</div>}>
        <Footer data={footerdata} />
      </Suspense> */}
    </main>
  )
}
