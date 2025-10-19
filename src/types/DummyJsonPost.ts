export interface DummyJSONPost{
    id: number;
    userId: number;
    title: string;
    body:string;
    tags?: string[];
    reactions?: number | { likes: number; dislikes: number };
}