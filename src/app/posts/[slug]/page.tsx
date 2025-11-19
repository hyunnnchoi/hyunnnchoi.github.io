/* [NOTE, hyunnnchoi, 2025.11.19] 모던한 포스트 상세 페이지 디자인으로 개선 */
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
            </Link>

            {/* Post Header */}
            <header className="mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                    {postData.title}
                </h1>
                
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <time className="inline-flex items-center gap-2 text-sm">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {postData.date}
                    </time>
                </div>
                
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </header>

            {/* Post Content */}
            <div 
                className="prose prose-lg prose-slate dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                    prose-p:text-slate-700 dark:prose-p:text-slate-300
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                    prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-700
                    prose-blockquote:border-l-blue-600 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:py-1 prose-blockquote:px-4
                    prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
            />
        </article>
    );
}
