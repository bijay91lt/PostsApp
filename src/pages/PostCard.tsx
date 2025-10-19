import type { Post } from "../types/PostType";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
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
        <h3 className="text-lg font-semibold text-blue-700">{post.title}</h3>
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
  );
};

export default PostCard;
