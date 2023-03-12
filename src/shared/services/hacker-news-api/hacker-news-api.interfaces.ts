import {
  TComment,
  TGetItemOptions,
  TItem,
  TItemId,
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
}
