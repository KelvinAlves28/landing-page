'use client'

import Image from "next/image";
import LogoEmpresa from '@/assets/header/ease-clinicas-logo.svg';
import LogoInsta from '@/assets/footer/instagram.svg';
import LogoEmail from '@/assets/footer/email.svg';
import IconeEnviar from '@/assets/footer/icon-enviar.svg';

import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {

    return (
        <footer className={`${styles['footer']}`}>
            <div className={`${styles['container']}`}>
                <div className={`${styles['footer-content']}`}>
                    <div className={`${styles['content1']}`}>
                        <Image className={`${styles['logo']}`} src={LogoEmpresa} alt=""/>
                        <div className={`${styles['icones-sociais']}`}>
                            <Link href="/" target="_blank">
                                <Image src={LogoInsta} alt="Instagram" width={35} height={35}/>
                            </Link>
                            <Link href="mailto:/" target="_blank">
                                <Image src={LogoEmail} alt="Email" width={35} height={35}/>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles['content2']}`}>
                        <span>Sobre nós</span>
                        <Link href={'/'}>Quem somos</Link>
                        <Link href={'/'}>Contato</Link>
                    </div>
                    <div className={`${styles['content3']}`}>
                        <div className={`${styles['text']}`}>
                            <span>Novidades</span>
                            <p>Cadastre-se para receber e-mails com atualizações e promoções exclusivas.</p>
                        </div>
                        <div className={`${styles['input']}`}>
                            <input type="text" placeholder="Insira seu e-mail" />
                            <button type="button" aria-label="Enviar e-mail para cadastro na newsletter">
                                <Image src={IconeEnviar} alt="" aria-hidden />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styles['rodape']}`}>
                    <p>Copyright @ 2025 Laudos Psicologicos ltd. Todos os direiros reservados.</p>
                </div>
            </div >
        </footer >
    )
}

export default Footer;