import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
export default function How() {
  return(
    <Wrapper>
      <Navbar>
      <Link href='/home'>
      <Home>HOME</Home>
      </Link>
      <Link href='/about'>
      <About>ABOUT</About>
      </Link>
      <Link href='/business'>
      <Business>BUSINESS</Business>
      </Link>
      <Link href='/article'>
      <Article>ARTICLE</Article>
      </Link>
      <Link href='/notes'>
      <Notes>NOTES</Notes>
      </Link>
       
      </Navbar>
      <Header></Header>
    </Wrapper>
  )
}
const Wrapper = tw.div`flex flex-col p-5 justify-center `
const Navbar = tw.div`flex space-x-4 text-xl text-purple-700 justify-between bg-red-700 p-3 mt-30`
const Home = tw.div`bg-purple-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md cursor-pointer`
const About = tw.div`bg-gray-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md cursor-pointer`
const Article = tw.div`bg-gray-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md cursor-pointer`
const Business = tw.div`bg-gray-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md cursor-pointer`
const Notes = tw.div`bg-gray-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md cursor-pointer`
const Header=tw.div``


