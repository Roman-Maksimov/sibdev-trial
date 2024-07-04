import { Stack } from '@mui/material';
import { FC } from 'react';

import { getArticlesList } from '@/src/api/articles/actions';
import { ArticlesItem } from '@/src/components/Articles/ArticlesItem';

export const ArticlesList: FC = async () => {
  const articles = await getArticlesList();

  return (
    <Stack gap={2}>
      {articles.map((article) => (
        <ArticlesItem key={article.id} article={article} />
      ))}
    </Stack>
  );
};
