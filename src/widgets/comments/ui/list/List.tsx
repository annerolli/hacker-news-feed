import { List as MUIList, ListItem } from '@mui/material';
import { FC } from 'react';
import { CommentItem } from '../../../../entities/comment';
import { TComment } from '../../../../shared/services/hacker-news-api';

type TProps = {
  comments: TComment[];
};

export const List: FC<TProps> = ({ comments }) => (
  <MUIList>
    {comments.map((comment) => (
      <ListItem key={comment.id}>
        <CommentItem data={comment} />
      </ListItem>
    ))}
  </MUIList>
);
