import { useState } from "react";
import NewPostModal from "../modal/NewpostModal";

function Posts() {
  const [isNewPostModelOpen, setIsNewPostModalOpen] = useState(false);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
 
  const formattedDate = `${year}-${month}-${day}`;
  return (
    <div>
      <div className="cursor-pointer" onClick={() => setIsNewPostModalOpen(true)}>New Post</div>
      {isNewPostModelOpen && (
        <NewPostModal isOpen={isNewPostModelOpen} onClose={() => setIsNewPostModalOpen(false)}>
          <div>Create New Post</div>
          <div>Upload the Image file</div>
          <div>Caption</div>
          <div>Posted on: {formattedDate}</div>
        </NewPostModal>
      )}
      <div>Posts</div>
      <div>Images</div>
      <div>Comments</div>
      <button>Edit Post</button>
    </div>
  )
}

export default Posts