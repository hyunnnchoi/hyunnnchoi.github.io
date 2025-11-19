import Link from 'next/link';
import styles from './PostCard.module.css';

interface PostCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export default function PostCard({ title, excerpt, date, slug }: PostCardProps) {
    return (
        <article className={styles.card}>
            <Link href={`/posts/${slug}`} className={styles.link}>
                <div className={styles.content}>
                    <time className={styles.date}>{date}</time>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.excerpt}>{excerpt}</p>
                    <span className={styles.readMore}>Read more →</span>
                </div>
            </Link>
        </article>
    );
}
