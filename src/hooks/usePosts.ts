import type { Post } from '../types/PostType'
import type {DummyJSONPost} from "../types/DummyJsonPost"
import { useQuery } from '@tanstack/react-query';

const API_BASE = import.meta.env.VITE_API_BASE;

interface DummyJSONResponse{
    posts: DummyJSONPost[];
    total: number;
    skip: number;
    limit: number;
}

const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch(`${API_BASE}/posts`)

    if(!res.ok){
        throw new Error('Failed to fetch posts');
    }

    const json = await res.json() as DummyJSONResponse;

    return json.posts.map((post) => ({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
        tags: post.tags,
        reactions:
            typeof post.reactions === 'object'
                ? post.reactions.likes ?? 0
                : post.reactions ?? 0,
        image: `https://picsum.photos/seed/${post.id}/400/300`,

    }));
}

export const usePosts = () => {
   return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
   });
}