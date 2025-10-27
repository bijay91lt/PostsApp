import type { ReactNode } from "react";
import type { Post } from "../types/PostType";
import { useForm} from "react-hook-form"
import type {SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  body: string;
  image?: string;
  tags: string;
}
interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (newPost: Omit<Post, "id">) => void;
  children?: ReactNode;
}

const NewPostModal = ({isOpen, onClose, onSubmit, children, }: NewPostModalProps) => {

  const { register, handleSubmit, setValue, reset, formState: {errors},} = useForm<Inputs>({
    defaultValues: {
      title: "",
      body: "",
      image: "",
      tags: "",
    },
    // mode:"onChange"
    mode: "onBlur",
  }) 

  if (!isOpen) return null;

  const onFormSubmit: SubmitHandler< Inputs> = (data) => {
    const newPost: Omit<Post, "id"> = {
      title : data.title,
      body : data.title,
      image: data.image || undefined,
      tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
      reactions: 0,
      userId: 1, 
    };

    // Save to localStorage
    const storedPosts = JSON.parse(localStorage.getItem("userPosts") || "[]");
    storedPosts.unshift({ ...newPost, id: Date.now() });
    localStorage.setItem("userPosts", JSON.stringify(storedPosts));

    // Call parent handler
    if (onSubmit) onSubmit(newPost);
    
    reset();
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        {children}

        <form onSubmit= {handleSubmit(onFormSubmit)} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { 
              required: "Title is required",
              minLength: {value: 3, message: "Title chhoto vayo"},
              maxLength: {value: 100, message: "Title dherai lamo hunu vayena"}
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          <textarea
            placeholder="Body / Caption"
            {...register("body", {required: "Body is required "})}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
          {errors.body && <p className="text-red-500 tex-sm">{errors.body.message}</p>}

          <input
            placeholder="Upload Image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Tags (comma separated)"
            {...register("tags", {
              validate: (value) => {
                if(!value) return true;
                const tags = value.split(",").map((t) => t.trim());
                if(tags.some((t) => t === "")) return "Tags cannot be empty";
                if(tags.length <= 5) return "You can only add upto 5 tags";
                return true;
              },
            })}
            className={`w-full border border-gray-300 rounded px-3 py-2 ${
              errors.tags ? "border-red-500": "border-gray-300"
          }`}
          />

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
