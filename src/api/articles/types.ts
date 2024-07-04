export interface Article {
  id: number;
  image?: string;
  title: string;
  short: string;
  text: string;
}

export type ArticleShort = Pick<Article, 'id' | 'image' | 'title' | 'short'>;
