import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from '@components/Home'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Home/>
        <Header title="Welcome to my application" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
