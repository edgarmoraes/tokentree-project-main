import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/wraper/Header'
import Banner from '../components/home/Banner'
import Footer from '../components/wraper/Footer'

export default function Home() {
  return (
    <div >
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}
