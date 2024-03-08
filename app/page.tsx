import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';
import { Hero } from './_components/hero';
import { Title } from './_components/title';
import { Programs } from "./(pages)/programs";
import { About } from './(pages)/about';
import { Campus } from './(pages)/campus';

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
      <Footer />
   </main>
  );
};
