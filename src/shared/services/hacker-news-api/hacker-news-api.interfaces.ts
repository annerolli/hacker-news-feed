import {
  TGetNewsItemOptions,
  TNewsItem,
  TNewsList,
} from './hacker-news-api.types';

export interface IHackerNewsApi {
  /**
   * Список новостей
   * @param options параметры запроса (кол-во записей, сортировка)
   */
  getNewsList(): Promise<TNewsList>;
  /**
   * Новость
   * @param options параметры запроса (айди новости, сопутсвтущие данные)
   */
  getNewsItem(options: TGetNewsItemOptions): Promise<TNewsItem>;
}
