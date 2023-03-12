import { TComment, TItem, TStory } from './hacker-news-api.types';

/**
 * Возвращает логическое значение, указывающее,
 * является ли item элементом TStory
 */
export function assertStory(item: TItem): item is TStory {
  return item.type === 'story';
}

/**
 *  Возвращает логическое значение, указывающее,
 * является ли item элементом TComment
 */
export function assertComment(item: TItem): item is TComment {
  return item.type === 'comment';
}
