import {
  HackerNewsApi,
  TComment,
  TItemId,
} from '../../../shared/services/hacker-news-api';
import {
  useStoreDispatch,
  useStoreState,
} from '../../../shared/services/store';

export function useFetchComment(): (itemId: TItemId) => Promise<TComment> {
  const store = useStoreState();
  const dispatch = useStoreDispatch();

  return (itemId) => {
    const comment = store.comments.storage[itemId];

    if (comment !== undefined) {
      return Promise.resolve(comment);
    }

    return HackerNewsApi.getComment({ itemId }).then((comment) => {
      dispatch({
        type: 'add_comment',
        payload: comment,
      });

      return comment;
    });
  };
}
