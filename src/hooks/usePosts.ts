import {useState, useEffect} from 'react';
import type { Post } from '../types/PostType'
import type {DummyJSONPost} from "../types/DummyJsonPost"

const API_BASE = import.meta.env.VITE_API_BASE;

interface DummyJSONResponse{
    posts: DummyJSONPost[];
    total: number;
    skip: number;
    limit: number;
}

export const usePosts = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_BASE}/posts`)
        .then(res => {
            if(!res.ok) throw new Error('Failed to fetch posts');
            return res.json() as Promise<DummyJSONResponse>;
        })
        .then(json => {
            const enrichedPosts: Post [] = json.posts.map((post) => ({
                id: post.id,
                userId:post.userId,
                title: post.title,
                body: post.body,
                tags: post.tags,
                reactions: 
                    typeof post.reactions === 'object'
                    ? post.reactions.likes
                    : post.reactions ?? 0,
                image: `https://picsum.photos/seed/${post.id}/400/300`
            }));

            setData(enrichedPosts);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return {data, loading, error};
}