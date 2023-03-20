import { FC, ReactNode, useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import { Pages } from '../../../shared/core/router';
import { ForceUpdateFeed } from '../ui/force-update-feed';
import { GoToFeed } from '../ui/go-to-feed';

const WHITE_PAGE_IDS: string[] = [Pages.FEED, Pages.NEWS_ITEM];

export function useActions() {
  const rawMatches = useMatches();
  const matches = useMemo(() => {
    return rawMatches
      .filter(({ id }) => WHITE_PAGE_IDS.includes(id))
      .map(({ id }) => id);
  }, [rawMatches]);

  let before: FC | null = null;
  let after: FC | null = null;

  switch (true) {
    case matches.includes(Pages.FEED):
      after = ForceUpdateFeed;
      break;

    case matches.includes(Pages.NEWS_ITEM):
      before = GoToFeed;
      break;
  }

  return {
    Before: before,
    After: after,
  };
}
