import { usePosts } from '../hooks/usePosts';


function Home() {
    const {data: posts, loading, error, } = usePosts();

    if(loading) return <p className='p-6'>Loading...</p>
    if(error) return <p className='p-6 text-red-600'>Error: {error}</p>

    const ranPost = posts.sort(() => Math.random() -0.5);
    const displayedPosts = ranPost.slice(0, 10);
  return (
    <>
    <div className="space-y-6">
      <div className="grid gap-5">
        {displayedPosts.map(post => (
          <article
            key={post.id}
            className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">{post.title}</h3>
            <p className="mt-3 text-gray-700">{post.body}</p>
            <div className="mt-3 text-sm text-gray-500">
              — by User <span className="font-mono">{post.userId}</span>
            </div>
          </article>
        ))}
      </div>
      </div>
    </>
  )
}

export default Home