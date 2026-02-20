import styles from './section3.module.scss';
import Image, { StaticImageData } from 'next/image';
import iconeAgilidade from '@/assets/LandingPage/section3/agilidade.png';
import iconePrecisao from '@/assets/LandingPage/section3/precisao.png';
import iconePersonalizacao from '@/assets/LandingPage/section3/personalizacao.png';
import iconeEficiencia from '@/assets/LandingPage/section3/eficiencia.png';
import iconeAcessibilidade from '@/assets/LandingPage/section3/acessibilidade.png';

export default function Section3() {

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
      icon: iconeAgilidade,
      title: 'Agilidade',
      text: 'Agende consultas e gerencie a agenda da clínica em poucos cliques.',
    },
    {
      icon: iconePrecisao,
      title: 'Precisão',
      text: 'Prontuários organizados e dados seguros, com menos erros e mais confiabilidade.',
    },
    {
      icon: iconePersonalizacao,
      title: 'Personalização',
      text: 'Adapte à sua clínica: múltiplos profissionais, especialidades e convênios.',
    },
    {
      icon: iconeEficiencia,
      title: 'Eficiência',
      text: 'Libere tempo para o que importa: cuidar dos pacientes.',
    },
    {
      icon: iconeAcessibilidade,
      title: 'Acessibilidade',
      text: 'Acesse de qualquer lugar, a qualquer momento.',
    },
  ];

  return (
    <section className={styles['section3']}>
      <div className={styles['container']}>
        <div className={`${styles['box']} ${styles['box1']}`} >
          <h3>A Ease Clínicas é a melhor escolha para a sua clínica!</h3>
        </div>
        {boxes.map((item, index) => (
          box(item.icon, item.title, item.text, index)
        ))}
      </div>
    </section>
  );
}
