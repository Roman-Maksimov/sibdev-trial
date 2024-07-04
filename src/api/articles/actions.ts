import { Article, ArticleShort } from '@/src/api/articles/types';

import data from './data.json';

export const getArticlesList = async (): Promise<ArticleShort[]> => {
  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    // simulate fetch delay
    setTimeout(() => {
      resolve(
        data.map(({ id, image, title, short }) => ({ id, image, title, short }))
      );
    }, 2_000);
  });
};

export const getArticle = async (id: Article['id']): Promise<Article> => {
  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    // simulate fetch delay
    setTimeout(() => {
      resolve(data.find((item) => item.id === id));
    }, 2_000);
  });
};
