import { Skeleton, Stack, Typography } from '@mui/material';
import { FC, Suspense } from 'react';

import { ArticlesList } from '@/src/components/Articles/ArticlesList';

const Loading: FC = () => {
  return <Typography>Loading...</Typography>;
};

export const Articles: FC = async () => {
  return (
    <Suspense
      fallback={
        <Stack gap={2}>
          {new Array(10).fill(1).map((_, index) => (
            <Skeleton key={index} variant="rounded" height={160} />
          ))}
        </Stack>
      }
    >
      <ArticlesList />
    </Suspense>
  );
};
