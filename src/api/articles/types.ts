export interface Article {
  id: number;
  image?: string;
  title: string;
  short: string;
  text: string;
}

export type ArticleShort = Pick<Article, 'id' | 'image' | 'title' | 'short'>;

export interface Comment {
  id: number;
  articleId: Article['id'];
  date: string;
  message: string;
}

export interface AddArticleCommentRequest {
  articleId: Comment['id'];
  message: Comment['message'];
}

export type AddArticleCommentResponse = Comment;
