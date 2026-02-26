import styles from './section5.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import check from '@/assets/LandingPage/section5/check.png';
import bg from '@/assets/LandingPage/bg-lp-1.svg';

export default function Section5() {

  function box(title: string, subTitle: string, valorAntigo: string, valorAtual: string, cobranca: string, beneficios: string[], linkCompra: string) {
    return (
      <div className={styles['box']} >
        <div className={styles['infos']}>
          <div className={styles['title']}>
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
          <div className={styles['valor']}>
            <p className={styles['valor-antigo']}>{valorAntigo}</p>
            <p className={styles['valor-atual']}>{`${valorAtual}`}<span>{`/${cobranca}`}</span></p>
          </div>
          <div className={styles['beneficios']}>
            {beneficios.map((item, index) => (
              <div key={index} className={styles['beneficio']}>
                <Image src={check} alt={'check'} width={24} height={24} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href={`/${linkCompra}`} className={styles['button-planos']}>Comprar</Link>
      </div>
    );
  }

  const boxes = [
    {
      title: 'Plano Básico',
      subTitle: 'Ideal para começar: cadastro de pacientes e agenda.',
      valorAntigo: 'R$214,00',
      valorAtual: 'R$147,90',
      cobranca: 'mensal',
      beneficios: [
        'Cadastro ilimitado de pacientes;',
        'Agenda e agendamento de consultas;',
        'Prontuário eletrônico básico;',
        'Avalie a plataforma sem compromissos;',
        '1 profissional;',
      ],
      linkCompra: '',
    },
    {
      title: 'Plano Profissional',
      subTitle: 'Para clínicas em crescimento com múltiplos profissionais.',
      valorAntigo: 'R$1900,00',
      valorAtual: 'R$1197,00',
      cobranca: 'mensal',
      beneficios: [
        'Tudo do Básico;',
        'Múltiplos profissionais e especialidades;',
        'Convênios e faturamento;',
        'Relatórios e indicadores;',
        'Ideal para pequenas e médias clínicas;',
      ],
      linkCompra: '',
    },
    {
      title: 'Plano Clínica',
      subTitle: 'Solução completa para clínicas e redes com alta demanda.',
      valorAntigo: 'R$5700,00',
      valorAtual: 'R$2847,00',
      cobranca: 'anual',
      beneficios: [
        'Tudo do Profissional;',
        'Múltiplas unidades;',
        'Controle de estoque e materiais;',
        'API e integrações;',
        'Suporte prioritário;',
        'Ideal para redes e grandes equipes;',
      ],
      linkCompra: '',
    },
  ];

  return (
    <section className={styles['section5']}>
      <Image src={bg} alt="" className={styles['bg']}></Image>
      <div className={styles['container']}>
        <div className={styles['title']} >
          <h2>Escolha o plano ideal para sua clínica</h2>
          <p>Do consultório ao grupo de clínicas: encontre o plano que melhor atende à sua realidade, com opções para profissionais autônomos, clínicas e redes.</p>
        </div>
        <div className={styles['boxes']}>
          {boxes.map((item, index) => (
            <div key={index} className={styles['box-border']}>
              {box(item.title, item.subTitle, item.valorAntigo, item.valorAtual, item.cobranca, item.beneficios, item.linkCompra)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
