import { usePosts } from "../hooks/usePosts";

function Home() {
  const { data: posts, loading, error } = usePosts();

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error)
    return <p className="p-6 text-red-600 text-center">Error: {error}</p>;

  // Shuffle posts and take first 10
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);
  const displayedPosts = shuffledPosts.slice(0, 10);

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Latest Posts
      </h2>

      <div className="max-w-2xl mx-auto w-full gap-6">
        {displayedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Post Image */}
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}

            {/* Post Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-700">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-700 line-clamp-3">{post.body}</p>

              {/* User and Reactions */}
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>👤 User {post.userId}</span>
                <span>❤️ {post.reactions}</span>
              </div>

              {/* Optional Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
