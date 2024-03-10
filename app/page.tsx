import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';
import { Hero } from './_components/hero';
import { Title } from './_components/title';
import { Programs } from "./(sections)/programs";
import { About } from './(sections)/about';
import { Campus } from './(sections)/campus';
import { Testimonials } from './(sections)/testimonials';
import { Contact } from './(sections)/contact';

export default function Home() {
  return (
   <main>
      <Navbar />
      <Hero />
      <Title subTitle='Our Program' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subTitle='Testimonials' title='What Students Say' />
      <Testimonials />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact />
      <Footer />
   </main>
  );
};
