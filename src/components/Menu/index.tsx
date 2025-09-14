import { HistoryIcon, HouseIcon, SunIcon, SettingsIcon } from 'lucide-react';
import styles from './styles.module.css';


export function Menu() {
    
    return <nav className={styles.menu}>
        <a className={styles.menuLink} href='#'>
            <HouseIcon size={64}/>
        </a>

        <a className={styles.menuLink} href='#'>
            <HistoryIcon size={64}/>
        </a>

        <a className={styles.menuLink} href='#' >
            <SettingsIcon size={64}/>
        </a>

        <a className={styles.menuLink} href='#'>
            <SunIcon size={64}/>
        </a>
    </nav>;
}