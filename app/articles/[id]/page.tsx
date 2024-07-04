import { notFound } from 'next/navigation';
import { FC } from 'react';

import { getArticle } from '@/src/api/articles/actions';
import { ArticleDetails } from '@/src/components/ArticleDetails/ArticleDetails';

interface ArticlePageProps {
  params: { id: string };
}

export const ArticlePage: FC<ArticlePageProps> = async ({ params }) => {
  const article = await getArticle(parseInt(params.id));

  if (!article) {
    return notFound();
  }

  return <ArticleDetails article={article} />;
};

export default ArticlePage;
