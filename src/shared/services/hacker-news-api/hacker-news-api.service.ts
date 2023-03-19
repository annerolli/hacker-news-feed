import { IHackerNewsApi } from './hacker-news-api.interfaces';
import { assertComment, assertStory } from './hacker-news-api.lib';
import {
  TComment,
  TGetItemOptions,
  TItem,
  TItemId,
  TStory,
} from './hacker-news-api.types';

class HackerNewsApi implements IHackerNewsApi {
  private readonly host = 'https://hacker-news.firebaseio.com/v0/';

  getItem({ itemId }: TGetItemOptions): Promise<TItem> {
    return this.callApiMethod(`item/${itemId}.json?print=pretty`);
  }

  getStory(options: TGetItemOptions): Promise<TStory> {
    return this.getItem(options).then((item) => {
      if (!assertStory(item)) {
        throw new Error(`Item with id ${options.itemId} is not a Story`);
      }

      return item;
    });
  }

  getNewStories(): Promise<TItemId[]> {
    return this.callApiMethod('newstories.json?print=pretty');
  }

  getComment(options: TGetItemOptions): Promise<TComment> {
    return this.getItem(options).then((item) => {
      if (!assertComment(item)) {
        throw new Error(`Item with id ${options.itemId} is not a Comment`);
      }

      return item;
    });
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
