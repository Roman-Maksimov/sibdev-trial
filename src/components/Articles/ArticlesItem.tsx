import { Panorama } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { ArticleShort } from '@/src/api/articles/types';

export interface ArticlesItemProps {
  article: ArticleShort;
}

export const ArticlesItem: FC<ArticlesItemProps> = ({ article }) => {
  return (
    <Card>
      <Stack direction="row">
        <Stack alignItems="center" justifyContent="center" p={2}>
          {article.image ? (
            <Box position="relative" width={140} height={140}>
              <Image
                src={article.image}
                alt={article.title}
                objectFit="cover"
                fill
              />
            </Box>
          ) : (
            <Stack
              alignItems="center"
              justifyContent="center"
              width={140}
              height={140}
              bgcolor="background.gray"
              color="text.disabled"
            >
              <Panorama />
            </Stack>
          )}
        </Stack>
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.short}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              href={`/articles/${article.id}`}
              size="small"
              color="primary"
            >
              Read more
            </Button>
          </CardActions>
        </Box>
      </Stack>
    </Card>
  );
};
