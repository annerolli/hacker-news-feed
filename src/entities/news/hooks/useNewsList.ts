import { useEffect } from 'react';
import { useStoreState } from '../../../shared/services/store';
import { useFetchNewsList } from './useFetchNewsList';

export function useNewsList() {
  const state = useStoreState();
  const list = state.news.ids;
  const hasFetchedEver = list !== null;
  const fetchNewsList = useFetchNewsList();

  useEffect(() => {
    if (hasFetchedEver) return;
    fetchNewsList();
  }, []);

  return list;
}
