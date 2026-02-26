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

    const menuItem = (href: string, text: string) => {
        return (
            <MenuItem className={styles['menu-item']}>
                <Link href={href} className={`${styles['item-link']} ${pathname === href && styles['active']}`}>{text}</Link>
            </MenuItem>
        )
    }

    const menuDesktopItem = (href: string, text: string) => {
        return (
            <li className={`${styles['item-header']} ${pathname === href && styles['active']}`}>
                <Link href={href}>{text}</Link>
            </li>
        )
    }

    return (
        <header className={`${styles['header-home']}`}>
            <div className={styles['header-content']}>
                <Link href={"/"} className={styles['logo-link']}>
                    <Image
                        src={LogoEmpresa}
                        alt={`Logo da empresa Empresa`}
                        className={styles['img-logo']}
                        width={300}
                        height={50}
                        priority
                    />
                </Link>
                <Menu
                    menuButton={
                        <MenuButton className={styles['menu-button-mobile']}>
                            <GiHamburgerMenu />
                        </MenuButton>}
                    transition
                    align={'end'}
                    >
                    {menuItem("/", "Home")}
                    {menuItem("#", "Cadastrar")}
                    {menuItem("#", "Acessar")}
                </Menu>
                <ul className={styles['menu-desktop']}>
                    {menuDesktopItem("/", "Home")}
                    {menuDesktopItem("#", "Cadastrar")}
                    {menuDesktopItem("#", "Acessar")}
                </ul>
            </div >
        </header >
    )
}

export default Header;