import { useState } from "react";
import type { ReactNode } from "react";
import type { Post } from "../types/PostType";

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (newPost: Omit<Post, "id">) => void;
  children?: ReactNode;
}

const NewPostModal = ({
  isOpen,
  onClose,
  onSubmit,
  children,
}: NewPostModalProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    const newPost: Omit<Post, "id"> = {
      title,
      body,
      image: image || undefined,
      tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      reactions: 0,
      userId: 1, // you can customize this later
    };

    // Save to localStorage
    const storedPosts = JSON.parse(localStorage.getItem("userPosts") || "[]");
    storedPosts.unshift({ ...newPost, id: Date.now() });
    localStorage.setItem("userPosts", JSON.stringify(storedPosts));

    // Call parent handler
    if (onSubmit) onSubmit(newPost);

    // Reset form
    setTitle("");
    setBody("");
    setImage("");
    setTags("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        {children}

        <div className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            placeholder="Body / Caption"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
          <input
            placeholder="Upload Image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImage(reader.result as string); // store as base64 string
                };
                reader.readAsDataURL(file);
              }
            }}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
