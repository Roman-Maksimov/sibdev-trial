import { Person } from '@mui/icons-material';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { format } from 'date-fns';
import { cache, FC } from 'react';

import { getArticleComments } from '@/src/api/articles/actions';
import { Article } from '@/src/api/articles/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface CommentsListProps {
  articleId: Article['id'];
}

export const CommentsList: FC<CommentsListProps> = cache(
  async ({ articleId }) => {
    const comments = await getArticleComments(articleId);

    return (
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={comment.message}
              secondary={format(comment.date, 'dd/MM/yyyy HH:mm:ss')}
            />
          </ListItem>
        ))}
      </List>
    );
  }
);
