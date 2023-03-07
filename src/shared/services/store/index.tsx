import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { TNewsItem, TNewsItemId, TNewsList } from '../hacker-news-api';

type TState = {
  news: {
    ids: TNewsList | null;
    storage: Record<TNewsItemId, TNewsItem>;
  };
};

type TStore = {
  state: TState;
  setState: (cb: (state: TState) => TState) => void;
};

export const initialState: TState = {
  news: {
    ids: null,
    storage: {},
  },
};

export const StoreContext = createContext<TStore | undefined>(undefined);

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<TState>(initialState);

  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStoreContext() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('Wrapped app in store provider');
  }

  return context;
}

export function useStoreState() {
  const store = useStoreContext();
  return store.state;
}

export function useStoreSetState() {
  const store = useStoreContext();
  return store.setState;
}

// export function useStoreSelector(selector: (state: TState) => unknown) {
//   const state = useStoreState();

//   return selector(state);
// }
