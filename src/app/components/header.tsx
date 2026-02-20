'use client'

import Image from "next/image";
import LogoEmpresa from '@/assets/header/ease-clinicas-logo.svg';

import Link from 'next/link';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

import { GiHamburgerMenu } from "react-icons/gi";

import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles['header-home']}>
            <div>
                <Link href={"/"}>
                    <Image
                        src={LogoEmpresa}
                        alt="Logo Ease Clínicas"
                        className={styles['img-logo']}
                        priority
                    />
                </Link>
                <div className={styles['nav-mobile']}>
                    <Menu menuButton={<MenuButton><GiHamburgerMenu /></MenuButton>} transition align={'end'}>
                        <MenuItem>
                            <Link href={"/"} className={`${styles['item-header']} ${pathname === '/' && styles['active']} ${pathname === '/' && 'active'}`}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={"#"} className={`${styles['item-header']} ${pathname === '/cadastro' && styles['active']} ${pathname === '/cadastro' && 'active'}`}>Cadastrar</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={"#"} className={`${styles['item-header']} ${pathname === '/login' && styles['active']} ${pathname === '/login' && 'active'}`}>Acessar</Link>
                        </MenuItem>
                    </Menu>
                </div>
                <ul className={styles['nav-desktop']}>
                    <Link href={"/"} className={`${styles['item-header']} ${pathname === '/' && styles['active']}`}>Home</Link>
                    <Link href={"#"} className={`${styles['item-header']} ${pathname === '/cadastro' && styles['active']}`}>Cadastrar</Link>
                    <Link href={"#"} className={`${styles['item-header']} ${pathname === '/login' && styles['active']}`}>Acessar</Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;