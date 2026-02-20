import Link from 'next/link';
import styles from './section1.module.scss';

import Image from 'next/image';
import bg from '@/assets/LandingPage/bg-lp.svg';

export default function Section1() {
  return (
    <section className={styles['section1']}>
      <Image src={bg} alt="" className={styles['bg']}></Image>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <h1>Gerencie sua clínica com agilidade e organização</h1>
          <p>A Ease Clínicas centraliza cadastro de pacientes, agendamentos, prontuários e faturamento em uma única plataforma, para você focar no que importa: cuidar dos pacientes.</p>
        </div>
        <Link href={'#'} className={styles['button']}>Comece grátis</Link>
      </div>
    </section>
  );
}
