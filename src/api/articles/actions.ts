'use server';

import { format } from 'date-fns';

import {
  AddArticleCommentRequest,
  AddArticleCommentResponse,
  Article,
  ArticleShort,
  Comment,
} from '@/src/api/articles/types';

import articles from './articles.json';
import comments from './comments.json';

const newComments: Comment[] = [];

export const getArticlesList = async (): Promise<ArticleShort[]> => {
  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    // simulate fetch delay
    setTimeout(() => {
      resolve(
        articles.map(({ id, image, title, short }) => ({
          id,
          image,
          title,
          short,
        }))
      );
    }, 2_000);
  });
};

export const getArticle = async (id: Article['id']): Promise<Article> => {
  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    // simulate fetch delay
    setTimeout(() => {
      resolve(articles.find((item) => item.id === id));
    }, 2_000);
  });
};

export const getArticleComments = async (
  id: Article['id']
): Promise<Comment[]> => {
  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    // simulate fetch delay
    setTimeout(() => {
      resolve(
        [...comments, ...newComments].filter((item) => item.articleId === id)
      );
    }, 2_000);
  });
};

export const addArticleComment = async (
  params: AddArticleCommentRequest
): Promise<AddArticleCommentResponse> => {
  let id =
    (newComments[newComments.length - 1]?.id ??
      comments[comments.length - 1]?.id ??
      0) + 1;

  const payload: Comment = {
    ...params,
    id,
    date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  };

  newComments.push(payload);

  // TODO: use fetch to cache data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 1_000);
  });
};
