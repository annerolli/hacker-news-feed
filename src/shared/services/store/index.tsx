import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
  Dispatch,
} from 'react';
import { TComment, TItemId, TStory } from '../hacker-news-api';

type TState = {
  news: {
    ids: TItemId[] | null;
    storage: Record<TItemId, TStory>;
  };
  comments: {
    storage: Record<TItemId, TComment>;
  };
};

type TStore = {
  state: TState;
  dispatch: Dispatch<TStoreAction>;
};

export const initialState: TState = {
  news: {
    ids: null,
    storage: {},
  },
  comments: {
    storage: {},
  },
};

export const StoreContext = createContext<TStore | undefined>(undefined);

type TStoreActionType = 'set_news_ids' | 'add_news_item' | 'add_comment';

type TStoreAction = {
  type: TStoreActionType;
  payload: any;
};

function storeReducer(state: TState, action: TStoreAction): TState {
  switch (action.type) {
    case 'set_news_ids':
      return {
        ...state,
        news: {
          ...state.news,
          ids: action.payload,
        },
      };

    case 'add_news_item':
      return {
        ...state,
        news: {
          ...state.news,
          storage: {
            ...state.news.storage,
            [action.payload.id]: action.payload,
          },
        },
      };

    case 'add_comment':
      return {
        ...state,
        comments: {
          storage: {
            [action.payload.id]: action.payload,
          },
        },
      };
    default:
      return state;
  }
}

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
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

export function useStoreDispatch() {
  const store = useStoreContext();
  return store.dispatch;
}

// export function useStoreSelector(selector: (state: TState) => unknown) {
//   const state = useStoreState();

//   return selector(state);
// }
