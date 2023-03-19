import { useEffect, useState } from 'react';
import { useFetchComment } from '../../../entities/comment';
import { TComment, TItemId } from '../../../shared/services/hacker-news-api';
export function useFetchItemsController(itemIds: TItemId[]) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<TComment[] | null>(null);
  const fetchComment = useFetchComment();

  useEffect(() => {
    if (itemIds.length === 0) return;

    setLoading(true);

    Promise.allSettled(itemIds.map((itemId) => fetchComment(itemId))).then(
      (results) => {
        const comments = results.reduce<TComment[]>((acc, result) => {
          if (result.status === 'rejected') {
            return acc;
          }

          acc.push(result.value);

          return acc;
        }, []);

        setItems(comments);
        setLoading(false);
      }
    );
  }, [itemIds]);

  return {
    loading,
    items,
  };
}
