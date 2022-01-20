import type { NextPage } from 'next'
import Hero from './Hero'
import Footer from './Footer'
import Banner from './Banner'
import Faq from './FAQs'
import Features from './Features'
import Pricing from './Pricing'
import Stats from './Stats'
import Blog from './Blog'

const Home: NextPage = () => {
  return (
    <div>
      <Banner/>
       <Hero/>
       <Features/>
       <Pricing/>
       <Stats/>
       <Blog/>
       <Faq/>
       <Footer/>
    </div>
  
  
   
  )
}

export default Home
