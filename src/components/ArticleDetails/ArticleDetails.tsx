import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import { Article } from '@/src/api/articles/types';

export interface ArticleDetailsProps {
  article: Article;
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ article }) => {
  return (
    <>
      {article.image && (
        <Box mb={4}>
          <Image
            src={article.image}
            alt={article.title}
            width={600}
            height={200}
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      )}

      <Typography variant="h1">{article.title}</Typography>

      <Typography component="article" mt={2}>
        {article.text}
      </Typography>
    </>
  );
};
