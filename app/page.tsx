import WhyWojtek from './components/WhyWojtek/WhyWojtek';
import Header from './components/Header';
import Video from './components/Video';
import AboutUs from './components/AboutUs/AboutUs';

export default function Home() {
  return (
    <>
      <Header />
      <WhyWojtek />
      <AboutUs />
      <Video />
    </>
  );
}
