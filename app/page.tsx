import WhyWojtek from './components/WhyWojtek/WhyWojtek';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Video from './components/Video';
import AboutUs from './components/AboutUs/AboutUs';

export default function Home() {
  return (
    <>
      <MainPage />
      <WhyWojtek />
      <AboutUs />
      <Video />
      <Footer />
    </>
  );
}
