export type TNewsListItem = TNewsItemId;

export type TNewsList = TNewsListItem[];

export type TGetNewsItemOptions = {
  id: TNewsItemId;
};

export type TNewsItem = {
  /**
   * Идентефикатор
   */
  id: TNewsItemId;
  /**
   * Ссылка на первоисточник
   */
  url: string;
  /**
   * Автор статьи
   */
  by: string;
  /**
   * Дата публикации
   */
  time: number;
  /**
   * Название статьи
   */
  title: string;
  /**
   * Рейтинг
   */
  score: number;
};

export type TNewsItemId = number;

export type TItem = {
  id: TItemId;
  type?: 'story' | 'comment';
  title?: string;
  text?: string;
  by?: string;
  time?: number;
  score?: number;
  parent?: TItemId;
  kids?: TItemId[];
};

export type TItemId = number;

export type TGetItemOptions = {
  itemId: TItemId;
};

export type TStory = TItem &
  Required<Pick<TItem, 'title' | 'text' | 'by' | 'time' | 'score'>> & {
    type: 'story';
  };

export type TComment = TItem &
  Required<Pick<TItem, 'text' | 'by' | 'time' | 'parent'>> & {
    type: 'comment';
  };
