import {useState, useEffect} from 'react';
import type { Post } from '../pages/types'

const API_BASE = import.meta.env.VITE_API_BASE;

export const usePosts = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_BASE}/posts`)
        .then(res => {
            if(!res.ok) throw new Error('Failed to fetch posts');
            return res.json();
        })
        .then(setData)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return {data, loading, error};
}