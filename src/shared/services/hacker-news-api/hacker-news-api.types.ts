export type TNewsListItem = number;

export type TNewsList = TNewsListItem[];

export type TGetNewsItemOptions = {
  id: number;
};

export type TNewsItem = {
  /**
   * Идентефикатор
   */
  id: number;
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
