/* [NOTE, hyunnnchoi, 2025.11.19] 모던한 카드 디자인으로 개선 */
import Link from 'next/link';

interface PostCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export default function PostCard({ title, excerpt, date, slug }: PostCardProps) {
    return (
        <article className="group relative">
            <Link href={`/posts/${slug}`} className="block">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="relative">
                        <time className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {date}
                        </time>
                        
                        <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {title}
                        </h2>
                        
                        <p className="mt-3 text-slate-600 dark:text-slate-300 line-clamp-3">
                            {excerpt}
                        </p>
                        
                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                            <span>Read more</span>
                            <svg 
                                className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
