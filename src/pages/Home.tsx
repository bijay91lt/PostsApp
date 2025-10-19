import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";

function Home() {
  const { data: posts, loading, error } = usePosts();

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-red-600 text-center">Error: {error}</p>;

  // Shuffle posts and take first 10
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);
  const displayedPosts = shuffledPosts.slice(0, 20  );

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Latest Posts
      </h2>

      <div className="max-w-2xl mx-auto w-full h-full gap-6 grid grid-cols-1">
        {displayedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
