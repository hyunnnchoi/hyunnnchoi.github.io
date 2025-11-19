import { getAllPostSlugs, getPostData } from "@/lib/posts";
import styles from '@/styles/layout.module.css';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{postData.title}</h1>
            <div style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
                <time>{postData.date}</time>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
            />
        </article>
    );
}
