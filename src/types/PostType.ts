export interface Post{
  id: number;
  userId: number;
  title: string;
  body: string;
  tags?: string [];
  reactions: number;
  image?: string;
}
