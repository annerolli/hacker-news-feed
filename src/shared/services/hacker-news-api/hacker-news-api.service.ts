import { IHackerNewsApi } from './hacker-news-api.interfaces';
import {
  TGetNewsItemOptions,
  TNewsItem,
  TNewsList,
} from './hacker-news-api.types';

class HackerNewsApi implements IHackerNewsApi {
  private readonly host = 'https://hacker-news.firebaseio.com/v0/';

  getNewsList(): Promise<TNewsList> {
    return this.callApiMethod('newstories.json?print=pretty');
  }

  getNewsItem({ id }: TGetNewsItemOptions): Promise<TNewsItem> {
    return this.callApiMethod(`item/${id}.json?print=pretty`);
  }

  private callApiMethod(url: string) {
    return fetch(`${this.host}${url}`).then((response) => {
      if (!response.ok) {
        throw new Error('Error occurred!');
      }

      return response.json();
    });
  }
}

const instance = new HackerNewsApi();

export { instance as HackerNewsApi };
