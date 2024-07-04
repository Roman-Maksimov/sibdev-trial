import { Skeleton, Stack } from '@mui/material';
import React, { FC, Suspense } from 'react';

import { Article } from '@/src/api/articles/types';
import { CommentsAddForm } from '@/src/components/Comments/CommentsAddForm';
import { CommentsAddFormProvider } from '@/src/components/Comments/CommentsAddFormProvider';
import { CommentsList } from '@/src/components/Comments/CommentsList';

export interface CommentsProps {
  articleId: Article['id'];
}

export const Comments: FC<CommentsProps> = ({ articleId }) => {
  return (
    <Stack>
      <Suspense
        fallback={
          <Stack gap={2}>
            {new Array(3).fill(1).map((_, index) => (
              <Skeleton key={index} variant="rectangular" height={100} />
            ))}
          </Stack>
        }
      >
        <CommentsList articleId={articleId} />
      </Suspense>

      <CommentsAddFormProvider articleId={articleId}>
        <CommentsAddForm />
      </CommentsAddFormProvider>
    </Stack>
  );
};
