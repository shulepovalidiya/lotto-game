interface Plural {
  one: string;
  few: string;
  many: string;
  other?: string;
}

/**
 * Функция для плюрализации (склонения слова в зависимости от количества)
 *
 * @param count количество
 * @param words варианты слова во множественном и единственном числе
 *
 * @returns Возвращает слово в нужном склонении
 */
export const pluralize = (count: number, words: Plural) => {
  const rules = new Intl.PluralRules('ru-RU');
  const pluralKey = rules.select(count) as keyof Plural;

  return words[pluralKey] || words.one;
};
