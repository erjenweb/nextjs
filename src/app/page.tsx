import { Brand } from '@/components/home/brand'
import { Collection } from '@/components/home/collection'
import Contact from '@/components/home/contact'
import { HeroSlider } from '@/components/home/heroSlider'
import { Services } from '@/components/home/services'
import Testimonial from '@/components/home/testimonial'


async function Home() {


  const res = await fetch(`/api/fetch/product/list`);

  const cars = await res.json();

  return (
    <>


      <main className="site-main">
        <HeroSlider />
        <Collection cars={cars} />
        <Services />
        <Brand />
        <Testimonial />
        <Contact />

      </main>
    </>
  )
}

export default Home;
