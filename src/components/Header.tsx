import Link from 'next/link';
import styles from '@/styles/layout.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" className={styles.logo}>
                    Hyunnnchoi.log
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link href="https://github.com/hyunnnchoi" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                        GitHub
                    </Link>
                </nav>
            </div>
        </header>
    );
}
