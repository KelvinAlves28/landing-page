import styles from './section4.module.scss';
import Image, { StaticImageData } from 'next/image';
import icone1 from '@/assets/LandingPage/section4/Circled-1.png';
import icone2 from '@/assets/LandingPage/section4/Circled-2.png';
import icone3 from '@/assets/LandingPage/section4/Circled-3.png';

export default function Section4() {

  function box(icone: StaticImageData, title: string, text: string, key: number) {
    return (
      <div key={key} className={styles['box']} >
        <div className={styles['circle-icon']}>
          <Image src={icone} alt={`Ícone ${title}`} />
        </div>
        <div className={styles['text']}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    );
  }

  const boxes = [
    {
      icon: icone1,
      title: 'Cadastre sua clínica',
      text: 'Registre a clínica, os profissionais e configure especialidades e convênios.',
    },
    {
      icon: icone2,
      title: 'Cadastre os pacientes',
      text: 'Inclua pacientes, histórico e prontuários em um ambiente organizado e seguro.',
    },
    {
      icon: icone3,
      title: 'Agende e acompanhe',
      text: 'Gerencie a agenda de consultas, confirmações e lembretes para os pacientes.',
    }
  ];

  return (
    <section className={styles['section4']}>
      <div className={styles['container']}>
        <div className={styles['title']} >
          <h2>Simplifique a gestão da sua clínica <span>em três passos simples!</span></h2>
        </div>
        <div className={styles['boxes']}>
          {boxes.map((item, index) => (
            box(item.icon, item.title, item.text, index)
          ))}
        </div>
      </div>
    </section>
  );
}
