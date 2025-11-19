import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 800 }}>Latest Posts</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
    </section>
  );
}
