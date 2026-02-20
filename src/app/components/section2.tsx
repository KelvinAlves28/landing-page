import styles from './section2.module.scss';

export default function Section2() {
  return (
    <section className={styles['section2']}>
      <div className={styles['container']}>
        <p><span>Gestão de clínicas em planilhas e papéis</span> gera retrabalho, atrasos e risco de perda de dados, prejudicando a rotina da sua equipe.</p>
        <h2>Com a Ease Clínicas, você <span>cadastra pacientes, agenda consultas e acessa prontuários</span> em um só lugar, de forma simples e segura.</h2>
      </div>
    </section>
  );
}
