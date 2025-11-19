/* [NOTE, hyunnnchoi, 2025.11.19] 모던한 메인 페이지 디자인으로 개선 */
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to My Blog
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          개발, 기술, 그리고 생각을 공유하는 공간입니다. 
        </p>
      </section>

      {/* Posts Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Latest Posts
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700" />
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <PostCard
              key={slug}
              slug={slug}
              date={date}
              title={title}
              excerpt={excerpt}
            />
          ))}
        </div>

        {allPostsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              아직 포스트가 없습니다. 첫 포스트를 작성해보세요!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
