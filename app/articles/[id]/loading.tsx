import { Skeleton, Typography } from '@mui/material';
import { FC } from 'react';

export const ArticlePageLoading: FC = () => {
  return (
    <>
      <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
      <Typography variant="h1">
        <Skeleton />
      </Typography>
      <Skeleton variant="rounded" height={400} sx={{ mt: 2 }} />
    </>
  );
};

export default ArticlePageLoading;
