import Header from "./components/header";
import Footer from "./components/footer";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";

import styles from './page.module.scss';

export default function LandingPage() {
  return (
    <div className={styles['page-lp']}>
      <Header />
      <main className={styles['main-content']}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </div>
  );
}
