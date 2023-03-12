import {
  TComment,
  TGetItemOptions,
  TGetNewsItemOptions,
  TItem,
  TItemId,
  TNewsItem,
  TNewsList,
  TStory,
} from './hacker-news-api.types';

export interface IHackerNewsApi {
  /**
   * Запрашивает сущность по идентификатору
   */
  getItem(options: TGetItemOptions): Promise<TItem>;

  /**
   * Запрашивает сущность, являющуюся TStory, по идентификатору
   */
  getStory(options: TGetItemOptions): Promise<TStory>;

  /**
   * Запрашивает идентификаторы сущностей, являющееся TStory
   */
  getNewStories(): Promise<TItemId[]>;

  /**
   * Запрашивает сущность, являющуюся TComment, по идентификатору
   */
  getComment(options: TGetItemOptions): Promise<TComment>;

  /**
   * @deprecated Используй getNewStories
   * Запрашивает список новостей
   */
  getNewsList(): Promise<TNewsList>;

  /**
   * @deprecated Используй getStory
   * Запрашивает конкретную новость
   * @param options параметры запроса (айди новости, сопутствующие данные)
   */
  getNewsItem(options: TGetNewsItemOptions): Promise<TNewsItem>;
}
