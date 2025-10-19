import { useState, useEffect } from "react";
import NewPostModal from "../modal/NewPostModal";
import type { Post } from "../types/PostType";

function Posts() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  // Load posts from localStorage
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("userPosts") || "[]");
    setUserPosts(storedPosts);
  }, []);

  // Add new post
  const addNewPost = (newPost: Omit<Post, "id">) => {
    const postWithId: Post = { ...newPost, id: Date.now() };
    const updatedPosts = [postWithId, ...userPosts];
    setUserPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="max-w-2xl mx-auto w-full h-full gap-6 grid grid-cols-1">
      {/* New Post Button */}
      <button
        className="mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        onClick={() => setIsNewPostModalOpen(true)}
      >
        New Post
      </button>
      {/* New Post Modal */}
      {isNewPostModalOpen && (
        <NewPostModal
          isOpen={isNewPostModalOpen}
          onClose={() => setIsNewPostModalOpen(false)}
          onSubmit={addNewPost}
        >
          <div className="font-semibold text-lg">Create New Post</div>
        </NewPostModal>
      )}

      {/* Horizontal Feed */}
      {userPosts.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">No posts yet</p>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory h-screen">
          {userPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-full h-full snap-start p-4"
            >
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden h-full">
                {/* Post Image - full width */}
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto max-h-[400px] object-cover"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
