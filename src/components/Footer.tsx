import styles from '@/styles/layout.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                © {new Date().getFullYear()} Hyunnnchoi. All rights reserved.
            </div>
        </footer>
    );
}
