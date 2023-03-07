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
